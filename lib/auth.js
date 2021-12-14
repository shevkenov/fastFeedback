import { useState, useEffect, createContext, useContext } from "react";
import {
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut 
} from "firebase/auth";

import { addUser } from "./firestore";
import { firebaseAuth } from "./firebase";
import { useRouter } from "next/router";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const signinWithGitHub = async() => {
    try {
      const githubUser = await signInWithPopup(firebaseAuth, new GithubAuthProvider());
      const formatedUser = formatUser(githubUser.user);
      router.push("/dashboard");
      const {token, ...userWithoutToken} = formatedUser; 
      await addUser(userWithoutToken);
      setUser(formatedUser);
    } catch (error) {
      console.log(error);
    }
  };

  const signoutUser = () => {
    signOut(firebaseAuth).then(() => setUser(false));
    router.push("/");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(formatUser(user))
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGitHub,
    signoutUser,
  };
}

function formatUser(user){
  //const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    //stripeRole: await getStripeRole(),
    token: user.accessToken,
  };
}

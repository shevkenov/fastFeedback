import { useState, useEffect, createContext, useContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut 
} from "firebase/auth";

import { addUser } from "./firestore";
import { firebaseAuth, firestore } from "./firebase";
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

  const signinUser = async (provider) => {
    try {
      const providedUser = await signInWithPopup(firebaseAuth, provider);
      const formatedUser = formatUser(providedUser.user);
      router.push("/dashboard");
      const {token, ...userWithoutToken} = formatedUser; 
      await addUser(userWithoutToken);
      setUser(formatedUser);
    } catch (error) {
      console.log(error);
    }
  }

  const signinWithGitHub = async() => {
    await signinUser(new GithubAuthProvider());
  };

  const signinWithGoogle = async() => {
    await signinUser(new GoogleAuthProvider());
  }

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
    signinWithGoogle,
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

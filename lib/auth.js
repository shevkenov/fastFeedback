import { useState, useEffect, createContext, useContext } from "react";
import {
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut 
} from "firebase/auth";

import { addUser } from "./firestore";
import { firebaseAuth } from "./firebase";

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

  const signinWithGitHub = async() => {
    try {
      const githubUser = await signInWithPopup(firebaseAuth, new GithubAuthProvider());
      const formatedUser = await formatUser(githubUser.user);
      await addUser(formatedUser);
      setUser(formatedUser)
    } catch (error) {
      console.log(error);
    }
  };

  const signoutFromGitHub = () => {
    return signOut(firebaseAuth).then(() => setUser(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGitHub,
    signoutFromGitHub,
  };
}

async function formatUser(user){
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

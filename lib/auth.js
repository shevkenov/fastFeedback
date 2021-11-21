import { useState, useEffect, createContext, useContext } from "react";
import {
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  getAuth, signOut 
} from "firebase/auth";
import { initializeApp } from "firebase/app";

initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});

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

  const signinWithGitHub = () => {
    return signInWithPopup(getAuth(), new GithubAuthProvider())
      .then((response) => {
        setUser(response.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signoutFromGitHub = () => {
    return signOut(getAuth()).then(() => setUser(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user);
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

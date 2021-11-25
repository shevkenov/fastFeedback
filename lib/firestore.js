import { setDoc, doc, addDoc, collection } from "@firebase/firestore";
import { db } from "./firebase";

export async function addUser(user) {
    await setDoc(doc(db, "users", user.uid), user, {merge: true})
}

export async function addSite(siteData) {
    await addDoc(collection(db, "sites"), siteData);
}

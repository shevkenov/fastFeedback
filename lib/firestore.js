import { setDoc, doc, addDoc, collection, getDocs } from "@firebase/firestore";
import { firestore } from "./firebase";

export async function addUser(user) {
    await setDoc(doc(firestore, "users", user.uid), user, {merge: true})
}

export async function addSite(siteData) {
    await addDoc(collection(firestore, "sites"), siteData);
}

export async function getSites() {
    const collRef = collection(firestore, "sites");
    console.log('ok')
    const sitesCollection = await getDocs(collection(db, "sites"));
    //return sitesCollection;
}

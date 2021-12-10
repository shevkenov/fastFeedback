import { setDoc, doc, addDoc, collection } from "@firebase/firestore";
import { firestore } from "./firebase";

export async function addUser(user) {
    await setDoc(doc(firestore, "users", user.uid), user, {merge: true})
}

export async function addSite(siteData) {
    await addDoc(collection(firestore, "sites"), siteData);
}

export async function createFeedback(feedback) {
    try {
        const response = await addDoc(collection(firestore, "feedbacks"), feedback);
        return response;
    } catch (error) {
        console.log(error)
    }
}
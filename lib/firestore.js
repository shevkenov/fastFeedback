import { setDoc, doc } from "@firebase/firestore";
import { db } from "./firebase";

export async function addUser(user) {
    await setDoc(doc(db, "users", user.uid), user, {merge: true})
}

import { doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

/**
 * Updates the booking status of a cab in Firebase.
 * 
 * @param {id} id 
 * The document id from the Firebase collection.
 * @param {object} data 
 * The updated booking status of a cab. 
 * @returns 
 * Promise 
 */
export async function update(id, data) {
    try {
        const docRef = doc(db, "cabs", id);
        await updateDoc(docRef, data);
        return true;
    }
    catch (e) {
        return false;
    }
}
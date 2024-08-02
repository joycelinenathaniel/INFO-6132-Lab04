import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

/**
 * Loads all documents from the Cabs collection.
 * 
 * @returns 
 * Array with the cabs.
 */
export async function load() {
    const querySnapshot = await getDocs(collection(db, "cabs"));
    return processQuerySnapshot(querySnapshot);
}

/**
 * Converts a Firebase query snapshot into an array.
 * 
 * @param {object} querySnapshot 
 * The query snapshot returned by Firebase.
 * @returns 
 * Array with the data.
 */
function processQuerySnapshot(querySnapshot) {
    const data = [];

    querySnapshot.forEach((doc) => {
        data.push({
            ...doc.data(),
            id: doc.id,
        });
    });

    return data;
}
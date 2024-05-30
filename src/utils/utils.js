import { collection, getDocs, getDoc, doc, getFirestore, query, where, addDoc, serverTimestamp } from "firebase/firestore"
import { app } from "../firebase";

export const getProductDetail = async (id) => {
    const db = getFirestore(app);

    try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { ...docSnap.data(), id: docSnap.id };
        } else {
            return null;
        }

    } catch (e) {
        console.error("Error getting document:", e);
    }
}
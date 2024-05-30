import { collection, getDocs, getDoc, doc, getFirestore, query, where, addDoc, serverTimestamp } from "firebase/firestore"
import { app } from "../firebase";

export const getProductDetail = async (id) => {
    try {
      const db = getFirestore(app);
      const productsCollection = collection(db, "products");
    
      const productQuery = query(productsCollection, where("id", "==", id));
      
      const querySnapshot = await getDocs(productQuery);
      const products = querySnapshot.docs.map(doc => doc.data());

      return products;

    } catch (error) {
      console.error("Error getting product details:", error);
    }
  };


  export const getAllProducts = async () => {
    try {
      const db = getFirestore(app);
      const productsCollection = collection(db, "products");
      const querySnapshot = await getDocs(productsCollection);
      
      const products = querySnapshot.docs.map(doc => doc.data());
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
}
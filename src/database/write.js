import { collection, addDoc } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./config";
export async function save(data) {
  console.log("Saving", data);

  try {
    const dbCollection = collection(db, "Tasks");
    const docRef = await addDoc(dbCollection, data);
    //console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    //console.error("Error adding document: ", e);
    return e;
  }
}
export async function update() {
  // const docRef = doc(db);
  // // Set the "capital" field of the city 'DC'
  // await updateDoc(washingtonRef, {
  //   capital: true,
  // });
  console.log("Updating");
}

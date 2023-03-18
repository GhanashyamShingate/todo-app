import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";
export async function load() {
  console.log("Loading...");
  const data = [];
  const dbCollection = collection(db, "1");
  const querySnapshot = await getDocs(dbCollection);
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  return data;
}

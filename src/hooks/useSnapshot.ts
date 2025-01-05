"use client";
import { db } from "@/firebase";
import User from "@/models/user";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useSnapshot(collectionName: string) {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    if (!collectionName) return;

    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(docs as unknown as User[]);
      },
      (error) => {
        console.error("Error fetching snapshot: ", error);
      }
    );

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, [collectionName]);

  return data;
}

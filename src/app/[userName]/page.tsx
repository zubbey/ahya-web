import { collection, getDocs, query, where } from "firebase/firestore";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import User from "@/models/user";
import { db } from "@/firebase";

const Details = dynamic(() => import("../../components/section/UserDetails"));

interface PageProps {
  params: Promise<{ userName: string }>;
}

async function getUserData(userName: string) {
  const usersCollection = collection(db, "users");
  const q = query(usersCollection, where("userName", "==", userName));
  const querySnapshot = await getDocs(q);

  let userData: User | null = null;
  if (!querySnapshot.empty) {
    userData = {
      id: querySnapshot.docs[0].id,
      ...querySnapshot.docs[0].data(),
    } as unknown as User; // Assuming userName is unique
  }

  return userData;
}

async function UserDetailsPage({ params }: Readonly<PageProps>) {
  const { userName } = await params;
  const userData = await getUserData(userName);

  if (!userData) {
    return notFound();
  }

  return (
    <Suspense>
      <Details user={userData} />
    </Suspense>
  );
}

export default UserDetailsPage;

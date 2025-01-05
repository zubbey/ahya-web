"use client";
import { fCurrency } from "@/utils/formatNumber";
// import { useEffect, useState } from "react";
// import { collection, getDocs, query, where } from "firebase/firestore";
import Chip from "../chip";
import User from "@/models/user";
import { useMemo } from "react";
// import { db } from "@/firebase";

const pointRate = 600;

function UserDetails({ user }: Readonly<{ user: User }>) {
  const amount = useMemo(() => user.point * pointRate, [user]);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">
        Transaction Details for {user?.userName}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2 bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <p>
            <strong>Name:</strong> {user?.firstName} {user?.lastName}
          </p>
          <p className="flex gap-2 items-center">
            <strong>Status:</strong>{" "}
            <Chip text={user?.status ?? ""} type={user?.status ?? ""} />
          </p>
          <p className="flex gap-2 items-center">
            <strong>Active Points:</strong> {user?.point}
            <strong>{fCurrency(amount)}</strong>
          </p>
          <p>
            <strong>Joined:</strong>{" "}
            {new Date(user?.createdAt as string).toDateString()}
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Point History</h2>
          <ul className="divide-y divide-gray-700">
            {user?.pointHistory.map((ph, index) => (
              <li key={index} className="py-2">
                <p>
                  <strong>Points:</strong> {ph.point}
                </p>
                <p>
                  <strong>Note:</strong> {ph.note}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(ph.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <table className="table-auto w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="border border-gray-700 px-4 py-2">Amount</th>
              <th className="border border-gray-700 px-4 py-2">Type</th>
              <th className="border border-gray-700 px-4 py-2">Note</th>
              <th className="border border-gray-700 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {user?.paymentHistory.map((payment, index) => (
              <tr key={index} className="odd:bg-gray-900 even:bg-gray-800">
                <td className="border border-gray-700 px-4 py-2">
                  NGN {payment.amount.toLocaleString()}
                </td>
                <td className="border border-gray-700 px-4 py-2 capitalize">
                  {payment.type}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {payment.note}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {new Date(payment.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDetails;

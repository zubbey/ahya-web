"use client";
import React from "react";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Image from "next/image";
import Icon from "@/components/icon";
import useSnapshot from "@/hooks/useSnapshot";
import { fCurrency } from "@/utils/formatNumber";
import User from "@/models/user";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const pointRate = 600;

function Overview() {
  const users = useSnapshot("users");

  // const pointRate = 600; // NGN 600
  const pointRateData = {
    labels: Array.from({ length: 3 }, (_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - (2 - i));
      return date.toLocaleString("default", { month: "short" });
    }),
    datasets: [
      {
        label: "Point Rate (NGN per point)",
        data: [759, 1100, 600].slice(-3),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const getAmount = (item: User): string => {
    return fCurrency(item.point * pointRate);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-gray-100 h-screen overflow-auto">
      <h1 className="text-3xl font-bold mb-6">AYHA Points</h1>
      <div className="mb-8">
        <Line data={pointRateData} options={options} />
      </div>
      <h2 className="text-xl font-bold mb-4">Partcipants</h2>

      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <Link
            key={user.userName}
            href={`/${user.userName}`}
            className="block w-full px-4 py-2  font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-gray-700 dark:text-white"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/avatar.jpg"
                  className="rounded-full object-cover"
                  alt="..."
                  width={24}
                  height={24}
                />
                <p>{`${user.userName} (${user.point})`}</p>
              </div>
              <div>
                <p>{getAmount(user)}</p>
                <Icon name="ic:round-arrow-forward-ios" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Overview;

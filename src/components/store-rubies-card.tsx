"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const offerData = [
  {
    icon: "/ruby.png",
    content: "60 Rubies",
    price: "0,99$",
  },
  {
    icon: "/ruby.png",
    content: "300 Rubies",
    price: "4,99$",
  },
  {
    icon: "/ruby.png",
    content: "1500 Rubies",
    price: "24,99$",
  },
  {
    icon: "/ruby.png",
    content: "3000 Rubies",
    price: "49,99$",
  },
  {
    icon: "/ruby.png",
    content: "6000 Rubies",
    price: "99,99$",
  },
];

export default function StoreRubiesCard({}: Props) {
  const [activeTab, setActiveTab] = useState("ITEMS");

  return (
    <div className="w-[320px] bg-[#1F1F3B] overflow-hidden rounded-md">
      <div className="w-full text-center py-4 font-bold text-2xl bg-gradient-to-r from-[#1F1F3B] to-[#2C2C49]">
        <p>Store</p>
      </div>
      <div className="flex justify-center text-center bg-gradient-to-r from-[#0e0e25] via-[#20203c] h-10 to-[#2c2c49]">
        <div
          onClick={() => setActiveTab("ITEMS")}
          className={`w-full flex items-center cursor-pointer justify-center self-stretch ${
            activeTab === "ITEMS"
              ? "bg-gradient-to-r from-[#002B5E] via-[#003FA3] to-[#0066FF]"
              : "bg-transparent"
          }`}
        >
          <p>Items</p>
        </div>
        <div
          onClick={() => setActiveTab("RUBIES")}
          className={`w-full flex items-center cursor-pointer justify-center self-stretch ${
            activeTab === "RUBIES"
              ? "bg-gradient-to-r from-[#002B5E] via-[#003FA3] to-[#0066FF]"
              : "bg-transparent"
          }`}
        >
          <p>Rubies</p>
        </div>
      </div>
      <div>
        {offerData.map((offer, index) => (
          <OfferList key={index} data={offer} />
        ))}
      </div>
    </div>
  );
}

function OfferList({ data }: { data: (typeof offerData)[0] }) {
  return (
    <div className="flex items-center justify-between px-4 border-b border-blue-400 py-2">
      <div className="flex items-center gap-4">
        <div>
          <Image src={data.icon} height={40} width={40} alt="Ruby icon" />
        </div>
        <div>{data.content}</div>
      </div>
      <button className="border rounded-md w-[100px]">{data.price}</button>
    </div>
  );
}

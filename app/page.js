"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [openDetail, setOpenDetail] = useState("");

  useEffect(() => {}, [openDetail]);

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
      <div className="text-4xl font-bold text-left text-gray-900">
        Welcome to Journally!
      </div>
      <div className="flex flex-col items-center gap-4"></div>
    </main>
  );
}

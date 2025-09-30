"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; 

export default function BackBtn() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      aria-label="Go back"
      className="cursor-pointer group mb-8 flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2 text-white shadow-lg transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 hover:scale-105"
    >
      <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
      <span className="font-medium">Back</span>
    </button>
  );
}

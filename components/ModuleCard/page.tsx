"use client";
import React from "react";

export default function ModuleCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="min-w-[180px] bg-white rounded-xl shadow-md p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg transition-all border border-gray-200">
      <div className="text-3xl">{icon}</div>
      <div className="font-semibold text-[#002455] text-sm">
        {label}
      </div>
    </div>
  );
}

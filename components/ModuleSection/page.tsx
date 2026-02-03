"use client";
import React from "react";
import ModuleCard from "../ModuleCard/page";

export default function ModuleSection({ title, items }: { title: string; items: { icon: React.ReactNode; label: string }[] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg mb-6 border border-gray-200">
      {/* Section Title */}
      <div className="bg-[#002455] text-white px-4 py-2 rounded-md font-bold text-lg mb-3">
        {title}
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto scrollbar-thin pb-2">
        {items.map((item, index) => (
          <ModuleCard key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
}

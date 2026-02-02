// import { Button } from 'react-native';
"use client";
import { useRouter } from "next/navigation";
import React from "react";

const QualityReports = () => {
  const router = useRouter();

  const data = [
    { title: "QC SUMMARY" },
    { title: "HOURLY CHECKER PRODUCT RECORD" },
    { title: "QC REWORKS" },
    { title: "QC REJECT TYPE WISE" },
    { title: "AQL REPORTS" },
    { title: "AQL VIEW 1" },
    { title: "SEVENZERO CURRENT FLAG" },
    { title: "INSPECTION RESULT" },
    { title: "DAILY RECUT REPORT" },
    { title: "INSPECTION DETAILS" },
    { title: "HOURLY QC PRODUCTION" },
    { title: "QC REWORK SEARCH" },
  ];

  const handleNavigate = () => {
    router.push("/operationsReports");
  };

  return (
    <div className="grid mb-2">
      {/* Page Title */}
      <h1 className="col-12 text-2xl font-extrabold text-[#002455] tracking-wide">
        QUALITY REPORTS
      </h1>

   

      {/* Cards */}
      {data.map((block, index) => (
        <div
          key={index}
          onClick={handleNavigate}
          className="col-12 md:col-6 lg:col-3"
        >
          <div
            className="
              bg-white border border-gray-200 shadow-md rounded-xl h-[90px]
              flex items-center justify-center
              px-3 text-center
              hover:shadow-xl hover:scale-[1.02]
              cursor-pointer
              transition-all duration-300
            "
          >
            <span className="text-[#002455] font-semibold text-sm tracking-wide">
              {block.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QualityReports;

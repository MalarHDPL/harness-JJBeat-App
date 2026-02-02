
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { Dropdown } from "primereact/dropdown";

import { Calendar } from "primereact/calendar";
import DataTableComponent from "../../../components/DataTabel/page";
import { operationsData } from "./mock";
import "./page.css"
export const operationColumns = [
  { field: "reworkCardNo", header: "Rework Card No", sortable: true },
  { field: "lineNo", header: "Line No", sortable: true },
  { field: "styleNo", header: "Style No", sortable: true },
  { field: "itemNo", header: "Item No", sortable: true },
  { field: "color", header: "Color", sortable: true },
  { field: "size", header: "Size", sortable: true },
  { field: "operation", header: "Operation", sortable: true },
  { field: "bundle", header: "Bundle", sortable: true },
  { field: "qty", header: "Qty", sortable: true },
  { field: "status", header: "Status", sortable: true },
  { field: "rework", header: "Rework", sortable: true },
  { field: "garmentOperation", header: "Garment Operation", sortable: true },
  { field: "reworkColorCardNo", header: "Rework Color Card No", sortable: true },
  { field: "runningDate", header: "Running Date Time", sortable: true },
  { field: "receivedDate", header: "Received Date Time", sortable: true },
];

const ReworkReport = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const [date, setDate] = useState<Date | null>(new Date());
  const router = useRouter();
  const data = [
    { title: "REWORK RUNNING", value: "19", color: "bg-blue-500" },
    { title: "REWORK FINISH", value: "62018", color: "bg-green-500" },
    { title: "PREVIOUS RUNNING", value: "135", color: "bg-red-500" },
  ];
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const handleNavigate = () => {
    router.push("/operationsReports");
  };
  const handleGoBack = () => {
    router.push("/dashboard");
  };
  return (
    <div className="grid mb-2">
      {/* Page Title */}
      <h1 className="col-12 text-2xl font-extrabold text-[#002455] tracking-wide">
        REWORK REPORTS
      </h1>

      {data.map((block, index) => (
        <div
          key={index}
          onClick={handleNavigate}
          className="col-12 md:col-4 lg:col-4"
        >
          <div
            className={`
              ${
                block.title === "REWORK RUNNING"
                  ? "bg-[#3DB6B1]"
                  : block.title === "REWORK FINISH"
                  ? "bg-[#537D5D]"
                  : "bg-[#FF3838]"
              }
              text-white
              border shadow-md  h-[100px]
              flex items-center justify-center
              px-3 text-center
              hover:shadow-xl hover:scale-[1.02]
              cursor-pointer
              transition-all duration-300
            `}
          >
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-wide">
                {block.title}
              </span>
              <span className="font-semibold text-sm tracking-wide mt-2">
                {block.value}
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="col-12 md:col-2 lg:col-2">
        <div className="w-full ">
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Line No"
            className="w-full"
          />
        </div>
      </div>
      <div className="col-12 md:col-3 lg:col-3">
        <div className="w-full ">
          <Calendar
            id="buttondisplay"
            value={date}
            onChange={(e) => setDate(e.value)}
            showIcon
            // placeholder="Choose Date"
          />
        </div>
      </div>

      <div className="col-12 md:col-7 lg:col-7">
        <div className="flex justify-end">
          <div
            className="
            bg-[#002455]
            border border-[#1a386f]
            shadow-md
            rounded-lg
            flex items-center justify-center
            px-4 py-2
            text-white font-semibold
            cursor-pointer
            hover:bg-[#1a386f]
            active:scale-95
            transition-all duration-300
            mr-1
          "
          >
            Submit
          </div>
          <div
            onClick={handleGoBack}
            className="
            bg-[#002455]
            border border-[#1a386f]
            shadow-md
            rounded-lg
            flex items-center justify-center
            px-4 py-2
            text-white font-semibold
            cursor-pointer
            hover:bg-[#1a386f]
            active:scale-95
            transition-all duration-300
          "
          >
            Exit
          </div>
        </div>
      </div>
      <div className="col-12">
        <DataTableComponent
          value={operationsData}
          columns={operationColumns}
          removableSort
        />
      </div>
    </div>
  );
};

export default ReworkReport;

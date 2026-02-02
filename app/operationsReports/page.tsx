// import { useState } from 'react';
"use client";
import { useState } from "react";
import Navbar from "@/components/NavBar/page";
import { useRouter } from "next/navigation";
import { Dropdown } from "primereact/dropdown";
import DataTableComponent from "../../components/DataTabel/page";
import "./page.css";
import { operationsData } from "./mock";
import Toggle from "@/components/Toggle/page";
export const operationColumns = [
  { field: "operationCode", header: "Operation Code", sortable: true },
  { field: "operation", header: "Operation", sortable: true },
  { field: "bangla", header: "Bangla", sortable: true },
  { field: "smv", header: "Smv", sortable: true },
  { field: "machineCode", header: "Machine Code", sortable: true },
  { field: "masterOperation", header: "Master Operation", sortable: true },

  {
    field: "skillGrade",
    header: "Skill Grade",
    sortable: true,
  },

  { field: "comments", header: "Comments", sortable: true },
];

const OperationsReports = () => {
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [chains, setChains] = useState(operationsData);
  const [open, setOpen] = useState(false);
  const handleLogout = async () => {
    // alert("dhhdd");
    await fetch("/api/login", { method: "POST" });
    // router.push("/login");
    router.push("/");
  };
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const handleGoBack = () => {
    router.push("/dashboard");
  };
  return (
    <div className="h-screen flex flex-col mt-20">
      <Navbar
        // onMenuClick={() => setIsSidebarOpen(true)}
        handleLogout={handleLogout}
        iconShow={false}
        open={open}
        setOpen={setOpen}
      />
      <div className="flex-1 overflow-y-auto">
        <div className="grid m-1">
          <div className="col-12 md:col-3 lg:col-3">
            <div className="w-full flex items-center border-2 border-[#002455] rounded-xl px-2 h-10 w-48 lg:w-64">
              <i className="pi pi-search text-[#002455] text-sm mr-2"></i>
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm w-full"
              />
            </div>
          </div>
          <div className="col-12 md:col-2 lg:col-2">
            <div className="w-full ">
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Actions"
                className="w-full"
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
                Add
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
      </div>
    </div>
  );
};

export default OperationsReports;

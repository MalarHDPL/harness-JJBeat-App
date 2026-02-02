"use client";
import { useRef, useState } from "react";
import React from "react";
import BarC from "@/components/BarChart/page";
import ChartComponent from "@/components/Graphic/page";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
export default function DashboardHome() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  const router = useRouter();
  const modules = [
    {
      title: "Administration",
      items: [
        { icon: "💻", label: "IT Department", key: "It" },
        { icon: "🛠️", label: "IE Department", key: "Ie" },
        { icon: "🏭", label: "Production Department", key: "Production" },
      ],
    },
    {
      title: "Manufacturing",
      items: [
        { icon: "⚙️", label: "Cutting Modules", key: "Cutting" },
        { icon: "🖨️", label: "Printing Modules", key: "Printing" },
        { icon: "🧵", label: "Embroidery Modules", key: "Embroidery" },
        { icon: "✔️", label: "Quality Modules", key: "Quality" },
      ],
    },
    {
      title: "HR & Payroll",
      items: [
        { icon: "👥", label: "Employee Records", key: "Employees" },
        { icon: "💼", label: "Recruitment", key: "Recruitment" },
        { icon: "💰", label: "Payroll Management", key: "Payroll" },
      ],
    },
    {
      title: "Accounts",
      items: [
        { icon: "📊", label: "Finance Dashboard", key: "Finance" },
        { icon: "🧾", label: "Billing", key: "Billing" },
        { icon: "📁", label: "Expense Reports", key: "Expenses" },
      ],
    },
  ];
  const subModuleData = {
    It: [
      "OPSEQ",
      "Operation Mapping",
      "Bundle Operation",
      "QR Code Building Report",
    ],

    Ie: [
      "Style Operation",
      "Operation Master",
      "IE Report",
      "Operation Reports Modification",
      "Cut Panel Bundle Audit",
      "Daily Forecast Report",
      "SY ID Tracking",
      "Daily Cutting CPI",
    ],

    Production: ["Print & Embroidery QR Gen Reports"],

    Cutting: [
      "OPSEQ",
      "Operation Mapping",
      "Bundle Operation",
      "Cut Panel Audit Report",
      "Daily Cutting CPI",
      "CPI QR Code Building Report",
      "QC Rework Operation",
    ],

    Printing: [
      "Print Production Summary",
      "Printer Status Report",
      "Printing Job Allocation",
    ],

    Embroidery: [
      "Embroidery Line Wise Report",
      "Embroidery QR Upload",
      "Embroidery Machine Report",
    ],

    Quality: [
      "AQL Forms",
      "All Quality Check Forms",
      "Quality Report",
      "Fabric Inspection Forms",
      "Fabric Inspection Report",
      "Fabric Inspection Entry Report",
      "Rework",
      "Mills Fabric Parameter Forms & Reports",
      "Fabric Inspection Mills/Supplier",
      "EDI to Fabric Inspection Forms",
      "Fabric Inspection Comparison Report",
      "Needle Received Stock",
      "Needle Controlled Log",
      "Idle Needle Issue/Receive Details",
      "Needle Reports",
      "Needle Report View",
      "Fabric Inspection Adishtam",
      "Adishtam Fabric Inspection Report",
      "Inline Quality Audit Report",
      "Fabric Lab Inspection",
    ],

    Employees: [
      "Employee Master List",
      "Employee Profile",
      "Attendance Register",
      "Leave History",
      "Department Mapping",
    ],

    Recruitment: [
      "Job Posting",
      "Applicant Tracking",
      "Interview Scheduling",
      "Candidate Evaluation",
      "Offer Letter Generation",
    ],

    Payroll: [
      "Salary Sheet",
      "Payslip Generation",
      "Overtime Calculation",
      "PF & ESI Report",
      "Monthly Payroll Summary",
    ],

    // -------------------- Accounts --------------------
    Finance: [
      "Daily Financial Snapshot",
      "Accounts Overview",
      "Budget Allocation",
      "Profit & Loss Report",
      "Balance Sheet Dashboard",
    ],

    Billing: [
      "Invoice Creation",
      "Invoice History",
      "Pending Payments",
      "Customer Billing Report",
    ],

    Expenses: [
      "Daily Expense Entry",
      "Department-wise Expenses",
      "Expense Approval",
      "Monthly Expense Summary",
    ],
  };

  const handleClick = (item) => {
    setSelectedItem(item.key);
  };
  const handleClickTwo = (item) => {
    alert("Arrow clicked!");
  };
  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
      <span className="font-bold white-space-nowrap text-white">Admin</span>
    </div>
  );

  const footerContent = (
    <div>
      <Button
        label="Ok"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  return (
    // <div className="grid">
    <div className="grid">
      <h1 className="col-12 text-2xl font-bold text-[#002455]">
        ERP Dashboard
      </h1>

      {modules.map((block, index) => (
        <div key={index} className="col-12 md:col-6 lg:col-3">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden h-[230px] flex flex-col border border-gray-200 hover:shadow-2xl transition-all duration-300">
            {/* Header */}
            <div className="text-base font-bold text-white p-3 text-center bg-[#002455]">
              {block.title}
            </div>

            {/* Items */}
            <div className="divide-y divide-gray-200 flex-1 overflow-auto">
              {block.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-100 transition-all duration-200"
                >
                  {/* Left icon + label */}
                  <div
                    onClick={() => handleClick(item)}
                    className="flex items-center"
                  >
                    <span className="mr-2 text-[#002455] text-lg">
                      {item.icon}
                    </span>
                    <span className="text-sm font-semibold text-[#002455] tracking-wide">
                      {item.label}
                    </span>
                  </div>

                  {/* Right arrow */}
                  <span
                    onClick={() => {
                      setSelectedModule(item.key);
                      setVisible(true);
                    }}
                    className="text-[#002455] text-lg cursor-pointer"
                  >
                    ➜
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="col-12">
        <div className="bg-white rounded-xl shadow-lg p-4 mb-2">
          <BarC selectedItem={selectedItem} />
        </div>
      </div>
      <div className="card flex justify-content-center">
        <Dialog
          visible={visible}
          modal
          header={headerElement}
          // footer={footerContent}
          style={{ width: "35rem" }}
          onHide={() => setVisible(false)}
        >
          <h2 className="text-xl font-bold mb-3 text-[#002455] p-1 mt-2">
            {selectedModule ? selectedModule + " Modules" : ""}
          </h2>

          <div className="grid grid-cols-3 p-2">
            {selectedModule &&
              subModuleData[selectedModule]?.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-100 rounded-lg border border-gray-300 text-sm font-semibold text-[#002455] m-1"
                >
                  {item}
                </div>
              ))}
          </div>
        </Dialog>
      </div>
    </div>
  );
}
//   <div className="col-12">
//     <div className="bg-white rounded-xl shadow-lg p-4">
//       <ChartComponent />
//     </div>
//   </div>

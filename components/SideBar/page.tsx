"use client";
import { PanelMenu } from "primereact/panelmenu";
import { usePathname, useRouter } from "next/navigation";
import { Image } from "primereact/image";
import harnessLogo from "./harness.png";

export default function Sidebar({
  open,
  onClose,
  setOpen,
  setHeaderName,
}: any) {
  const router = useRouter();
  const pathname = usePathname();

  const iconLabel = (icon:any, text:any, active:any) => (
    <span
      className={`flex items-center text-sm ${
        active ? "text-[#002455] font-semibold" : "text-blue-900"
      }`}
    >
      <i
        className={`${icon} text-xl mr-2 ${active ? "text-blue-600" : ""}`}
      ></i>
      {text}
    </span>
  );

  const routeTo = (path:any, label:any) => {
    onClose();
    router.push(path);
    setOpen(false);
    setHeaderName(label); // ← Set actual menu name
  };

  const erpMenuItems:any[] = [
    {
      labelName: "Dashboard",
      label: iconLabel("pi pi-home", "Dashboard", pathname === "/dashboard"),
      command: () => routeTo("/dashboard", "ERP Dashboard"),
    },
    {
      labelName: "Chains",
      label: iconLabel(
        "pi pi-shopping-bag",
        "Chains",
        pathname === "/dashboard/users"
      ),
      command: () => routeTo("/dashboard/users", "Chains"),
    },
    {
      labelName: "Quality Reports",
      label: iconLabel(
        "pi pi-check-square",
        "Quality Reports",
        pathname === "/dashboard/qualityReports"
      ),
      command: () => routeTo("/dashboard/qualityReports", "Quality Reports"),
    },
    {
      labelName: "Rework Reports",
      label: iconLabel(
        "pi pi-refresh",
        "Rework Reports",
        pathname === "/dashboard/reworkReport"
      ),
      command: () => routeTo("/dashboard/reworkReport", "Rework Reports"),
    },
    {
      labelName: "Purchase Order",
      label: iconLabel(
        "pi pi-shopping-cart",
        "Purchase Order",
        pathname === "/purchase-order"
      ),
      command: () => routeTo("/purchase-order", "Purchase Order"),
    },
    {
      labelName: "Sales & Marketing",
      label: iconLabel(
        "pi pi-chart-line",
        "Sales & Marketing",
        pathname === "/sales-marketing"
      ),
      command: () => routeTo("/sales-marketing", "Sales & Marketing"),
    },
    {
      labelName: "Dispatch Dept",
      label: iconLabel("pi pi-send", "Dispatch Dept", pathname === "/dispatch"),
      command: () => routeTo("/dispatch", "Dispatch Dept"),
    },
    {
      labelName: "Quality Control",
      label: iconLabel(
        "pi pi-check-circle",
        "Quality Control",
        pathname === "/quality-control"
      ),
      command: () => routeTo("/quality-control", "Quality Control"),
    },
    {
      labelName: "Maintenance Dept",
      label: iconLabel(
        "pi pi-wrench",
        "Maintenance Dept",
        pathname === "/maintenance"
      ),
      command: () => routeTo("/maintenance", "Maintenance Dept"),
    },
    {
      labelName: "Security Dept",
      label: iconLabel(
        "pi pi-shield",
        "Security Dept",
        pathname === "/security"
      ),
      command: () => routeTo("/security", "Security Dept"),
    },
    {
      labelName: "R&D Dept",
      label: iconLabel("pi pi-lightbulb", "R&D Dept", pathname === "/rnd"),
      command: () => routeTo("/rnd", "R&D Dept"),
    },
    {
      labelName: "Cafeteria / Canteen",
      label: iconLabel(
        "pi pi-table",
        "Cafeteria / Canteen",
        pathname === "/canteen"
      ),
      command: () => routeTo("/canteen", "Cafeteria / Canteen"),
    },
  ];

  return (
    <div
      className={`
    bg-white h-full w-64 shadow-lg
    fixed top-0 left-0 z-[60]
    transform transition-all duration-300 ease-in-out
    lg:static lg:translate-x-0
    ${open ? "translate-x-0" : "-translate-x-full"}
  `}
    >
      <div className="py-2 px-1 block lg:hidden border-b border-[#002455]">
        <div onClick={() => window.location.reload()}>
          <Image
            src="https://jayjaymills.com/wp-content/uploads/2022/06/jjLogo.png"
            alt="Company Logo"
            width={"120"}
            height={"60"}
            className="object-contain"
          />
        </div>
        <button
          className="absolute top-4 right-4 text-xl pi pi-times 
               text-[#002455] hover:text-black 
               block lg:hidden "
          onClick={onClose}
        ></button>
        <div className="flex items-center">
           <Image
          src="https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vaGFybmVzcy1kaWdpdGVjaC5qcGc.webp"
          alt="Logo"
          width={"60"}
          height={"20"}
          className="object-contain"
        />
          <span className="text-xl text-[#002455] font-semibold ml-3">
            Harness ERP
          </span>
        </div>
      </div>
      <div className="hidden sm:flex items-center">
        <Image
          src="https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vaGFybmVzcy1kaWdpdGVjaC5qcGc.webp"
          alt="Logo"
          width={"60"}
          height={"20"}
          className="object-contain"
        />
        <span className="text-lg text-[#002455] font-semibold ml-2">
          Harness ERP
        </span>
      </div>

      {/* Scrollable PanelMenu Section */}
      <div className="h-full overflow-y-auto">
        <PanelMenu model={erpMenuItems as any[]} className="text-xs text-[#002455]" />
      </div>
    </div>
  );
}

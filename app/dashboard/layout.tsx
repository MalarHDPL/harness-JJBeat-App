// import { useState } from 'react';
"use client";
import { useState } from "react";
import Navbar from "@/components/NavBar/page";
import Sidebar from "@/components/SideBar/page";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [headerName,setHeaderName]=useState('ERP Dashboard')

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/");
  };
  return (
    <div className="">
      <Navbar
        onMenuClick={() => setIsSidebarOpen(true)}
        handleLogout={handleLogout}
        open={open}
        setOpen={setOpen}
        headerName={headerName}
      />


      <div className="flex h-[calc(100vh-68px)] overflow-hidden mt-[100px] md:mt-14">

        <Sidebar
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          setOpen={setOpen}
          setHeaderName={setHeaderName}
        />

        <main className="flex-1 p-4 overflow-y-auto bg-[#E3E3E3] ">
          {children}
        </main>
      </div>
    </div>
  );
}

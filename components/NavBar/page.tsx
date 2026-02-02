"use client";
import { useState, useRef, useEffect } from "react";
import { Image } from "primereact/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Avatar } from "primereact/avatar";

export default function Navbar({
  onMenuClick,
  handleLogout,
  username = "Admin",
  iconShow = true,
  open,
  setOpen,
  headerName,
}: any) {
  const { user } = useSelector((state: any) => {
    return { user: state.authSlice?.user };
  });

  const router = useRouter();
  const dropdownRef = useRef(null); // ⬅️ NEW

  const handleClickReset = () => {
    router.push("/resetpassword");
  };

  // ⬅️ CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    function handleOutsideClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow-lg z-50 border-b border-[#002455]">
      <div
        className={
          iconShow
            ? "flex items-center justify-between px-3 py-2"
            : "h-16 bg-white flex items-center justify-between px-3 shadow-lg relative z-50 border-b border-[#002455] "
        }
      >
        <div className="flex justify-center items-center gap-3">
          {iconShow && (
            <button
              className="lg:hidden text-3xl pi pi-bars text-[#002455]"
              onClick={onMenuClick}
            ></button>
          )}

          <div
            className="hidden sm:flex justify-center items-center"
            onClick={() => window.location.reload()}
          >
            <Image
              src="https://jayjaymills.com/wp-content/uploads/2022/06/jjLogo.png"
              alt="Company Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        </div>

       <div
  className="md:hidden lg:hidden flex justify-center items-center"
  onClick={() => window.location.reload()}
>
  <Image
    src="https://jayjaymills.com/wp-content/uploads/2022/06/jjLogo.png"
    alt="Company Logo"
    width={120}
    height={60}
    className="object-contain"
  />
</div>

        <div className="flex items-center gap-4">
          {iconShow && (
            <div className="hidden md:flex items-center border-2 border-[#002455] rounded-xl px-3 h-10 w-72">
              <i className="pi pi-search text-[#002455] mr-2"></i>
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm w-full"
              />
            </div>
          )}

          <div ref={dropdownRef} className="relative">
            <div
              onClick={() => setOpen(!open)}
              className=" cursor-pointer  transition"
            >
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
              />
            </div>

            {open && (
              <div className="absolute right-0 m-0 w-44 bg-white shadow-xl rounded-lg border border-gray-200 p-3 z-50">
                <div className="flex flex-row text-[#002455] font-semibold text-sm border-b pb-2 items-center gap-2 cursor-pointer hover:text-[#1a386f]">
                  <Avatar
                    image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                    shape="circle"
                  />

                  <div className="flex flex-col leading-tight">
                    <span>{username}</span>
                    <span className="text-xs font-normal">Executive</span>
                    <span className="text-xs font-normal">admin@gmail.com</span>
                  </div>
                </div>

                <div
                  onClick={handleClickReset}
                  className="text-[#002455] font-semibold text-sm border-b pb-2 flex items-center gap-2 cursor-pointer hover:text-[#1a386f]"
                >
                  <i className="pi pi-refresh text-sm"></i>
                  Reset Password
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full mt-2 bg-[#002455] text-white py-1.5 rounded-lg font-semibold text-sm hover:bg-[#1a386f] flex items-center justify-center gap-2"
                >
                  <i className="pi pi-sign-out text-sm"></i>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {iconShow && (
        <div className="md:hidden px-3 pb-2 pt-1 bg-white shadow-sm">
          <div className="flex items-center border-2 border-[#002455] rounded-xl px-3 h-10 w-full">
            <i className="pi pi-search text-[#002455] mr-2"></i>
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
//  <div className="hidden sm:flex text-2xl font-bold text-[#002455]">
//           {headerName}
//         </div>
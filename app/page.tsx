"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useFormik } from "formik";
import { Image } from "primereact/image";
import "./globals.css";

// import { AppDispatch } from "@/redux/mainStore";
import { LoginMiddleWare } from "@/features/Thunks/auth/authThunks";
import { AppDispatch } from "@/redux/mainStore";
// import { LoginMiddleWare } from "../../features/Thunks/auth/authThunks";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const toast = useRef<Toast>(null);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors: { username?: string; password?: string } = {};

      if (!values.username) {
        errors.username = "Username is required";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }

      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      const payload = {
        companyId: 1,
        companyName: "Jay Jay Mills (Bangladesh) Private Limited",
        divisionId: null,
        divisionName: null,
        userId: values.username,
        password: values.password,
      };

      try {
        const response = await dispatch(LoginMiddleWare(payload)).unwrap();

        if (response) {
          document.cookie = `token=${response.token}; path=/;`;

          if (response.message === "Login successful") {
            toast.current?.show({
              severity: "success",
              summary: "Success",
              detail: "Logged in successfully!",
              life: 2000,
            });

            setTimeout(() => {
              router.push("/dashboard");
            }, 2000);
          } else {
            toast.current?.show({
              severity: "error",
              summary: "Error",
              detail: response.message || "Something went wrong",
              life: 3000,
            });
          }
        }
      } catch (err) {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: "Login failed. Please try again!",
          life: 3000,
        });
        console.error("Login failed:", err);
      } finally {
        setSubmitting(false);
      }
    },
  });
  const handleClickReset = () => {
    router.push("/resetpassword");
  };
  return (
    // <div className="bg-blue-900 h-100vh">
    // <div
    //   className="min-h-screen flex items-center justify-center bg-cover bg-center"
    //   style={{
    //     backgroundImage:
    //       'url("https://jayjaymills.com/wp-content/uploads/2022/07/1.jpg")',
    //   }}
    // >
    <div className="grid w-full overflow-hidden">
      <div
        className="
    col-12 md:col-6 lg:col-6
    h-90 md:h-screen     /* mobile height small, desktop full height */
    flex items-center justify-center
    bg-cover bg-center
  "
        style={{
          backgroundImage:
            'url("https://essgarments.jayjaymills.in/AttendHRM_ESSANG/assets/images/bg_ess.jpg")',
        }}
      ></div>
      <div className="col-12 md:col-6 lg:col-6  flex items-center justify-center bg-cover bg-center bg-[#f6f6f6]">
        <Toast ref={toast} />

        <form
          onSubmit={formik.handleSubmit}
          className="backdrop-blur-md bg-white/20 border border-white/30
                   rounded-2xl shadow-2xl p-10 w-full max-w-md  items-center"
        >
          <div className="flex justify-center mb-5">
            <Image
              src="https://jayjaymills.com/wp-content/uploads/2022/06/jjLogo.png"
              alt="Company Logo"
              width={160}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className=" mb-1 font-medium text-[#002455]"
            >
              Username
            </label>
            <InputText
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border rounded p-inputtext-sm ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-900`}
              placeholder="Enter username"
            />
            {formik.touched.username && formik.errors.username && (
              <p className="!text-red-500 text-sm mt-1">
                {formik.errors.username}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-[#002455] mb-1 font-medium"
            >
              Password
            </label>
            <Password
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              toggleMask
              feedback={false}
              placeholder="Enter password"
              inputClassName={`w-full  rounded ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-900`}
              style={{ width: "100%" }}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="!text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>
          <Button
            type="submit"
            label={formik.isSubmitting ? "Logging in..." : "Log in"}
            className="!w-full !bg-blue-900 !text-white rounded 
             !border-0 !shadow-none
             hover:!bg-blue-800 
             focus:!ring-2 focus:!ring-blue-500"
            disabled={formik.isSubmitting}
          />

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => router.push("/resetpassword")}
              className="text-[#002455] hover:underline text-sm font-medium"
            >
              Reset password?
            </button>
          </div>
          <div className="text-center mt-4 border-t border-[#002455]">
            <span className="text-lg text-[#002455]">
              Jay Jay Mills (Bangladesh) Private Limited
            </span>
          </div>
          <div className="text-center mt-1">
            <span className="text-sm text-[#002455]">Version 1.0.0 © 2025</span>
          </div>
        </form>
      </div>
    </div>
  );
}

// <div
//           className="
//     bg-[rgba(0,36,85,0.2)]   /* same color but 60% transparent */
//      shadow-md rounded-xl h-[90px]
//     flex items-center justify-center
//     px-3 text-center
//     hover:shadow-xl hover:scale-[1.02]
//     cursor-pointer
//     transition-all duration-300
//     w-100
//   "
//         >
//           <div className="flex justify-center ">
//             <Image
//               src="https://j8mf601t-3000.inc1.devtunnels.ms/_next/image?url=%2Fassets%2Fharness.png&w=256&q=75"
//               alt="Company Logo"
//               width={50}
//               height={50}
//               className="object-contain"
//             />
//           </div>
//           <span className="text-[#fff]">Harness ERP</span>
//         </div>

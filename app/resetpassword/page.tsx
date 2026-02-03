"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { FormikErrors, useFormik } from "formik";
import { Image } from "primereact/image";
import "./page.css";
import { ResetPasswordMiddleWare } from "@/features/Thunks/auth/authThunks";
import { AppDispatch } from "@/redux/mainStore";
import { resetPasswordFormValues } from "../ts_types/auth_types";

export default function ResetPassword() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const toast = useRef<Toast>(null);

  const formik = useFormik<resetPasswordFormValues>({
    initialValues: {
      username: "",
      oldPassword: "",
      newPassword: "",
    },

    validate: (values) => {
      const errors: FormikErrors<resetPasswordFormValues> = {};

      if (!values.username) errors.username = "Username is required";
      if (!values.oldPassword) errors.oldPassword = "Old Password is required";
      if (!values.newPassword) errors.newPassword = "New Password is required";

      return errors;
    },

    onSubmit: async (values, { setSubmitting }) => {
      const payload = {
        userId: values.username,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        companyId: 1,
        divisionId: null,
      };

      try {
        const response = await dispatch(
          ResetPasswordMiddleWare(payload)
        ).unwrap();

        if (response?.message === "Password changed successfully") {
          toast.current?.show({
            severity: "success",
            summary: "Success",
            detail: "Password Reset Successful!",
            life: 2000,
          });

          setTimeout(() => {
            router.push("/");
          }, 2000);
        } else {
          toast.current?.show({
            severity: "error",
            summary: "Error",
            detail: response?.message || "Something went wrong",
            life: 3000,
          });
        }
      } catch (err) {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: "Failed to reset password!",
          life: 3000,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
   <div className="grid w-full overflow-hidden">
        <div
        className="
    col-12 md:col-6 lg:col-6
    h-90 md:h-screen 
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
                   rounded-2xl shadow-2xl p-10 w-full max-w-md"
          >
            <div className="flex justify-center mb-5">
              <Image
                src="https://jayjaymills.com/wp-content/uploads/2022/06/jjLogo.png"
                alt="Company Logo"
                width="140"
                className="object-contain"
              />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="mb-1 font-medium text-[#002455]"
              >
                Username
              </label>
              <InputText
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className={`w-full p-inputtext-sm rounded ${
                  formik.touched.username && formik.errors.username
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter username"
              />
              {formik.touched.username && formik.errors.username && (
                <p className="!text-red-500 text-sm">
                  {formik.errors.username}
                </p>
              )}
            </div>

            {/* Old Password */}
            <div className="mb-4">
              <label
                htmlFor="oldPassword"
                className="font-medium text-[#002455] mb-1"
              >
                Old Password
              </label>
              <Password
                id="oldPassword"
                name="oldPassword"
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
                toggleMask
                feedback={false}
                inputClassName="w-full"
                placeholder="Enter old password"
              />
              {formik.touched.oldPassword && formik.errors.oldPassword && (
                <p className="!text-red-500 text-sm mt-1">
                  {formik.errors.oldPassword}
                </p>
              )}
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="font-medium text-[#002455] mb-1"
              >
                New Password
              </label>
              <Password
                id="newPassword"
                name="newPassword"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                toggleMask
                feedback={false}
                inputClassName="w-full"
                placeholder="Enter new password"
              />
              {formik.touched.newPassword && formik.errors.newPassword && (
                <p className="!text-red-500 text-sm mt-1">
                  {formik.errors.newPassword}
                </p>
              )}
            </div>

            <Button
              type="submit"
              label={formik.isSubmitting ? "Please wait..." : "Reset Password"}
              className="!w-full !bg-blue-900 !border-0 !text-white rounded hover:!bg-blue-800"
              disabled={formik.isSubmitting}
            />

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="text-[#002455] hover:underline text-sm font-medium"
              >
                Back to Login Page
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

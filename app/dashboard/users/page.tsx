"use client";
import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import DataTableComponent from "../../../components/DataTabel/page";
import Toggle from "@/components/Toggle/page";
import "./page.css";
import { useDispatch, useSelector } from "react-redux";
import {
  chainThunk,
  chainThunkDelete,
  chainThunkEdit,
  chainThunkPost,
  chainThunkView,
} from "./store/chainMiddleware";
import { AppDispatch, RootState } from "@/redux/mainStore";
import { ChainFormValues } from "@/app/ts_types/chain_types";

export default function Users() {
  const dispatch = useDispatch<AppDispatch>();

const { chainData, chainViewData } = useSelector((state: RootState) => ({
  chainData: state.chainSlice.chainData,
  chainViewData: state.chainSlice.chainViewData,
}));

  const [selectedCity, setSelectedCity] = useState(null);
  const [visible, setVisible] = useState(false);
  const [viewModal, setViewModal] = useState("Add");

  useEffect(() => {
    dispatch(chainThunk());
  }, []);

  const formik = useFormik<ChainFormValues>({
    initialValues: {
     id: "",
    createdon: "",
    createdname: "",
    source: "",
    destination: "",
    leads: "",
    createdby: "",
    status: false,        
    recentleaddata: "",
    },
    enableReinitialize: true,
   onSubmit: (values) => {
  const payload = {
    ...values,
    id: String(values.id),       
    leads: Number(values.leads),  
    status: true,               
  };

  if (viewModal === "Edit") {
    dispatch(chainThunkEdit(payload));
  } else {
    dispatch(chainThunkPost(payload));
  }

  setVisible(false);
},
  });
useEffect(() => {
  if (viewModal === "View" || viewModal === "Edit") {
    formik.setValues({
      id: String(chainViewData?.id || ""),
      createdon: chainViewData?.createdon || "",
      createdname: chainViewData?.createdname || "",
      source: chainViewData?.source || "",
      destination: chainViewData?.destination || "",
      leads: String(chainViewData?.leads || ""), 
      createdby: chainViewData?.createdby || "",
      recentleaddata: chainViewData?.recentleaddata || "",
      status: Boolean(chainViewData?.status), // ensure boolean
    });
  } else {
    formik.resetForm();
  }
}, [chainViewData, viewModal]);

  // useEffect(() => {
  //   if (viewModal === "View" || viewModal === "Edit") {
  //     formik.setValues({
  //       id: chainViewData?.id || "",
  //       createdon: chainViewData?.createdon || "",
  //       createdname: chainViewData?.createdname || "",
  //       source: chainViewData?.source || "",
  //       destination: chainViewData?.destination || "",
  //       leads: chainViewData?.leads || "",
  //       createdby: chainViewData?.createdby || "",
  //       recentleaddata: chainViewData?.recentleaddata || "",
  //     });
  //   } else {
  //     formik.resetForm();
  //   }
  // }, [chainViewData, viewModal]);

  const handleView = (row: any) => {
    setVisible(true);
    setViewModal("View");
    dispatch(chainThunkView(row));
  };

  const handleEdit = (row: any) => {
    setVisible(true);
    setViewModal("Edit");
    dispatch(chainThunkView(row));
  };
const handleDelete=(row:any)=>{
  dispatch(chainThunkDelete(row));
}
  const columns = [
    { field: "createdon", header: "CREATED ON", sortable: true },
    { field: "createdname", header: "CHAIN NAME", sortable: true },
    { field: "source", header: "SOURCE", sortable: true },
    { field: "destination", header: "DESTINATION", sortable: true },
    { field: "leads", header: "LEADS", sortable: true },
    { field: "createdby", header: "CREATED BY", sortable: true },
    {
      field: "status",
      header: "STATUS",
      body: (rowData: any) => <Toggle rowData={rowData} />,
    },
    {
      field: "recentleaddata",
      header: "RECENT LEAD DATA",
      sortable: true,
    },
    {
      field: "action",
      header: "ACTION",
      body: (rowData: any) => (
        <div className="flex gap-3 items-center">
          <i
            className="pi pi-eye text-[#002455] cursor-pointer"
            onClick={() => handleView(rowData)}
          ></i>
          <i
            className="pi pi-pencil text-[#002455] cursor-pointer"
            onClick={() => handleEdit(rowData)}
          ></i>
            <i
           className="pi pi-trash text-[#002455] cursor-pointer"
            onClick={() => handleDelete(rowData)}
          ></i>
        </div>
      ),
    },
  ];

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="grid grid-cols-12">
      <h1 className="col-12 text-2xl font-bold text-[#002455]">CHAINS</h1>

      {/* Top filters + Create button */}
      <div className="col-12 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
        <div className="w-full md:w-1/2 lg:w-2">
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="All Chains"
            className="w-full"
          />
        </div>

        <div className="w-full md:w-auto lg:w-2 flex md:justify-end">
          <div
            className="bg-[#002455] rounded-lg p-2.5 text-center text-white cursor-pointer hover:bg-[#003a80]"
            onClick={() => {
              setVisible(true);
              setViewModal("Add");
              formik.resetForm();
            }}
          >
            + Create new chain
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="col-12 mb-2">
        <DataTableComponent value={chainData} columns={columns} removableSort />
      </div>

      {/* Modal */}
      <Dialog
        header={
          viewModal === "Add"
            ? "Create New Chain"
            : viewModal === "View"
            ? "View Chain Details"
            : "Edit Chain"
        }
        visible={visible}
        modal
        onHide={() => setVisible(false)}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="p-fluid p-grid gap-3 p-2">
           {[
  { label: "Created On", name: "createdon" },
  { label: "Chain Name", name: "createdname" },
  { label: "Source", name: "source" },
  { label: "Destination", name: "destination" },
  { label: "Leads", name: "leads" },
  { label: "Created By", name: "createdby" },
  { label: "Recent Lead Data", name: "recentleaddata" },
].map((field) => (
  <div key={field.name} className="p-col-12 p-md-6">
    <label className="font-semibold text-sm">{field.label}</label>
    <InputText
      name={field.name}
      disabled={viewModal === "View"}
      value={String(formik.values[field.name as keyof ChainFormValues] ?? "")}
      onChange={formik.handleChange}
      className="w-full"
      placeholder={`Enter ${field.label.toLowerCase()}`}
    />
  </div>
))}


            {/* Actions */}
            <div className="flex justify-between">
              <div className="p-col-6 flex justify-between mt-4">
                <div
                  onClick={() => setVisible(false)}
                  className="text-[#002455] mt-3 mx-2 cursor-pointer"
                >
                  Cancel
                </div>
              </div>
              <div className="p-col-6 flex justify-between mt-4">
                {viewModal !== "View" && (
                  <Button
                    label={viewModal === "Edit" ? "Update" : "Save"}
                    icon="pi pi-check"
                    className="bg-[#002455] px-2"
                    type="submit"
                  />
                )}
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  );
}

import React from "react";
import "./page.css";
import { DataTable } from "primereact/datatable";
import ColumnComponent from "./ColumnComponent";

const DataTableComponent = ({ value, columns, removableSort }) => {
  return (
    <div className="custom__datatable">
      <DataTable
        value={value}
        removableSort={removableSort}
        tableStyle={{ minWidth: "50rem" }}
      >
        {columns.map((col, index) => (
          <ColumnComponent
             key={col.id || index}
            field={col.field}
            header={col.header}
            sortable={col.sortable}
            removableSort={removableSort}
            body={col.body}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default DataTableComponent;

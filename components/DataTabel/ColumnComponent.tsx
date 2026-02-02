import React from "react";
import { Column } from "primereact/column";
import "./page.css";

const ColumnComponent = ({ field, header, sortable, removableSort, body }) => {
  
  const HeaderTemplate = (options) => {
    const isSorted = options.sortField === field;
    const sortOrder = isSorted ? options.sortOrder : 0;

    const getSortIcon = () => {
      if (!sortable || !removableSort) return null;

      if (!isSorted) return <i className="pi pi-sort-alt column__sort-icon"></i>;
      if (sortOrder === 1)
        return <i className="pi pi-sort-amount-up column__sort-icon"></i>;
      if (sortOrder === -1)
        return <i className="pi pi-sort-amount-down column__sort-icon"></i>;

      return <i className="pi pi-sort-alt column__sort-icon"></i>;
    };

    return (
      <div className="column__header flex items-center gap-2">
        <span>{header}</span>
        {getSortIcon()}
      </div>
    );
  };

  return (
    <Column
      field={field}
      header={HeaderTemplate}
      sortable={sortable}
      body={body}
    />
  );
};

export default ColumnComponent;

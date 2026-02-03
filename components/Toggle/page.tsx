import React, { useState } from 'react';
import { InputSwitch } from "primereact/inputswitch";
import "./page.css"

const Toggle = ({ rowData }: { rowData: { status: boolean } }) => {
  const [checked, setChecked] = React.useState(rowData.status);

  return (
    <InputSwitch 
      checked={checked} 
      onChange={(e) => setChecked(e.value)} 
    />
  );
};

export default Toggle;

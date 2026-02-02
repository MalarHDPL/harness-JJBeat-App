import React, { useState } from 'react';
import { InputSwitch } from "primereact/inputswitch";
import "./page.css"

const Toggle = ({ rowData }) => {
  const [checked, setChecked] = React.useState(rowData.status);

  return (
    <InputSwitch 
      checked={checked} 
      onChange={(e) => setChecked(e.value)} 
    />
  );
};

export default Toggle;

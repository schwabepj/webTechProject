import React, { useEffect, useState } from "react";
import apiCall from "./apiCall";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import "./App.css";
const Equipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(async () => {
    await apiCall("equipments", setEquipments);
    setLoading(false);
  }, []);

  const columns = [
    { field: "Division", headerName: "Division", width: 200 },
    { field: "Association", headerName: "Association", width: 200 },
    { field: "Description", headerName: "Description", width: 200 },
    { field: "Manufacturer", headerName: "Manufacturer", width: 200 },
    { field: "ModelDescription", headerName: "Model Description", width: 200 },
    { field: "ModelNumber", headerName: "Model Number", width: 200 },
    { field: "System", headerName: "System", width: 200 },
    { field: "Type", headerName: "Type", width: 200 },
  ];

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div style={{ paddingTop: 75, height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={equipments.data}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};
export default Equipment;

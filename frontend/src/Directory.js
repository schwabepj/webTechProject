import React, { useEffect, useState } from "react";
import apiCall from "./apiCall";
import "./App.css";
import { DataGrid } from "@material-ui/data-grid";

const Directory = () => {
  
  const [directories, setDirectory] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(async () => {
    await apiCall("directories", setDirectory);
    setLoading(false);
  }, []);

  const columns = [
    { field: "Description", headerName: "Description", width: 200 },
    { field: "PropertyLevel", headerName: "Level", width: 200 },
  ];

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div style={{ paddingTop: 75, height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={directories.data}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
  
};
export default Directory;

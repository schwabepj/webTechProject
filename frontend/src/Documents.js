import React, { useEffect, useState } from "react";
import apiCall from "./apiCall";
import { DataGrid } from "@material-ui/data-grid";

import "./App.css";
const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(async () => {
    await apiCall("documents", setDocuments);
    setLoading(false);
  }, []);

  const columns = [
    { field: "Division", headerName: "Division", width: 200 },
    { field: "Association", headerName: "Association", width: 200 },
    { field: "Description", headerName: "Description", width: 200 },
    { field: "Category", headerName: "Category", width: 200 },
    { field: "Subcategory", headerName: "Subcategory", width: 200 },
  ];



  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div style={{ paddingTop: 75, height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={documents.data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onCellClick={(row) => {window.location.href = `http://localhost:8080/files/${row.row.S3Key}`}}
      />
    </div>
  );
};
export default Documents;

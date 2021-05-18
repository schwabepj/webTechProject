import React, { useEffect, useState } from "react";
import apiCall from "./apiCall";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import "./App.css";
const Contacts = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const [contacts, setContacts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(async () => {
    await apiCall("contacts", setContacts);
    setLoading(false);
  }, []);

  const getAddress = (params) => {
    return `${params.row.Adress.Adress1} ${params.row.Adress.Adress2} ${params.row.Adress.City} ${params.row.Adress.State} ${params.row.Adress.Zipcode}`;
  };

  const columns = [
    { field: "CompanyName", headerName: "Company Name", width: 200 },
    {
      field: "fullName",
      headerName: "Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue("FirstName") || ""} ${
          params.getValue("LastName") || ""
        }`,
    },
    { field: "ContactScope", headerName: "Scope", width: 200 },
    { field: "ContactType", headerName: "Type", width: 200 },
    {
      field: "Address",
      headerName: "Address",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 400,
      valueGetter: (params) => getAddress(params),
    },
    {
      field: "Phone",
      headerName: "Phone",
      width: 200,
      valueGetter: (params) => `${params.row.Adress.Phone1}`,
    },
    { field: "URL", headerName: "URL", width: 250 },
  ];

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div style={{ paddingTop: 75, height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={contacts.data}
        columns={columns}
        pageSize={5}
        checkboxSelection
       
      />
    </div>
  );
};
export default Contacts;

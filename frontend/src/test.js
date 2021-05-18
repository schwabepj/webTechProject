import React, { Component, useState, useEffect } from "react";
import apiCall from "./apiCall";
import Contacts from "./Contacts";
function test() {
//   const [contacts, setContacts] = useState([]);
//   const [isLoading, setLoading] = useState(true);
//   useEffect(async() => {
//    await apiCall("contacts", setContacts);
//     setLoading(false);
//   }, []);

//   if (isLoading) {
//     return <div className="App">Loading...</div>;
//   }
  return (
    //   <div>
    //     {contacts.map !== undefined ? (
    //       contacts.map((contact) => {
    //         return (
    //           <div className="definition">{<p>{contact.FirstName}</p>}</div>
    //         );
    //       })
    //     ) : (
    //       <div>
    //         <span className="arrow">arrow</span>
    //         {"heyyyy"}
    //       </div>
    //     )}
    //   </div>

    <Contacts  />
  );
}
export default test;

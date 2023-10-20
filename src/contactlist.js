import React, { useState } from "react";
import { arr } from "./arrclist";

function Contactdata(props) {
  return (
    <>
      <tr>
        <td>{props.value.id}</td>
        <td>{props.value.firstname}</td>
        <td>{props.value.lastname}</td>
        <td>{props.value.email}</td>
        <td>{props.value.phonenumber}</td>
        <td>{props.value.address}</td>
        <td>{props.value.city}</td>
        <td>{props.value.state}</td>
        <td>{props.value.country}</td>
        <td>{props.value.postalcode}</td>
        <td>
          <button onClick={props.edithandler}>Edit</button>
        </td>
      </tr>
    </>
  );
}

export default function Contactlist() {
  const [value1, setValue1] = useState(show());

  function sorting(e) {
    if (e.target.value === "A-Z") {
      arr.sort((a, b) => {
        const nameA = a.firstname.toUpperCase();
        const nameB = b.firstname.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setValue1(
        arr.map((data) => {
          return <Contactdata value={data} />;
        })
      );
    } else if (e.target.value === "Z-A") {
      arr.sort((a, b) => {
        const nameA = a.firstname.toUpperCase();
        const nameB = b.firstname.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
      setValue1(
        arr.map((data) => {
          return <Contactdata value={data} />;
        })
      );
    }
  }
  function show() {
    let p = arr.map((data) => {
      return <Contactdata value={data} edithandler={edit} />;
    });
    return p;
  }
  function edit() {}

  return (
    <>
      <div>
        <center>
          <select onChange={sorting}>
            <option>sort</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
        </center>
      </div>

      <table
        border={"1px solid"}
        style={{ borderCollapse: "collapse", width: "100%", marginTop: "70px" }}
      >
        <thead>
          <tr>
            <th>S.No</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>PostalCode</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{value1}</tbody>
      </table>
    </>
  );
}

import React, { useState } from "react";
import { arr } from "./arrclist";

let x = 0;
export default function Add() {
  let [fn, setFn] = useState("");
  let [ln, setLn] = useState("");
  let [em, setEm] = useState("");
  let [pn, setPn] = useState("");
  let [ad, setAd] = useState("");
  let [cy, setCy] = useState("");
  let [st, setSt] = useState("");
  let [ct, setCt] = useState("");
  let [pc, setPc] = useState("");

  function submit() {
    let obj = {
      id: x,
      someId: "",
      firstname: fn,
      lastname: ln,
      email: em,
      phonenumber: pn,
      address: ad,
      city: cy,
      state: st,
      country: ct,
      postalcode: pc,
    };
    arr.push(obj);
    x++;

    console.log("Submitted Data:", obj);

    // Save data to local storage
    localStorage.setItem("formData", JSON.stringify(arr));
  }

  const savedData = JSON.parse(localStorage.getItem("formData"));

  const updatedData = savedData.map((item) => {
    if (item.id === item.someId) {
      return {
        ...item,
        firstname: "NewFirstName",
      };
    }
    return item;
  });

  localStorage.setItem("formData", JSON.stringify(updatedData));

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label>FirstName:</label>
                <input
                  type="text"
                  className="form-control"
                  value={fn}
                  onChange={(e) => setFn(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>LastName:</label>
                <input
                  type="text"
                  className="form-control"
                  value={ln}
                  onChange={(e) => setLn(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={em}
                  onChange={(e) => setEm(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>PhoneNumber:</label>
                <input
                  type="number"
                  className="form-control"
                  value={pn}
                  onChange={(e) => setPn(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <textarea
                  className="form-control"
                  value={ad}
                  onChange={(e) => setAd(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>City:</label>
                <input
                  type="text"
                  className="form-control"
                  value={cy}
                  onChange={(e) => setCy(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>State:</label>
                <input
                  type="text"
                  className="form-control"
                  value={st}
                  onChange={(e) => setSt(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Country:</label>
                <input
                  type="text"
                  className="form-control"
                  value={ct}
                  onChange={(e) => setCt(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>PostalCode:</label>
                <input
                  type="text"
                  className="form-control"
                  value={pc}
                  onChange={(e) => setPc(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submit}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

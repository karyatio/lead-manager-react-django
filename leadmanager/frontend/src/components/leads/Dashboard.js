import React from "react";
import Form from "./Form";
import Leads from "./Leads";

export default function Dashboard() {
  return (
    <div className="container-fluid mt-4 mb-4">
      <div className="row">
        <div className="col-md-5">
          <Form />
        </div>
        <div className="col-md-7">
          <Leads />
        </div>
      </div>
    </div>
  );
}

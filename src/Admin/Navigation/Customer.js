import React from "react";
import { Link } from "react-router-dom";

function Customer() {
  return (
    <div className="py-3 px-5">
      <p className="text-2xl">Customer</p>
      <div className="px-5 py-3 flex flex-col gap-2">
        <Link to="/woladmin/customer" className="text-lg">
          Customer overview
        </Link>
        <Link to="/woladmin/change-customer/null" className="text-lg">
          Change a customer
        </Link>
      </div>
    </div>
  );
}

export default Customer;

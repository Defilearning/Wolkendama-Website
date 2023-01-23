import React from "react";
import { Link } from "react-router-dom";

function ShopButtons({ shopData }) {
  return (
    <div className="flex bg-slate-500 py-5 px-4 rounded-lg gap-10 justify-end">
      <Link
        to={`/woladmin/change-shop-item/${shopData._id}`}
        className="bg-lime-600 py-2 px-3 text-white rounded-md"
      >
        Change info
      </Link>
      <Link
        to={`/woladmin/update-inventory/${shopData._id}`}
        className="bg-lime-600 py-2 px-3 text-white rounded-md"
      >
        Update inventory
      </Link>
      <Link
        to={`/woladmin/upload-photo/${shopData._id}`}
        className="bg-lime-600 py-2 px-3 text-white rounded-md"
      >
        Upload photos
      </Link>
      <Link
        to={`/woladmin/delete-photo/${shopData._id}`}
        className="bg-lime-600 py-2 px-3 text-white rounded-md"
      >
        Delete photos
      </Link>
      <Link
        to={`/woladmin/delete-shop/${shopData._id}`}
        className="bg-red-600 py-2 px-3 text-white rounded-md"
      >
        Delete shop
      </Link>
    </div>
  );
}

export default ShopButtons;

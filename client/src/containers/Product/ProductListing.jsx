import React from "react";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import Sidebar from "../../components/pages/Product/Sidebar";
import Listing from "../../components/pages/Product/Listing";

function ProductListing(props) {
  // userData={props.userData} userStatus={props.userStatus}
  return (
    <>
      <div className="flex w-full justify-center">
        <Breadcrumbs />
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex w-4/5">
          <Sidebar />
          <Listing />
        </div>
      </div>
    </>
  );
}

export default ProductListing;

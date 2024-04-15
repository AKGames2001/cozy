import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs() {
  return (
    <>
      <ol className="flex text-sm my-4 w-4/5">
        <li>
          <Link to="" className="text-[#6cb8f9]">
            Home
          </Link>
          <span className="mx-2">/</span>
        </li>
        <li>
          <Link to="" className="text-[#6cb8f9]">
            Primary
          </Link>
          <span className="mx-2">/</span>
        </li>
        <li>
          <Link to="" className="text-[#6cb8f9]">
            Secondary
          </Link>
          <span className="mx-2">/</span>
        </li>
        <li>
          <Link to="">Tertiary</Link>
        </li>
      </ol>
    </>
  );
}

export default Breadcrumbs;

import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <h5>Navbar</h5>
      <ul>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link to={"/tickets"}>Tickets</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

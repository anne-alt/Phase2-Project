import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav>
          <NavLink
          to={"/"}
          activeStyle={{color: "orange"}}
          >
            Home
          </NavLink>

          <NavLink
          to={"/Contribute"}
          activeStyle={{color: "orange"}}
          >
            Contribute
          </NavLink>

          <NavLink
          to={"/Variety"}
          activeStyle={{color: "orange"}}
          >
            Variety
          </NavLink>

       </nav>

    )
}

export default Navbar;
import Navigation from "./Navigation";
import Dropdown from "./Dropdown";
import { useState } from "react";

function Nav() {
  let positionsStart = ["Home", "Link", "Blog", "Contact", "Map"];

  const [positions, setPositions] = useState(positionsStart);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Navigation positions={positions} setPositions={setPositions} />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}

export default Nav;

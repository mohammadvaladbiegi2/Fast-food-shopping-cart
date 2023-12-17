import { RiShoppingCartLine } from "react-icons/ri";
import React from "react";
import { useCardContext } from "../CardContext";

const Navbar = () => {
  const { data } = useCardContext();
  return (
    <header className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-tool ms-3">
          <div className="navbar-tool-icon-box bg-secondary">
            {data.length ? (
              <span className="navbar-tool-label">{data.length}</span>
            ) : (
              ""
            )}
            <RiShoppingCartLine className="navbar-tool-icon" />
          </div>
        </a>
        <p className="h3 mb-0 text-light">useContext</p>
      </div>
    </header>
  );
};

export default Navbar;

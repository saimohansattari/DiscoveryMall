import React from "react";
import { Link } from "react-router-dom";
import { NavBtn, NavbarBtnsDiv } from "../../components/styled.components.jsx";

function NavbarBtns() {
  return (
    <>
      <NavbarBtnsDiv>
        <Link to="/">
          <NavBtn>All</NavBtn>
        </Link>

        <Link to="/Mens">
          <NavBtn>Mens</NavBtn>
        </Link>

        <Link to="/Womens">
          <NavBtn>Womens</NavBtn>
        </Link>

        <Link to="/Kids">
          <NavBtn>Kids</NavBtn>
        </Link>
      </NavbarBtnsDiv>
    </>
  );
}

export default NavbarBtns;

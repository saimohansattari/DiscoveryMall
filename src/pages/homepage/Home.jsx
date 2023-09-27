import React from "react";
import NavbarBtns from "../navbarBtnspage/NavbarBtns";
import {
  BtnBars,
  HomeIcon,
  MainHeader,
  MenuNavbar,
  MenuText,
  MenubtnDiv,
  Notification,
  SearchBox,
  SearchNavbar,
  SubSearchNav,
} from "../../components/styled.components";
import {
  Bell,
  Bars,
  Search,
  House,
  Heart,
  Gear,
  Cart,
} from "../../asserts/svgs";
import { All, Kids, Mens, Womens } from "../navbarpages/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <MainHeader>
        <HomeIcon>Discover</HomeIcon>

        <Notification>
          <Bell
            style={{ width: "20px", height: "20px", marginBottom: "4px" }}
          />
        </Notification>
      </MainHeader>
      <SearchNavbar>
        <SubSearchNav>
          <Search
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          <SearchBox placeholder="Search anything" />

          <BtnBars type="submit">
            <Bars style={{ width: "23px", height: "23px", fill: "white" }} />
          </BtnBars>
        </SubSearchNav>
      </SearchNavbar>

      {/* Navbar Btns Page */}
      <Router>
        <NavbarBtns />

        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Womens" element={<Womens />} />
          <Route path="/Kids" element={<Kids />} />
        </Routes>
      </Router>

      {/* MenuNavbar */}
      <MenuNavbar>
        <MenubtnDiv>
          <House style={{ width: "20px", height: "20px", fill: "#aaaaaa" }} />
          <MenuText>Home</MenuText>
        </MenubtnDiv>

        <MenubtnDiv>
          <Heart style={{ width: "20px", height: "20px", fill: "#aaaaaa" }} />
          <MenuText>Saved</MenuText>
        </MenubtnDiv>

        <MenubtnDiv>
          <Cart style={{ width: "20px", height: "20px", fill: "#aaaaaa" }} />
          <MenuText>Cart</MenuText>
        </MenubtnDiv>

        <MenubtnDiv>
          <Gear style={{ width: "20px", height: "20px", fill: "#aaaaaa" }} />
          <MenuText>Settings</MenuText>
        </MenubtnDiv>
      </MenuNavbar>
    </>
  );
}

export default Home;

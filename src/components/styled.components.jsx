import styled from "styled-components";

//MainHeader Styled components
export const MainHeader = styled.div`
  padding: 10px 20px 1px 15px;
  width: 100vw;
  height: 12vh;
  background-color: white;
  color: red;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HomeIcon = styled.p`
  color: black;
  font-size: 24px;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  font-weight: bold;
`;

export const Notification = styled.div`
  background-color: none;
`;

//SearchNavbar Styled components
export const SearchNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 38px;
  background-color: white;
`;

export const SubSearchNav = styled.div`
  gap: 5px;
  padding: 0px 0px 0px 4px;
  background-color: #b1b1b154;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBox = styled.input`
  width: 70vw;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  padding-left: 10px;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const BtnBars = styled.button`
  width: 50px;
  height: 35px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
`;

// NavbarBtns;
export const NavbarBtnsDiv = styled.div`
  /* margin-top: 7px; */
  padding: 0px 1px 0px 1px;
  width: 100vw;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavBtn = styled.button`
  padding: 5px 10px 5px 10px;
  background-color: #b1b1b154;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

//MenuNavbar
export const MenuNavbar = styled.div`
  width: 100vw;
  height: 9vh;
  background-color: gray;
  position: fixed;
  bottom: 0;
`;

export const MenubtnDiv = styled.div`
  width: 60px;
  height: 50px;
  background-color: yellow;
`;

//Navbar pages Styled Components
export const MainSection = styled.div`
  width: 100vw;
  justify-content: space-around;
  height: 100vh;
  padding: 5px 15px 5px 15px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  width: 150px;
  padding: 5px;
  height: 205px;
  background-color: white;
  border-radius: 4px;

  &:hover {
    border: 1px solid gray;
  }
`;

export const ImgCard = styled.img`
  width: 149px;
  height: 150px;
  margin-bottom: 5px;
`;

export const ItemName = styled.p`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 15px;
`;

export const ItemCost = styled.p`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: gray;
`;

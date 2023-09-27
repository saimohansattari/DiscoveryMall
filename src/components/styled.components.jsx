import styled from "styled-components";

//MainHeader Styled components
export const MainHeader = styled.div`
  padding: 10px 20px 10px 15px;
  width: 100vw;
  height: 15vh;
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
  height: 40px;
  background-color: white;
`;

export const SubSearchNav = styled.div`
  gap: 5px;
  padding: 5px;
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
  margin-top: 7px;
  padding: 0px 1px 0px 1px;
  border-bottom: 1px solid black;
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

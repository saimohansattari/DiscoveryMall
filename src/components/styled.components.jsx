import styled from "styled-components";

//MainHeader Styled components
export const MainHeader = styled.div`
  padding: 10px 20px 1px 15px;
  width: 100vw;
  height: 12vh;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HomeIcon = styled.p`
  color: black;
  font-size: 20px;
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
  background-color: #f2f2f2;
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
  background-color: #f2f2f2;
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
  background-color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid gray;
`;

export const MenubtnDiv = styled.div`
  width: 60px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    fill: black;
  }
`;

export const MenuText = styled.p`
  font-size: 12px;
  font-family: sans-serif;
  font-weight: bold;
  color: #aaaaaa;

  &:hover {
    color: #000000c0;
  }
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

//Single Product page Styledcomponents
export const ProductDiv = styled.div`
  width: 100vw;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const ProImg = styled.img`
  width: 280px;
  height: 300px;
  margin-bottom: 10px;
  background-color: white;
`;

export const ProText = styled.div`
  padding: 1px 10px 1px 10px;
  width: auto;
  height: auto;
  background-color: white;
  float: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Text19 = styled.p`
  font-size: 19px;
  font-family: sans-serif;
  font-weight: 550;
`;

export const Text17 = styled.p`
  font-size: 17px;
  font-family: sans-serif;
`;

export const Text16 = styled.p`
  font-size: 16px;
  font-family: sans-serif;
  font-weight: bold;
`;

export const Text11 = styled.p`
  font-size: 11px;
  font-weight: bold;
  font-family: sans-serif;
`;

export const Text12 = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
`;

export const GrayText = styled.p`
  color: #464646;
`;

export const SizeDiv = styled.div`
  display: flex;
  gap: 30px;
`;

export const Sizebox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #cecece;
  width: 36px;
  height: 36px;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border: 1.5px solid black;
  }
`;

export const SignleProfooter = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid gray;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  height: 9vh;
  background-color: white;
`;

export const CartBtn = styled.button`
  width: 40vw;
  height: 8vh;
  border-radius: 5px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

//Cart page stylled components
export const CartsDisplaySec = styled.div`
  height: 55vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 15px 10px 15px;
`;

export const CartListItems = styled.div`
  width: 90vw;
  height: 85px;
  background-color: #d6d6d65e;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
`;

export const CartImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 5px;
`;
export const CartText = styled.div`
  width: 65vw;
  height: 75px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const CartHeader = styled.div`
  font-size: 13px;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: space-between;
`;

export const QuantityCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuantityCard = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  width: 20px;
  border: 1px solid black;
  margin-top: 3px;
`;

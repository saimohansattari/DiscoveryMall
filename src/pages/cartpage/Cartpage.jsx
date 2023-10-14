import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GrayText,
  HomeIcon,
  ItemName,
  MainHeader,
  Notification,
  ProImg,
  ProText,
  ProductDiv,
  Text12,
  Text11,
  Text16,
  Text19,
  SizeDiv,
  Sizebox,
  SignleProfooter,
  PriceBox,
  Text17,
  CartBtn,
  CartsDisplaySec,
  CartListItems,
  CartImg,
  CartText,
  CartHeader,
} from "../../components/styled.components";
import { Bell, Leftarrow, Ratingstar } from "../../asserts/svgs/index.js";

function Cartpage() {
  const navigate = useNavigate();

  return (
    <div>
      <MainHeader>
        <Notification>
          <Leftarrow
            onClick={() => navigate(-1)}
            style={{
              fill: "black",
              width: "20px",
              height: "20px",
              marginBottom: "4px",
              cursor: "pointer",
            }}
          />
        </Notification>

        <HomeIcon>My Cart</HomeIcon>

        <Notification>
          <Bell
            style={{ width: "20px", height: "20px", marginBottom: "4px" }}
          />
        </Notification>
      </MainHeader>

      <CartsDisplaySec>
        <CartListItems>
          <CartImg></CartImg>
          <CartText>
            <CartHeader>Productname</CartHeader>
          </CartText>
        </CartListItems>
      </CartsDisplaySec>
    </div>
  );
}

export default Cartpage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
  QuantityCard,
  QuantityCards,
} from "../../components/styled.components";
import { Bell, Bin, Leftarrow } from "../../asserts/svgs/index.js";
import { Frame1 } from "../../asserts/pngs";

function Cartpage() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const QuaIncrement = () => {
    setQuantity(quantity + 1);
  };

  const QuaDecrement = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

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
          <CartImg src={Frame1} />
          <CartText>
            <CartHeader>
              Productname
              <Bin
                style={{
                  width: "15px",
                  height: "15px",
                  fill: "Red",
                  cursor: "pointer",
                }}
              />
            </CartHeader>
            <Text11>
              <GrayText>Size L</GrayText>
            </Text11>

            <CartHeader>
              INR 1290
              <QuantityCards>
                <QuantityCard onClick={QuaDecrement}>-</QuantityCard>
                <QuantityCard>{quantity}</QuantityCard>
                <QuantityCard onClick={QuaIncrement}>+</QuantityCard>
              </QuantityCards>
            </CartHeader>
          </CartText>
        </CartListItems>
      </CartsDisplaySec>
    </div>
  );
}

export default Cartpage;

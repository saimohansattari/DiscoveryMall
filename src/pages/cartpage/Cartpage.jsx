import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  GrayText,
  HomeIcon,
  MainHeader,
  Notification,
  Text11,
  CartsDisplaySec,
  CartListItems,
  CartImg,
  CartText,
  CartHeader,
  QuantityCard,
  QuantityCards,
} from "../../components/styled.components";
import { Bell, Bin, Leftarrow } from "../../asserts/svgs/index.js";

function Cartpage() {
  const CartList = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  console.log(CartList);

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
        {CartList.cartItem.map((data) => (
          <CartListItems key={data.id}>
            <CartImg src={data.Image} />
            <CartText>
              <CartHeader>
                {data.ProductName}
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
                INR {data.ProductPrice}
                <QuantityCards>
                  Quantitiy : {data.cartQuantity}
                  {/* <QuantityCard onClick={QuaDecrement}>-</QuantityCard> */}
                  {/* <QuantityCard>Quantitiy : {data.cartQuantity}</QuantityCard> */}
                  {/* <QuantityCard onClick={QuaIncrement}>+</QuantityCard> */}
                </QuantityCards>
              </CartHeader>
            </CartText>
          </CartListItems>
        ))}
      </CartsDisplaySec>
    </div>
  );
}

export default Cartpage;

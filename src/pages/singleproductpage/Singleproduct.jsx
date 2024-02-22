import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Frame1 } from "../../asserts/pngs/index.js";
import { Cart } from "../../asserts/svgs/index.js";
import { Link } from "react-router-dom";
import { AllImages } from "../../components/constants.jsx";
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
} from "../../components/styled.components";
import { Bell, Leftarrow, Ratingstar } from "../../asserts/svgs/index.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice.jsx";

function Singleproduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = AllImages.find((item) => item.id === productId);
  if (!product) {
    return "product details not found";
  }

  const handleToCart = (product) => {
    dispatch(addToCart(product));
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

        <HomeIcon>Details</HomeIcon>

        <Notification>
          <Bell
            style={{ width: "20px", height: "20px", marginBottom: "4px" }}
          />
        </Notification>
      </MainHeader>

      <ProductDiv>
        <ProImg src={product.Image} />

        <ProText>
          <Text19>{product.ProductName}</Text19>

          <Text12>
            <Ratingstar
              style={{ width: "15px", height: "15px", fill: "orange" }}
            />
            4.5/5 &nbsp;<GrayText>(45 Reviews)</GrayText>
          </Text12>

          <Text11>
            <GrayText>{product.ProductDisc}</GrayText>
          </Text11>

          <Text16>Choose size:</Text16>
          <SizeDiv>
            <Sizebox>S</Sizebox>
            <Sizebox>M</Sizebox>
            <Sizebox>L</Sizebox>
          </SizeDiv>
        </ProText>

        <SignleProfooter>
          <PriceBox>
            <Text11>
              <GrayText>Price</GrayText>
            </Text11>
            <Text17>INR {product.ProductPrice} </Text17>
          </PriceBox>

          <PriceBox>
            {/* <Link to="/cart-page"> */}
            <CartBtn onClick={() => handleToCart(product)}>
              <Cart style={{ width: "20px", height: "20px", fill: "white" }} />
              &nbsp; Add to cart
            </CartBtn>
            {/* </Link> */}
          </PriceBox>
        </SignleProfooter>
      </ProductDiv>
    </div>
  );
}

export default Singleproduct;

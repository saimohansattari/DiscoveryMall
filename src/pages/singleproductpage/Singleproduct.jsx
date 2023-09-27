import React from "react";
import { useParams } from "react-router-dom";
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
} from "../../components/styled.components";
import { Bell, Leftarrow, Ratingstar } from "../../asserts/svgs/index.js";

function Singleproduct() {
  const { productId } = useParams();
  return (
    <div>
      <MainHeader>
        <Notification>
          <Leftarrow
            style={{
              fill: "black",
              width: "20px",
              height: "20px",
              marginBottom: "4px",
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
        <ProImg />

        <ProText>
          <Text19>Regular fit slogan</Text19>

          <Text12>
            <Ratingstar
              style={{ width: "15px", height: "15px", fill: "yellow" }}
            />
            &nbsp; 4.5/5<GrayText>(45 Reviews)</GrayText>
          </Text12>

          <Text11>
            <GrayText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, illum.
            </GrayText>
          </Text11>

          <Text16>Choose size:</Text16>
          <SizeDiv>
            <Sizebox>S</Sizebox>
            <Sizebox>M</Sizebox>
            <Sizebox>L</Sizebox>
          </SizeDiv>
        </ProText>
      </ProductDiv>
    </div>
  );
}

export default Singleproduct;

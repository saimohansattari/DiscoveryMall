import React from "react";
import { useParams } from "react-router-dom";
import {
  HomeIcon,
  ItemName,
  MainHeader,
  Notification,
  ProImg,
  ProText,
  ProductDiv,
  Text14,
  Text16,
  Text21,
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
          <Text21>Regular fit slogan</Text21>
          <Text14>
            <Ratingstar
              style={{ width: "15px", height: "15px", fill: "yellow" }}
            />
            &nbsp; 4.5/5
          </Text14>
        </ProText>
      </ProductDiv>
    </div>
  );
}

export default Singleproduct;

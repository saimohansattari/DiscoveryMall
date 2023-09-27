import React from "react";
import { Link } from "react-router-dom";
import {
  ImgCard,
  ItemCost,
  ItemName,
  MainSection,
  ProductCard,
} from "../../components/styled.components";
import { AllImages } from "../../components/constants.jsx";

function All() {
  return (
    <div>
      <MainSection>
        {AllImages.map((Item) => (
          <Link to={`/product/${Item.id}`} key={Item.id}>
            <ProductCard>
              <ImgCard src={Item.Image} />
              <ItemName>{Item.ProductName}</ItemName>
              <ItemCost>INR {Item.ProductPrice}</ItemCost>
            </ProductCard>
          </Link>
        ))}
      </MainSection>
    </div>
  );
}

export default All;

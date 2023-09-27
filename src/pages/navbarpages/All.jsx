import React from "react";
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
          <ProductCard key={Item.id}>
            <ImgCard src={Item.Image} />
            <ItemName>{Item.ProductName}</ItemName>
            <ItemCost>INR {Item.ProductPrice}</ItemCost>
          </ProductCard>
        ))}
      </MainSection>
    </div>
  );
}

export default All;

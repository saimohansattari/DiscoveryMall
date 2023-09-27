import React from "react";
import { useParams } from "react-router-dom";

function Singleproduct() {
  const { productId } = useParams();
  return <div>Singleproduct</div>;
}

export default Singleproduct;

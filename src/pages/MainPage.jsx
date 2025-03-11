import React from "react";
import CategoryAndSearch from "../components/CategoryAndSearch";
import ProductsRender from "../components/ProductsRender";
import { styled } from "@mui/material";

function MainPage() {
  return (
    <WrapperMain>
      <CategoryAndSearch />
      <div>
        <ProductsRender />
      </div>
    </WrapperMain>
  );
}
export default MainPage;
const WrapperMain = styled('section')`
  margin-top: 40px;
`
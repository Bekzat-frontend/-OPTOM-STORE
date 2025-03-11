import React from "react";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductCard({ i }) {
  const navigate = useNavigate();
  return (
    <WrapperAll onClick={() => navigate("/" + i?.id)}>
      <div>
        <img src={i?.imageUrl} alt={i?.name} />
      </div>
      <div>
        <p>{i?.title}</p>
        <p>{i?.price}</p>
        <p>{i?.address}</p>
        <p>{i?.name}</p>
      </div>
    </WrapperAll>
  );
}
export default ProductCard;
const WrapperAll = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px;
  & > div > img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

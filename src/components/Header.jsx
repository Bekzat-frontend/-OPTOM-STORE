import React from "react";
import { styled } from "@mui/material";
import LoginOption from "./LoginOption";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <WrapperHeader>
      <WrapperAll>
        <WrapperLogo onClick={() => navigate("/")}>Optom-store</WrapperLogo>
        <LoginOption />
      </WrapperAll>
    </WrapperHeader>
  );
}
export default Header;
const WrapperLogo = styled("p")`
  font-size: 20px;
  padding: 2px 5px;
  border: 1px solid white;
  cursor: pointer;
  color: white;
`;
const WrapperAll = styled("div")`
  width: 100%;
  padding: 2px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WrapperHeader = styled("header")`
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 10;
  padding-bottom: 5px;
  background: #242222c4;
  padding: 3px;
`;

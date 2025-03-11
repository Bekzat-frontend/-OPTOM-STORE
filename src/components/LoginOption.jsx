import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { Avatar, styled } from "@mui/material";
import { useSelector } from "react-redux";
import SlideModal from "../ui/SildeModal";
import Login from "./Login";

function LoginOption() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const navigate = useNavigate();
  const { is_auth, logo, login } = useSelector((i) => i.login);
  if (is_auth) {
    return (
      <WrapperLogin onClick={() => navigate("profile")}>
        <Avatar alt={login} src={logo} />
      </WrapperLogin>
    );
  }
  return (
    <>
      <SlideModal handleClose={handleClose} open={open}>
        <Login />
      </SlideModal>
      <WrapperLogin onClick={handleOpen}>
        <p>Войти</p>
        <LoginIcon />
      </WrapperLogin>
    </>
  );
}
export default LoginOption;
const WrapperLogin = styled("button")`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;

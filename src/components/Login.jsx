import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Button, styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import GoogleIcon from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";

function Login() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (formData) => {
    console.log(formData);
  };
  const { errors } = formState;
  return (
    <WrapperAll>
      <h1>Войти</h1>
      <WrapperForm onSubmit={handleSubmit(onSubmit)}>
        <div className="block_input">
          <label htmlFor="email">
            <p>Почта</p>
            <StarIcon fontSize="small" />
          </label>
          <div>
            <input
              id="email"
              type="email"
              // autoComplete="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                validate: {
                  isValidEmail: (value) =>
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                      value
                    ) || "Email is not valid",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="error_message">{message}</p>
              )}
            />
          </div>
        </div>
        <div className="block_input">
          <label htmlFor="password">
            <p>Пароль</p>
            <StarIcon fontSize="small" />
          </label>
          <div>
            <input
              id="password"
              type="password"
              // autoComplete="current-password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                validate: {
                  minLength: (value) =>
                    value.length >= 8 ||
                    "Password should has more than 8 characters",
                  isCapitalLetter: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password should has at least one capital letter",
                  isLowerCaseLetter: (value) =>
                    /[a-z]/.test(value) ||
                    "Password should has at least one lower case letter",
                  isContainNumber: (value) =>
                    /\d/.test(value) ||
                    "Password should has at least one number",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <p className="error_message">{message}</p>
              )}
            />
          </div>
        </div>
        <div>
          <Button type="submit" variant="outlined" className="enter_btn">
            Войти
          </Button>
        </div>
      </WrapperForm>
      <div className="login_other">
        <p>Войти через</p>
        <div>
          <img src={GoogleIcon} alt="google_icon" />
          <img src={FacebookIcon} alt="facebook_icon" className="face_book_logo"/>
        </div>
      </div>
      <p className="forgot_pass">Забыли пароль?</p>
    </WrapperAll>
  );
}
export default Login;
const WrapperAll = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 30px 35px;
  gap: 20px;
  .forgot_pass {
    text-align: center;
    font-size: 12px;
    cursor: pointer;
  }
  & > h1 {
    text-align: center;
    font-size: 18px;
  }
  .login_other {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    & > p {
      font-size: 12px;
    }
    & > div {
      display: flex;
      align-items: center;
      gap: 10px;
      & > img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
      .face_book_logo {
        width: 22px;
        height: 22px;
      }
    }
  }
`;
const WrapperForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  max-width: 350px;
  .enter_btn {
    width: 300px;
    border-radius: 5px;
    padding: 4px;
  }
  .block_input {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    & > label {
      display: flex;
      gap: 5px;
      align-items: flex-start;
      & > svg {
        width: 10px;
        height: 10px;
        color: red;
      }
    }
    & > div > input {
      width: 300px;
      height: 30px;
      padding-left: 5px;
      font-size: 16px;
      outline: none;
      border: none;
      border-bottom: 2px solid grey;
    }
  }
  .error_message {
    font-size: 12px;
    max-width: 200px;
    color: red;
  }
`;

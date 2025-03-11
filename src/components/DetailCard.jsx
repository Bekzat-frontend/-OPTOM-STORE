import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DataBase, findById } from "../store/slice/Db";
import { styled } from "@mui/material";

function DetailCard() {
  const { find_db } = useSelector((i) => i.dataBase);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(findById(+id));
    }
  }, [id]);
  return (
    <WrapperAll>
      <div>
        <img alt={find_db?.title} src={find_db?.imageUrl} />
      </div>
      <div className="second_block">
        <WrapperTitle>
          <p>Название</p>
          <span />
          <p>{find_db?.title}</p>
        </WrapperTitle>
        <WrapperTitle>
          <p>Адрес</p>
          <span />
          <p>{find_db?.address}</p>
        </WrapperTitle>
        <WrapperTitle>
          <p>Цена</p>
          <span />
          <p>{find_db?.price}</p>
        </WrapperTitle>
        <WrapperTitle>
          <p>Количество</p>
          <span />
          <p>{find_db?.name}</p>
        </WrapperTitle>
      </div>
    </WrapperAll>
  );
}
export default DetailCard;
const WrapperAll = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 10px 20px; 
  & > div > img {
    width: 100%;
    object-fit: cover;
  }
  .second_block {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
const WrapperTitle = styled("div")`
  display: flex;
  width: 100%;
  span {
    flex: 1;
    border-bottom: dotted;
    border-width: 1px;
    border-color: black;
  }
`;

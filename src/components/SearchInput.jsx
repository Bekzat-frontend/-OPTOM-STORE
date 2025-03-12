import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchAPI } from "../store/slice/Db";
import { styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput() {
  const [click, setClick] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const onClick = () => {
    setClick(!click);
    if (query) {
      dispatch(searchAPI(query));
    }
  };

  const handleChange = (e) => setQuery(e.target.value);

  return (
    <WrapperAll>
      <input
        className={click ? "open" : "close"}
        placeholder="search"
        value={query}
        onChange={handleChange}
      />
      <SearchIcon className="search_icon" onClick={onClick} />
    </WrapperAll>
  );
}
export default SearchInput;
const WrapperAll = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  .search_icon {
    position: absolute;
    right: 0px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: 1px solid grey;
    padding: 5px;
    border-radius: 5px;
  }
  .open {
    width: 0px;
    height: 40px;
    transition-duration: 1s;
    width: 250px;
    height: 40px;
    max-width: 100%;
    outline: none;
    border: 1px solid blue;
    padding-left: 10px;
    font-size: 18px;
    border-radius: 8px;
  }
  .close {
    width: 250px;
    height: 40px;
    transition-duration: 1s;
    width: 0px;
    height: 40px;
    border-radius: 8px;
    outline: none;
    border: 1px solid white;
  }
`;

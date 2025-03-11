import { useState } from "react";
import SelectM from "../ui/SelectM";
import SearchInput from "./SearchInput";
import { styled } from "@mui/material";

const categoryOption = [
  {
    value: "1",
    title: "Все",
  },
  {
    value: "2",
    title: "Жумуртка",
  },
  {
    value: "1",
    title: "Картошка",
  },
  {
    value: "1",
    title: "Нан/лепешка",
  },
];
const CategoryAndSearch = () => {
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <WrapperAll>
      <div className="first">
        <SelectM
          label={"Категории"}
          options={categoryOption}
          handleChange={handleChange}
          value={category}
        />
      </div>
      <div className="second">
        <SearchInput />
      </div>
    </WrapperAll>
  );
};
export default CategoryAndSearch;
const WrapperAll = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
  padding: 10px 5px;
  .first {
    flex: 10;
  }
  .second {
    flex: 1;
  }
`;

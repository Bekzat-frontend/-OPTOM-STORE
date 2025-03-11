import React, { useState } from "react";
import { styled } from "@mui/material";
import DetailCard from "../components/DetailCard";
import Loading from "../ui/Loading";

function DetailPage() {
  const [load, setload] = useState(false);
  setTimeout(() => {
    setload(true);
  }, 1000);
  return (
    <Wrapper>
      {load ? (
        <DetailCard />
      ) : (
        <>
          <Loading />
          <DetailCard />
        </>
      )}
    </Wrapper>
  );
}
export default DetailPage;
const Wrapper = styled("section")`
  margin-top: 40px;
`;

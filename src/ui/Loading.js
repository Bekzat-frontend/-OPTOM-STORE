import { styled } from "@mui/material";
import loadingGif from "../assets/loading.webp";

const Loading = () => {
  return (
    <WrapperBox>
      <div>
        <img loading="lazy" src={loadingGif} alt="loading gif" />
        <WrapperBlock>
          <h1>Optom-store</h1>
        </WrapperBlock>
      </div>
    </WrapperBox>
  );
};
export default Loading;
const WrapperBox = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #2729326e;
  & > div > img {
    width: 150px;
    height: 150px;
  }
`;
const WrapperBlock = styled("div")`
  width: 40%;
  display: flex;
  padding-left: 10px;
  margin-top: 5px;
  gap: 10px;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.1em;
    margin-top: 4px;
    padding-left: 3px;
    color: black;
    white-space: nowrap;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

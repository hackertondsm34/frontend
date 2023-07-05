import { styled } from "styled-components";

export default function Text() {
  return (
    <TextBox>
      <h1>Q&A</h1>
      <h3>궁금한건 무엇이든 물어보세요!</h3>
    </TextBox>
  );
}
const TextBox = styled.div`
  width: 100%;
  height: 9%;
  padding-top: 4.5%;
  h1 {
    font-size: 36px;
    font-weight: 700;
  }
  h3 {
    margin-top: -1%;
    font-size: 24px;
    font-weight: 500;
  }
`;

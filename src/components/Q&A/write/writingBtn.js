import { styled } from "styled-components";
export default function WritingBtn() {
  return (
    <BtnDiv>
      <Button>작성 완료</Button>
    </BtnDiv>
  );
}

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 275px;
  height: 51px;
  margin-top: 35px;
  background-color: ${({ theme }) => theme.color.primary};
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-size: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

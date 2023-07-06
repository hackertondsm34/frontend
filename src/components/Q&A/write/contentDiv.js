import { useState } from "react";
import { styled } from "styled-components";

export default function ContentDiv({content,ChangeState}) {
//   const [content, setContent] = useState("");
  return (
    <ContentBox>
      <h1>내용</h1>
      <InputDiv
        placeholder="내용을 입력해주세요"
        onChange={(e) => {
          ChangeState('content',e.target.value);
        }}
      ></InputDiv>
      <p>{content.length} / 255</p>
    </ContentBox>
  );
}
const ContentBox = styled.div`
  width: 100%;
  margin-top: 3.5%;
  h1 {
    font-size: 22px;
    font-weight: 600;
  }
  p {
    margin-top: 5px;
    color: ${({ theme }) => theme.color.gray4};
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const InputDiv = styled.textarea`
  resize: none;
  width: 952px;
  height: 130px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 5px;
  padding-left: 22px;
  padding-top: 15px;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray4};
    font-size: 16px;
    font-weight: 500;
  }
`;

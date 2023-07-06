import { styled } from "styled-components";
import { useState } from "react";
export default function TitleDiv({title, ChangeState}) {
  return (
    <TitleBox>
      <h1>제목</h1>
      <InputDiv
        placeholder="제목을 입력해주세요"
        onChange={(e) => {
          ChangeState("title", e.target.value);
        }}
      ></InputDiv>
    </TitleBox>
  );
}
const TitleBox = styled.div`
  width: 100%;
  margin-top: 6%;
  h1 {
    font-size: 22px;
    font-weight: 600;
  }
`;
const InputDiv = styled.input`
  width: 930px;
  height: 4.6%;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 5px;
  padding: 9px 22px;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray4};
    font-size: 16px;
    font-weight: 500;
  }
`;

import { styled } from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import { useContextAction, useContextValue } from "@/hooks/provider";

export default function BtnDiv() {
  const [areaOption, setAreaOption] = useState(false);
  const {optionText} = useContextValue();
  const dispatch = useContextAction();
//   const [optionText, setOptionText] = useState("");
  const router = useRouter();
  const onAreaOption = () => {
    setAreaOption((pre) => !pre);
  };
  const onOptionText = (e) => { 
   dispatch({type:"OPTIONTEXT",text:e})
    setAreaOption(false);
  };
    return (
    <BtnContainer>
      <AreaSelect>
        <Selected onClick={onAreaOption}>
          <Title>
            {optionText ? optionText : "전체"}&nbsp;&nbsp;
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 15L0.339745 0L17.6603 0L9 15Z" fill="white" />
            </svg>
          </Title>
        </Selected>

        <OptionBox option={areaOption}>
          <Option onClick={()=>{onOptionText('전체')}}>전체</Option>
          <Option onClick={()=>{onOptionText('화산폭발')}}>화산폭발</Option>
          <Option onClick={()=>{onOptionText('침수')}}>침수</Option>
          <Option onClick={()=>{onOptionText('산사태')}}>산사태</Option>
          <Option onClick={()=>{onOptionText('폭염')}}>폭염</Option>
          <Option onClick={()=>{onOptionText('가뭄')}}>가뭄</Option>
          <Option onClick={()=>{onOptionText('강풍')}}>강풍</Option>
          <Option onClick={()=>{onOptionText('한파')}}>한파</Option>
          <Option onClick={()=>{onOptionText('낙뢰')}}>낙뢰</Option>
          <Option onClick={()=>{onOptionText('황사')}}>황사</Option>
          <Option onClick={()=>{onOptionText('지진')}}>지진</Option>
          <Option onClick={()=>{onOptionText('태풍')}}>태풍</Option>
          <Option onClick={()=>{onOptionText('쓰나미')}}>쓰나미</Option>
          <Option onClick={()=>{onOptionText('홍수')}}>홍수</Option>
        </OptionBox>
      </AreaSelect>
      <WritingBtn
        onClick={() => {
          router.push("/Q&A/write");
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_64_5)">
            <path
              d="M18.7467 12.0267L19.9733 13.2533L7.89333 25.3333H6.66667V24.1067L18.7467 12.0267ZM23.5467 4C23.2133 4 22.8667 4.13333 22.6133 4.38667L20.1733 6.82667L25.1733 11.8267L27.6133 9.38667C28.1333 8.86667 28.1333 8.02667 27.6133 7.50667L24.4933 4.38667C24.2267 4.12 23.8933 4 23.5467 4ZM18.7467 8.25333L4 23V28H9L23.7467 13.2533L18.7467 8.25333Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_64_5">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        &nbsp;&nbsp;&nbsp;질문 작성
      </WritingBtn>
    </BtnContainer>
  );
}
const BtnContainer = styled.div`
  width: 360px;
  display: flex;
  gap: 38px;
  position: absolute;
  right: 0;
`;
const WritingBtn = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.primary};
  color: #fff;
  font-size: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`;

const Title = styled.div`
  color: #fff;
  font-size: 19px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const AreaSelect = styled.div`
  position: relative;
  width: 100px;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 10px;
  cursor: pointer;
`;

const SortSelect = styled.div`
  cursor: pointer;
`;

const Selected = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.color.gray3};
   background-color: ${({ theme }) => theme.color.gray4};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content:center;
 
`;

const OptionBox = styled.ul`
  position: absolute;
  top: 40px;
  width: 170px;
  height: 150px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-left: 0px;
  border: 1px solid ${({ theme }) => theme.color.gray3};
  border-radius: 6px;
  display: ${({ option }) => (option ? "block" : "none")};
  appearance: none;
  list-style-type: none;
  background-color: #fff;
  z-index: 10;
`;

const Option = styled.li`
  width: 150px;
  height: 32px;
  padding-left: 10px;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: 700;
  &:last-child {
    border: none;
  }
  &:hover {
    filter: brightness(1.1);
    background-color: ${({ theme }) => theme.color.gray4};
    color: #fff;
  }
`;

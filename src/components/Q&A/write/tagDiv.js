import { styled } from "styled-components";
import { useState } from "react";

export default function TagDiv({category, ChangeState}) {
  const tagItem = [
    "화산폭발",
    "침수",
    "태풍",
    "산사태",
    "폭염",
    "가뭄",
    "강풍",
    "한파",
    "낙뢰",
    "황사",
    "지진",
    "쓰나미",
    "홍수",
  ];
  const [tag, setTag] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const onClickTag = tagItem.map((list, i) => (
    <div
      key={i}
      onClick={() => {
        setTag((prev)=>prev.map((arr, index) => i === index));
        ChangeState('category',list);
       
      }}
    >
      {tag[i] ? <ClickTag>{list}</ClickTag> : <Tag>{list}</Tag>}
    </div>
  ));
  return (
    <TagBox>
      <h1>종류</h1>
      <TagContainer>{onClickTag}</TagContainer>
    </TagBox>
  );
}
const TagBox = styled.div`
  width: 100%;
  height: 13%;
  margin-top: 8%;
  h1 {
    font-size: 22px;
    font-weight: 600;
  }
`;
const TagContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 10%;
  display: flex;
  flex-wrap: wrap;
  gap: 19px 29px;
`;
const Tag = styled.div`
  width: 95px;
  height: 40px;
  border-radius: 12px 12px 4px 12px;
  border: 1px solid #eaeaea;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: #fff;

    transition: all ease 0.4s;
  }
`;
const ClickTag = styled(Tag)`
  background-color: ${({ theme }) => theme.color.primary};
  color: #fff;
`;

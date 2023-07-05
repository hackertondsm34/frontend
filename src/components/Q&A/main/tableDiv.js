import { styled } from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";

export default function TableDiv() {
  const router = useRouter();
  const [writing, setWriting] = useState([
    {
      title: "자주 머물수있게 해",
      cartegory: "화산폭발",
      date: "2023-07-04",
    },
    {
      title: "야 김진건 왜그래",
      cartegory: "화산폭발",
      date: "2023-07-04",
    },
    {
      title: "야떼미로 호잇 호잇 호옿오잇",
      cartegory: "화산폭발",
      date: "2023-07-04",
    },
    {
      title: "집가고 싶어 보내줘",
      cartegory: "화산폭발",
      date: "2023-07-04",
    },
    {
      title: "여기 밥 상당히 맛있네요",
      cartegory: "화산폭발",
      date: "2023-07-04",
    },
    {
      title: "근데 기숙사는 상당히 별로네요",
      cartegory: "홍수",
      date: "2023-07-04",
    },
    {
      title: "자주 머물수있게 해",
      cartegory: "침수",
      date: "2023-07-05",
    },
    {
      title: "자주 머물수있게 해",
      cartegory: "태풍",
      date: "2023-07-05",
    },
    {
      title: "자주 머물수있게 해",
      cartegory: "화산폭발",
      date: "2023-07-05",
    },
    {
      title: "자주 머물수있게 해",
      cartegory: "지진",
      date: "2023-07-05",
    },
  ]);
  const writingList = writing.map((list, index) => 
    (<><ContentBox>
      <NumberText>{index + 1}</NumberText>
      <TitleText2>{list.title}</TitleText2>
      <CartegoryText2>{list.cartegory}</CartegoryText2>
      <DateText2>{list.date}</DateText2>
    </ContentBox></>)
  );
  return (
    <Container>
      <TextBox>
        <hr />
        <div>
          <NumberText>No</NumberText>
          <TitleText>제목</TitleText>
          <CartegoryText>종류</CartegoryText>
          <DateText>작성시간</DateText>
        </div>
      </TextBox>
      <hr />
      <ContentContainer>{writingList}</ContentContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 542px;
  margin-top: 80px;
  hr {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.gray4};
  }
`;
const ContentContainer = styled.div`
  width: 100%;
`;
const TextBox = styled.div`
  margin-top: -10px;
  hr {
    width: 100%;
    height: 1.5px;
    background-color: ${({ theme }) => theme.color.black};
  }
  div {
    height: 50px;
    display: flex;
    p {
      margin-top: 15px;
    }
  }
`;
const NumberText = styled.p`
  width: 109px;
  text-align: center;
  font-size: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  margin-top: 10px;
`;
const TitleText = styled.p`
  width: 939px;
  text-align: center;
  font-size: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
`;
const TitleText2 = styled.p`
  width: 900px;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  padding-left: 35px;
`;
const CartegoryText = styled.p`
  width: 220px;
  text-align: center;
  font-size: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
`;
const CartegoryText2 = styled.p`
  width: 220px;
  text-align: center;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
`;

const DateText = styled.p`
  width: 293px;
  text-align: center;
  font-size: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
`;
const DateText2 = styled.p`
  width: 293px;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
`;
const ContentBox = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray4};
  p {
    align-items: center;
  }
`;

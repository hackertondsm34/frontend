import { styled } from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useContextValue } from "@/hooks/provider";
import { request } from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function TableDiv() {
  const router = useRouter();
  const { data, loading, error } = useQuery(["list"], async () => {
    const data = await request({
      method: "get",
      url: "/questions/",
    });
    return data;
  });
  console.log(data);
  const { optionText } = useContextValue();
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
  ]);
  function filtering(e) {
    const a = data.questions.filter((word) => word.cartegory === e);
    console.log(a);
    return a;
  }
  const ContentDiv = ({ list, index }) => {
    return (
      <>
        <ContentBox
          onClick={() => {
            router.push(`/Q&A/detail/${index}`);
          }}
        >
          <NumberText>{index}</NumberText>
          <TitleText2>{list.title}</TitleText2>
          <CartegoryText2>{list.cartegory}</CartegoryText2>
          <DateText2>{list.date}</DateText2>
        </ContentBox>
      </>
    );
  };
  const writingList = () => {
    if (loading) {
      return <></>;
    }
    if (error) {
      return <></>;
    }
    if (data) {
      console.log(data);
      return (
        <>
          {optionText === "전체" && data?.questions.length !== 0
            ? data.questions.map((list, index) => (
                <>
                  <ContentDiv
                    key={index}
                    index={index + 1}
                    list={list}
                    onClick={() => {
                      router.push(`/Q&A/detail/${index}`);
                    }}
                  ></ContentDiv>
                </>
              ))
            : filtering(optionText).map((list, index) => (
                <>
                  <ContentBox>
                    <NumberText>{index + 1}</NumberText>
                    <TitleText2>{list.title}</TitleText2>
                    <CartegoryText2>{list.cartegory}</CartegoryText2>
                    <DateText2>{list.date}</DateText2>
                  </ContentBox>
                </>
              ))}
          {Array(9 - data.questions.length)
            .fill("")
            .map((list, index) => (
              <>
                <ContentDiv
                  key={index}
                  index={""}
                  onClick={() => {
                    router.push(`/Q&A/detail/${index}`);
                  }}
                  list={{ title: "", cartegory: "", date: "" }}
                ></ContentDiv>
              </>
            ))}
        </>
      );
    }
  };
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
      <ContentContainer>{writingList()}</ContentContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 542px;
  margin-top: 80px;
  margin-bottom: 100px;
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
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray4};
  p {
    align-items: center;
  }
`;

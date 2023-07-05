import { styled } from "styled-components";
import { useState } from "react";

export default function Detail() {
  const [commend, setCommend] = useState("");
  return (
    <Page>
      <Header></Header>
      <MainDiv>
        <ContentBox>
          <TextBox>
            <h1>김진건을 어떻게 없앨까요?&nbsp;&nbsp;&nbsp;</h1>
            <div>화산폭발</div>
            <p>2023-07-04</p>
          </TextBox>
          <ContentDiv>
            <p>
              제가 요즘 참 바빠요. 근데 3학년 2반 김모군이 눈에 자꾸 띄어없애고
              싶습니다. 꿀팁부탁드려요. 집이 참 가고 싶네요. 내가 왜 여기서
              디자인이나 하고 있는지 의문이 들지만 까라면 까야겠죠. 노력은
              해보려구요. 디자인을 하나씩 추가하면서 뭘 어떻게 더 해야되는지
              모르겠어요. 우리팀에 디자이너가 있었으면 개꿀 빨았을텐데 참
              아쉬워요.
            </p>
          </ContentDiv>
        </ContentBox>
        <CommendWriteBox>
          <h1>2개의 답변이 있어요</h1>
          <textarea
            placeholder="답변을 입력해주세요"
            onChange={(e) => {
              setCommend(e.target.value);
            }}
          ></textarea>
          <p>{commend.length} / 255</p>
          <div>
            <button>답변 등록</button>
          </div>
        </CommendWriteBox>
        <CommendContainer>
          <CommendDiv>
            <h1>
              <nav>불타는 화산</nav>님의 답변
            </h1>
            <p>
              화산에다가 밀어버리면 깔끔할 듯 싶네요! <br />
              저도 그렇게 한번 해보려구요!
            </p>
            <h3>2023-07-04</h3>
          </CommendDiv>
          <CommendDiv>
            <h1>
              <nav>불타는 화산</nav>님의 답변
            </h1>
            <p>
              화산에다가 밀어버리면 깔끔할 듯 싶네요! <br />
              저도 그렇게 한번 해보려구요!
            </p>
            <h3>2023-07-04</h3>
          </CommendDiv>
        </CommendContainer>
        <Footer></Footer>
      </MainDiv>
    </Page>
  );
}

const Page = styled.div`
  width: 100vw;
  height: 100vh;
`;
const MainDiv = styled.div`
  width: 1032px;
  height: 93%;
  margin: 0 auto;
  margin-top: 0;
  position: relative;
`;
const Header = styled.div`
  width: 100%;
  height: 7%;
  background-color: ${({ theme }) => theme.color.primary};
`;
const ContentBox = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 70px;
`;
const TextBox = styled.div`
  display: flex;
  position: relative;
  h1 {
    font-size: 32px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  div {
    width: 100px;
    height: 40px;
    border-radius: 15px;
    background: ${({ theme }) => theme.color.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    color: #fff;
    margin-top: 25px;
  }
  p {
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    position: absolute;
    right: 30px;
    bottom: -20px;
  }
`;
const ContentDiv = styled.div`
  width: 100%;
  height: 220px;
  margin-top: 15px;
  border-top: solid 1px ${({ theme }) => theme.color.black};
  border-bottom: solid 1px ${({ theme }) => theme.color.black};
  padding-top: 15px;
  p {
    font-size: 18px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
  }
`;
const CommendWriteBox = styled.div`
  width: 100%;
  height: 283px;
  margin-top: 100px;
  h1 {
    font-size: 24px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
  }
  textarea {
    margin-top: 10px;
    width: 100%;
    height: 150px;
    resize: none;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.black};
    padding-top: 18px;
    padding-left: 23px;
    &::placeholder {
      color: #999;
      font-size: 16px;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  p {
    margin-top: 5px;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.color.gray4};
  }
  div {
    display: flex;
    justify-content: flex-end;
    button {
      width: 200px;
      height: 50px;
      border-radius: 8px;
      background: ${({ theme }) => theme.color.primary};
      border: 0;
      color: #fff;
      font-size: 16px;
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
const CommendContainer = styled.div`
  width: 100%;
  margin-top: 150px;
`;
const CommendDiv = styled.div`
  width: 100%;
  height: 150px;
  padding-left: 40px;
  padding-top: 27px;
  background-color: ${({ theme }) => theme.color.gray};
  border-radius: 5px;
  position: relative;
  margin-bottom: 55px;
  h1 {
    display: flex;
    color: ${({ theme }) => theme.color.black};
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    nav {
      color: ${({ theme }) => theme.color.primary3};
    }
  }
  p {
    width: 800px;
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
  }
  h3 {
    position: absolute;
    bottom: 10px;
    right: 30px;
    font-size: 14px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 75px;
`;

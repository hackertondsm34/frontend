import TagDiv from "@/components/Q&A/write/tagDiv";
import TextBox from "@/components/Q&A/write/textBox";
import TitleDiv from "@/components/Q&A/write/titleDiv";
import ContentDiv from "@/components/Q&A/write/contentDiv";
import { styled } from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Write() {
  const [state, setState] = useState({ title: "", category: "", content: "" });
  const ChangeState = (name, value) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const router = useRouter();
  const send = async () => {
    await request({
      method: "POST",
      url: "/questions/",
      data: {
        title: state.title,
        content: state.content,
        type: state.category,
      },
    }).then((res) => {
      router.push("/Q&A/main");
    });
  };
  return (
    <Page>
      <Header />
      <MainDiv>
        <TextBox />
        <TagDiv category={state.category} ChangeState={ChangeState} />
        <TitleDiv title={state.title} ChangeState={ChangeState} />
        <ContentDiv content={state.content} ChangeState={ChangeState} />
        <BtnDiv>
          <Button
            onClick={() => {
              console.log(state);
              send();
            }}
          >
            작성 완료
          </Button>
        </BtnDiv>
      </MainDiv>
    </Page>
  );
}
const Header = styled.div`
  width: 100%;
  height: 7%;
  background-color: ${({ theme }) => theme.color.primary};
`;
const Page = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainDiv = styled.div`
  width: 974px;
  height: 93%;
  margin: 0 auto;
  margin-top: 0;
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const Button = styled.button`
  width: 275px;
  height: 56px;
  margin-top: 25px;
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

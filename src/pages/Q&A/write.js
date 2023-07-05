import TagDiv from "@/components/Q&A/write/tagDiv";
import TextBox from "@/components/Q&A/write/textBox";
import TitleDiv from "@/components/Q&A/write/titleDiv";
import ContentDiv from "@/components/Q&A/write/contentDiv";
import WritingBtn from "@/components/Q&A/write/writingBtn";
import { styled } from "styled-components";

export default function Write() {
  return (
    <Page>
      <Header />
      <MainDiv>
        <TextBox />
        <TagDiv />
        <TitleDiv />
        <ContentDiv />
        <WritingBtn/>
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

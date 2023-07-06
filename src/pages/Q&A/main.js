import Text from "@/components/Q&A/main/textBox";
import BtnDiv from "@/components/Q&A/main/btnDiv";
import TableDiv from "@/components/Q&A/main/tableDiv";
import { styled } from "styled-components";

export default function Main() {
  return (
    <Page>
      <Header></Header>
      <MainDiv>
        <Text />
        <BtnDiv/>
        <TableDiv/>
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
  width: 1400px;
  height: 93%;
  margin: 0 auto;
  margin-top: 0;
  position: relative;
`;

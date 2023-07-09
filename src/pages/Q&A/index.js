import Text from "@/components/Q&A/main/textBox";
import BtnDiv from "@/components/Q&A/main/btnDiv";
import TableDiv from "@/components/Q&A/main/tableDiv";
import { styled } from "styled-components";
import { Pagination } from "@/components/pagination";

export default function Main() {
  return (
    <Page>
      <MainDiv>
        <Text />
        <BtnDiv />
        <TableDiv />
        <Pagination nowIndex={1} lastIndex={1} changeIndex={(i) => {}} />
      </MainDiv>
    </Page>
  );
}
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

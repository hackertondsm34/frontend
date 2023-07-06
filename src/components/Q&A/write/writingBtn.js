import { styled } from "styled-components";
import { useRouter } from "next/router";
export default function WritingBtn() {
  const router = useRouter();
  return (
    <BtnDiv>
      <Button
        onClick={() => {
          router.push("/Q&A/main");
        }}
      >
        작성 완료
      </Button>
    </BtnDiv>
  );
}

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

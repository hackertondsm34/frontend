import { request } from "@/apis";
import { useContextValue } from "@/hooks/provider";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { keyframes } from "styled-components";
import { styled } from "styled-components";
export const Section = () => {
  const { header } = useContextValue();
  const router = useRouter();
  const { data, status } = useQuery(["mypage"], async () => {
    const data = await request("/users/my");
    return data;
  });
  console.log(data);
  if (header)
    return (
      <_Section>
        {status === "loading" ? (
          <></>
        ) : status === "error" ? (
          <></>
        ) : (
          <>
            <_Profile>
              <div>
                <span>{data.name}</span>님, 안녕하세요.
              </div>
              <p>total score {data.totalScore}</p>
            </_Profile>
            <div>
              <div> 내 질문목록</div>
            </div>
            <div>
              {data.questions.map((e) => (
                <>
                  <div
                    onClick={() => {
                      router.push(`/Q&A/detail/${e.questionId}`);
                    }}
                  >
                    <div>
                      <h3>Q.{e.title}</h3>
                      <div>{e.content}</div>
                    </div>
                    <div>답변이 없습니다.</div>
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      </_Section>
    );
};
const Fade = keyframes`
0% {
    transform:translateX(170px);
}
100%{
    transform: translateX(0);
}
`;
const _Section = styled.div`
  right: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 2;
  height: 100vw;
  width: 250px;
  background-color: ${({ theme }) => theme.color.white};
  animation: ${Fade} 0.25s ease-in-out 0s alternate forwards;
  border-left: 1px solid #000;
  border-left: 1px solid ${({ theme }) => theme.color.primary};
  > div {
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;

      > div {
        font: 500 16px "Inter";
        width: 200px;

        border-bottom: 2px solid;
      }
    }
    &:last-child {
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
      > div {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 100px;
        width: 200px;
        padding: 10px;
        background-color: ${({ theme }) => theme.color.gray2};
        color: ${({ theme }) => theme.color.black};
        font: 500 14px "Inter";
        border-radius: 5px;
        > h3 {
          font: 700 20px "Inter";
        }
        > div {
          &:first-child {
            width: 100%;
            font: 500 16px "Inter";
            border-bottom: 1px solid ${({ theme }) => theme.color.black};
          }
        }
        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;
const _Profile = styled.div`
  width: 95%;
  height: 100px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  > div {
    > span {
      color: ${({ theme }) => theme.color.primary3};
    }
  }
`;

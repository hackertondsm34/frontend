import { keyframes, styled } from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { question, arr } from "@/util";
export default function Question() {
  const router = useRouter();
  const { idx, id } = router.query;
  const [result, setResult] = useState({ answer: "", bool: false });
  const [state, setState] = useState(false);
  useEffect(() => {
    const interval = setTimeout(() => {
      setResult({ answer: "", bool: true });
    }, 10000);
    return () => clearTimeout(interval);
  }, []);
  useEffect(() => {
    const interval = setTimeout(() => {
      if (state) {
        router.push({
          pathname: "/question",
          query: {
            idx: parseInt(idx) + 1,
            id,
          },
        });
      }
    }, 3000);
    return () => clearTimeout(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  useEffect(() => {
    if (result.bool) {
      setState(true);
    }
  }, [result.bool]);
  return (
    <>
      <_Layout>
        <div>
          <div>
            <_Stick>
              <_Bar width={1000 / 6 - idx} />
              <_Bell>
                {Array(5)
                  .fill("")
                  .map(() => (
                    <>
                      <div />
                    </>
                  ))}
              </_Bell>
            </_Stick>
            <_TimeOut>
              <div />
            </_TimeOut>
          </div>
          <_Line />
          <_Title>
            <div>
              <div>{arr.find((e) => e.path === id).comment}</div>
              <span>정답률은 {question[id][idx - 1].correct_rate}%입니다.</span>
            </div>
            <div>{question[id][idx - 1].content}</div>
          </_Title>
          {question[id][idx - 1].type === "OX" ? (
            <_AnswerOX>
              {["O", "X"].map((e) => (
                <>
                  <div
                    onClick={() => {
                      setResult({ answer: e, bool: true });
                    }}
                  >
                    {e}
                  </div>
                </>
              ))}
            </_AnswerOX>
          ) : (
            <_AnswerInput>
              <div>
                <input placeholder="문제의 정답을 적으세요. 예:(지진..etc" />
                <div>제출</div>
              </div>
            </_AnswerInput>
          )}
          <_NextBtn>
            <div
              onClick={() => {
                setResult({ answer: "", bool: true });
              }}
            >
              다음 문제
            </div>
          </_NextBtn>
        </div>
      </_Layout>
      <_Modal></_Modal>
    </>
  );
}
const _Modal = styled.div`
  background: rgba(0, 0, 0, 0.5);
`;
const Fill = keyframes`
 0% {
    width: 0%;
 }

 100% {
    width:100%;
 }
`;
const _AnswerOX = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  > div {
    font: 700 128px "Inter";
    color: ${({ theme }) => theme.color.gray4};
    &:hover {
      color: ${({ theme }) => theme.color.gray6};
    }
  }
`;
const _NextBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  > div {
    width: 200px;
    height: 60px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    font: 600 20px "Inter";
    background-color: ${({ theme }) => theme.color.primary};
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
const _AnswerInput = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  > div {
    height: 50px;
    width: 600px;
    display: flex;
    > input {
      padding: 0 20px;
      font: 500 20px "Inter";
      flex-grow: 1;
      color: ${({ theme }) => theme.color.black};
      &:focus {
        outline: none;
      }
      border-right: none;
      border-radius: 5px 0 0 5px;
    }
    > div {
      width: 135px;
      height: 50px;
      color: ${({ theme }) => theme.color.white};
      display: flex;
      justify-content: center;
      align-items: center;
      font: 600 20px "Inter";
      background-color: ${({ theme }) => theme.color.primary};
      border-radius: 5px;
    }
  }
`;
const _Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 300px;
  > div {
    display: flex;
    gap: 10px;
    align-items: flex-end;
    color: ${({ theme }) => theme.color.black};
    font: 600 24px "Inter";

    > span {
      font: 400 16px "Inter";
      color: ${({ theme }) => theme.color.gray6};
    }
    > div {
      font: 700 32px "Inter";
    }
  }
`;
const _Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.color.gray4};
`;
const _Layout = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 1000px;
    height: 760px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 1px 1px 10px 5px ${(props) => props.theme.color.gray4};
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 27px;
    > div {
      &:first-child {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;
const _TimeOut = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.color.gray2};
  border-radius: 10px;
  > div {
    height: 100%;
    background-color: ${({ theme }) => theme.color.secondary};
    animation: ${Fill} 10s linear 0s alternate forwards;
    border-radius: 10px;
  }
`;
const _Stick = styled.div`
  width: 100%;
  position: relative;
  height: 50px;
  background-color: ${({ theme }) => theme.color.gray2};
  border-radius: 50px;
`;
const _Bar = styled.div`
  position: absolute;
  width: ${({ width }) => width}px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 50px;
`;
const _Bell = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > div {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 50%;
  }
`;

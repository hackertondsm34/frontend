import { styled } from "styled-components";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { arr } from "@/util/index";
import { useRouter } from "next/router";
export default function Home() {
  const [state, setState] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const interval = setTimeout(() => {
      if (state === arr.length - 1) {
        setState(0);
      } else {
        setState((prev) => prev + 1);
      }
    }, 3000);
    return () => clearTimeout(interval);
  }, [state, setState]);
  return (
    <>
      <_Main>
        <_Layout>
          <Image fill src={arr[state].src} alt="background" objectFit="cover" />
          <_Container>
            <div>
              <div
                onClick={() => {
                  if (state !== 0) {
                    setState((prev) => prev - 1);
                  } else {
                    setState(arr.length - 1);
                  }
                }}
              >
                &lt;
              </div>
              <div
                onClick={() => {
                  if (state !== arr.length - 1) {
                    setState((prev) => prev + 1);
                  } else {
                    setState(0);
                  }
                }}
              >
                &gt;
              </div>
            </div>
            <div>
              <span>{arr[state].comment}</span>에 대한 <span>가이드라인</span>을
              확인하고,
              <p>
                <span>퀴즈</span>까지 풀어볼 수 있습니다.
              </p>
              <div onClick={() => router.push(`/guide/${arr[state].path}`)}>
                보러가기 &gt;
              </div>
            </div>
            <div>
              <_Button
                onClick={() => {
                  if (state < 3) {
                    setState(0);
                  } else if (state > arr.length - 3) {
                    setState(arr.length - 5);
                  } else {
                    setState((prev) => prev - 2);
                  }
                }}
                now={state === 0}
              />
              <_Button
                onClick={() => {
                  if (state < 3) {
                    setState(1);
                  } else if (state > arr.length - 3) {
                    setState(arr.length - 4);
                  } else {
                    setState((prev) => prev - 1);
                  }
                }}
                now={state === 1}
              />
              <_Button
                onClick={() => {
                  if (state < 3) {
                    setState(2);
                  } else if (state > arr.length - 3) {
                    setState(arr.length - 3);
                  }
                }}
                now={!(state > 9) && !(state < 2)}
              />
              <_Button
                onClick={() => {
                  if (state < 3) {
                    setState(3);
                  } else if (state > arr.length - 3) {
                    setState(arr.length - 2);
                  } else {
                    setState((prev) => prev + 1);
                  }
                }}
                now={state === 10}
              />
              <_Button
                onClick={() => {
                  if (state < 3) {
                    setState(4);
                  } else if (state > arr.length - 3) {
                    setState(arr.length - 1);
                  } else {
                    setState((prev) => prev + 2);
                  }
                }}
                now={state === 11}
              />
            </div>
          </_Container>
        </_Layout>
        <div>
          재난 관련 궁금사항이 있으신가요?
          <Link href="/">Q&A 페이지로 이동</Link>
        </div>
        <_CardLayout>
          {arr.map((e) => (
            <>
              <_Card
                key={e.path}
                onClick={() => router.push(`/guide/${e.path}`)}
              >
                <div>
                  <Image src={e.src} alt={e.comment} fill />
                </div>
                <div>{e.comment}</div>
              </_Card>
            </>
          ))}
        </_CardLayout>
      </_Main>
    </>
  );
}
const _Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  > div {
    &:nth-child(2) {
      margin-left: 150px;
      display: flex;
      gap: 20px;
      font: 500 20px "Inter";
      color: ${({ theme }) => theme.color.black};
      > a {
        font: 600 20px "Inter";
        color: ${({ theme }) => theme.color.primary};
        &:hover {
          filter: brightness(0.8);
        }
      }
    }
    &:last-child {
      margin-bottom: 100px;
    }
  }
`;
const _Layout = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: ${({ theme }) => theme.color.black};
`;
const _Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(16, 17, 18, 0.2) 4.95%,
    #101112 100%
  );
  > div {
    &:first-child {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        cursor: pointer;
        &:first-child {
          margin-left: 30px;
        }
        &:last-child {
          margin-right: 30px;
        }
        color: ${({ theme }) => theme.color.gray3};
        font: 700 32px "Inter";
        &:hover {
          color: ${({ theme }) => theme.color.white};
        }
      }
    }
    &:nth-child(2) {
      position: absolute;
      top: 40%;
      left: 100px;
      color: ${({ theme }) => theme.color.white};
      font: 600 32px "Inter";
      span {
        color: ${({ theme }) => theme.color.primary};
      }
      > div {
        width: 150px;
        height: 60px;

        border-radius: 5px;
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.white};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-top: 50px;
        font: 24px "Inter";
        &:hover {
          filter: brightness(0.8);
        }
      }
    }
    &:last-child {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 20px;
      bottom: 20px;
    }
  }
`;
const _Button = styled.div`
  width: 15px;
  height: 15px;

  background-color: ${({ theme, now }) => theme.color[now ? "white" : "gray6"]};
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.white};
  }
`;
const _CardLayout = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  gap: 20px 100px;
  justify-content: center;
`;
const _Card = styled.div`
  width: 350px;
  height: 220px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 1px 1px 10px 5px ${(props) => props.theme.color.gray4};
  border-radius: 5px;
  cursor: pointer;
  > div {
    &:first-child {
      position: relative;
      width: 100%;
      height: 170px;
    }
    &:last-child {
      margin-top: 10px;
      margin-left: 20px;
      font: 500 24px "Inter";
    }
  }
`;

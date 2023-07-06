import { MDXProvider } from "@mdx-js/react";
import { styled } from "styled-components";
import { useRouter } from "next/router";
import { arr } from "@/util";
import Image from "next/image";
export const Layout = ({ children }) => {
  const router = useRouter();
  const id = router.asPath.split("/")[2];
  return (
    <>
      <MDXProvider components={{ li: ({ children }) => <_Li>{children}</_Li> }}>
        <_PictureLayout>
          <Image
            fill
            src={arr.find((e) => e.path === id).src}
            alt="이미지입니다"
          />
          <div />
        </_PictureLayout>
        <_Guide>
          <div>자연 재난 가이드</div>
        </_Guide>
        <_Layout>
          <div>
            <div onClick={() => router.back()}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 22L12.9387 20.0613L5.26625 12.375L22 12.375V9.625L5.26625 9.625L12.9387 1.93875L11 0L0 11L11 22Z"
                  fill="black"
                />
              </svg>
              이전으로
            </div>
            <div
              onClick={() =>
                router.push({
                  pathname: "/question",
                  query: {
                    idx: 1,
                    id,
                  },
                })
              }
            >
              퀴즈풀기
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0L9.06125 1.93875L16.7338 9.625H0V12.375H16.7338L9.06125 20.0613L11 22L22 11L11 0Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div>{children}</div>
        </_Layout>
      </MDXProvider>
    </>
  );
};
const _Guide = styled.div`
  display: flex;
  justify-content: center;
  > div {
    width: 400px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.gray};
    color: ${({ theme }) => theme.color.black};

    font: 600 28px "inter";
  }
  margin-bottom: 30px;
`;
const _Li = styled.li`
  font: 400 18px "inter";
  margin: 5px;
`;
const _PictureLayout = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 50px;
  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(16, 17, 18, 0.2) 4.95%,
      #101112 100%
    );
  }
`;
const _Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  > div {
    &:first-child {
      position: absolute;
      width: 1400px;
      display: flex;
      justify-content: space-between;
      font: 500 24px "Inter";
      align-items: center;
      color: ${({ theme }) => theme.color.black};

      > div {
        cursor: pointer;
        display: flex;
        gap: 10px;
        color: ${({ theme }) => theme.color.black};
        &:hover {
          color: ${({ theme }) => theme.color.gray4};
          path {
            fill: ${({ theme }) => theme.color.gray4};
          }
        }
      }
    }
    &:nth-child(2) {
      width: 1000px;
      height: 100%;
      background-color: ${({ theme }) => theme.color.gray};
      padding: 30px;
      border-radius: 5px;
      margin-bottom: 100px;
      font-family: "Inter";
    }
  }
`;

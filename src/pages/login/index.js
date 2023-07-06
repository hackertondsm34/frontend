import { styled } from "styled-components";
import Image from "next/image";
import { naverIcon, kakaoIcon, googleIcon } from "../../../public";
export default function Login() {
  return (
    <>
      <_Card>
        <div>
          <div>소셜 로그인</div>
          <div />
          <div>로그인 후 서비스를 이용해보세요!</div>
          <div>
            {[
              {
                src: kakaoIcon,
                comment: "카카오",
                color: "#000",
                back: "#FEE500",
                border: "#FEE500",
                path: "kakao",
              },
              {
                src: googleIcon,
                comment: "구글",
                color: "#000",
                back: "#fff",
                border: "#000",
                path: "google",
              },
              {
                src: naverIcon,
                comment: "네이버",
                color: "#fff",
                back: "#03C75A",
                border: "#03C75A",
                path: "naver",
              },
            ].map((e) => {
              const { comment, path, src, ...others } = e;
              return (
                <>
                  <_Button
                    {...others}
                    key={comment}
                    href={`${process.env.NEXT_PUBLIC_API_URL}/auth/${path}`}
                  >
                    <div>
                      <Image src={src} alt={comment} />
                      <div>{comment} 계정으로 로그인</div>
                    </div>
                  </_Button>
                </>
              );
            })}
          </div>
        </div>
      </_Card>
    </>
  );
}
const _Button = styled.a`
  text-decoration: none;
  > div {
    color: ${({ color }) => color};
    background-color: ${({ back }) => back};
    border: 2px solid ${({ border }) => border};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    border-radius: 5px;
    padding-left: 28px;
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
    > div {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font: 500 24px "Inter";
    }
  }
`;
const _Card = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 600px;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
    > div {
      &:first-child {
        display: flex;
        justify-content: center;
        font: 600 40px "Inter";
        color: ${({ theme }) => theme.color.black};
      }
      &:nth-child(2) {
        background-color: ${({ theme }) => theme.color.black};
        height: 2px;
      }
      &:nth-child(3) {
        font: 400 16px "Inter";
        color: ${({ theme }) => theme.color.black};
      }
      &:last-child {
        display: flex;
        flex-direction: column;
        gap: 25px;
      }
    }
  }
`;

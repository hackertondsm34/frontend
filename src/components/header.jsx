import { styled, keyframes } from "styled-components";
import { useRouter } from "next/router";
import { useContextAction, useContextValue } from "@/hooks/provider";
export const Header = () => {
  const reducer = useContextAction();
  const { header } = useContextValue();
  const router = useRouter();
  return (
    <>
      <_Header color={router.asPath === "/login"}>
        <div></div>
        <_IconLayout
          width={header ? 250 : 80}
          onClick={() => reducer({ type: "HEADER" })}
        >
          <svg
            width="48"
            height="32"
            viewBox="0 0 48 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 32H48V26.6667H0V32ZM0 18.6667H48V13.3333H0V18.6667ZM0 0V5.33333H48V0H0Z"
              fill="#DBDCDD"
            />
          </svg>
        </_IconLayout>
      </_Header>
    </>
  );
};
const Fade = (width) => keyframes`
0% {
   width: 80px;
}
100%{
    width: ${width}px;
}
`;
const _Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme, color }) =>
    color ? theme.color.primary : "transparent"};
`;
const _IconLayout = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ width }) => Fade(width)} 0.25s ease-in-out 0s alternate
    forwards;
  &:hover {
    background-color: ${({ theme }) => theme.color.gray4};
    path {
      fill: ${({ theme }) => theme.color.white};
    }
  }
`;

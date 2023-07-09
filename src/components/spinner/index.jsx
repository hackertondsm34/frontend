import styled, { keyframes } from "styled-components";

export const Spinner = () => {
  return (
    <_BackGround>
      <_Spiiner />
    </_BackGround>
  );
};
const Rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`;
const _BackGround = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.4);
`;
const _Spiiner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${Rotation} 1s linear infinite;
`;

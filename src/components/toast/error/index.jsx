import { keyframes, styled } from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
export const ErrorToast = ({ comment, color }) => {
  return (
    <>
      <ToastLabel color={color}>
        <div>
          <AiOutlineCheckCircle size={20} color={color} />
          {comment}
        </div>
        <div />
      </ToastLabel>
    </>
  );
};
const FadeIn = keyframes`
 0% {
    transform: translateX(100px);
 }
 100% {
  transform: translate(0);
 }`;
const FillUp = keyframes`
    0% {
       width: 0;
    }
    100% {
     width: 340px;
    }
 `;
const ToastLabel = styled.div`
  position: absolute;
  top: 100px;
  right: 20px;
  z-index: 5;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  animation: ${FadeIn} 0.5s ease-in-out 0s alternate both;
  > div {
    &:first-child {
      width: 300px;
      height: 50px;
      padding: 5px 20px;
      color: ${({ color }) => color};

      font: 500 16px "Inter";
      display: flex;
      gap: 20px;
      align-items: center;
    }
    &:last-child {
      height: 5px;
      background-color: ${({ theme }) => theme.color.white};
      animation: ${FillUp} 2s linear 0.5s alternate both;
    }
  }
`;

import { styled } from "styled-components";

export default function Text() {
  return (
    <TextBox>
      <h1>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_64_16)">
            <path
              d="M23.4333 15.0333L24.9667 16.5667L9.86667 31.6667H8.33333V30.1333L23.4333 15.0333ZM29.4333 5C29.0167 5 28.5833 5.16667 28.2667 5.48333L25.2167 8.53333L31.4667 14.7833L34.5167 11.7333C35.1667 11.0833 35.1667 10.0333 34.5167 9.38333L30.6167 5.48333C30.2833 5.15 29.8667 5 29.4333 5ZM23.4333 10.3167L5 28.75V35H11.25L29.6833 16.5667L23.4333 10.3167Z"
              fill="#231815"
            />
          </g>
          <defs>
            <clipPath id="clip0_64_16">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
        질문 작성
      </h1>
      <h3>궁금한 모든 걸 적어보세요!</h3>
    </TextBox>
  );
}
const TextBox = styled.div`
  width: 100%;
  height: 9%;
  padding-top: 4.5%;
  h1 {
    font-size: 36px;
    font-weight: 700;
  }
  h3 {
    margin-top: -1%;
    font-size: 24px;
    font-weight: 500;
  }
`;

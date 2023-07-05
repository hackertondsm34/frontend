import { styled } from "styled-components";
import { useState } from "react";
export const Header = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <_Header>
        <div>1</div>
        <_IconLayout
          width={state ? 250 : 80}
          onClick={() => setState((prev) => !prev)}
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
const _Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const _IconLayout = styled.div`
  width: ${({ width }) => width}px;
  cursor: pointer;
`;

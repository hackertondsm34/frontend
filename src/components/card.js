import { styled } from "styled-components";

export const Card = (onClick) => {
  return (
    <>
      <_Card onClick={onClick}></_Card>
    </>
  );
};
const _Card = styled.div`
  width: 300px;
  height: 200px;
`;

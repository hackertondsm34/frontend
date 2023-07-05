import { useContextValue } from "@/hooks/provider";
import { keyframes } from "styled-components";
import { styled } from "styled-components";
export const Section = () => {
  const { header } = useContextValue();
  if (header) return <_Section />;
};
const Fade = keyframes`
0% {
    transform:translateX(170px);
}
100%{
    transform: translateX(0);
}
`;
const _Section = styled.div`
  right: 0;
  position: fixed;
  z-index: 2;
  height: 100vw;
  width: 250px;
  background-color: ${({ theme }) => theme.color.white};
  animation: ${Fade} 0.25s ease-in-out 0s alternate forwards;
  border-left: 1px solid #000;
  border-left: 1px solid ${({ theme }) => theme.color.primary};
`;

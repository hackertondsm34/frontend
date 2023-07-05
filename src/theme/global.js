import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
export const GlobalStyle = createGlobalStyle`
 body { 
    width: 100vw;
    height: 100vh;

    box-sizing: border-box;
    margin: 0;
    overflow-x: hidden;
 }
 ${normalize}
`;

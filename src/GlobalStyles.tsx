import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html{
        padding: 0px;
        margin: 0px;
    }

    body{
        padding: 0px;
        margin: 0px;
        background-color: ${({ theme }) => theme.colors.cuaternary}
    }
`;

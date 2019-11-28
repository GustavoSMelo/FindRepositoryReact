import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    html, body, #root{
        min-height: 100%;
    }

    body{
        background-color: #7159c1;
        -webkit-font-smoothing: antialiased !important;
    }
`;

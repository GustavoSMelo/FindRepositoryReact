import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const ContainerLoading = styled.div.attrs(props => ({
    loading: props.loading,
}))`
    margin: 50px auto;
    max-width: 780px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #fff;
    color: #000;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${props =>
        props.loading &&
        css`
            svg {
                width: 40px;
                height: 40px;
                animation: ${rotate} linear 2s infinite;
            }
        `}
`;

export const ContainerLoaded = styled.div`
    margin: 50px auto;
    max-width: 780px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #fff;
    color: #000;
    padding: 50px;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    .link {
        margin-left: 35%;
        text-decoration: none;
    }

    img {
        margin-top: 30px;
        width: 30%;
        height: 30%;
        margin-left: 35%;
        border-radius: 5px;
    }

    .name {
        margin-top: 15px;
        text-align: center;
    }
    p {
        margin-top: 50px;
        text-align: center;
        color: #707070;
    }

    button {
        background-color: #7159c1;
        color: #fff;
        width: 180px;
        height: 56px;
        margin-left: 35%;
        margin-top: 30px;
        margin-bottom: 15px;
        border: none;
    }
`;

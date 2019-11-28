import styled, { keyframes, css } from 'styled-components';

export const Container = styled.article`
    max-width: 780px;
    background-color: #fff;
    color: #000;
    margin: 10% auto;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #101010;
    font-size: 100%;

    h1 {
        margin-bottom: 15px;
    }
`;
export const Form = styled.form`
    input {
        border-radius: 5px;
        border: solid 1px #999;
        padding: 7px;
        box-shadow: 1px 1px 3px #909090;
        width: 90%;
    }
`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    disabled: props.loading,
}))`
    background-color: #7159c1;
    color: #fff;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: solid 1px #999;
    box-shadow: 1px 1px 3px #909090;
    text-align: center;
    margin: 5px;
    cursor: pointer;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
    ${props =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 1s linear infinite;
            }
        `}
`;

export const List = styled.ul`
    list-style-type: none;
    margin-top: 30px;

    img {
        width: 55px;
        height: 55px;
    }

    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & + li {
            border-top: solid 1px #777;
        }

        a {
            color: #7159c1;
            text-decoration: none;
        }
    }
`;

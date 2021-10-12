import styled from "styled-components";

const Input = styled.input`
    transition: 0.1s;
    border: none;
    border-bottom: 0.5px solid black;
    text-align: center;
    width: 3%;
    font-family: 'Courier New', Courier, monospace;
    &:focus {
        outline: none;
        border-bottom: 2px solid red;
    }
`;

export default Input;
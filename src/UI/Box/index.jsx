import styled from "styled-components";

const Box = styled.div`
	background-color: ${({ active }) => (active ? "black" : "white")};
	width: ${({ length }) => length || 10}px;
	height: ${({ length }) => length || 10}px;
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 0px 0px;
	${({ border }) => border && "border: 0.125px solid black;"}
`;

export default Box;

import styled from "styled-components";

const Button = styled.button`
	transition: 0.25s;
	color: black;
	background-color: #F5F5F5;
	border: none;
	border-radius: 10px;
	transform: scale(1);
	&:hover {
		cursor: pointer;
		transform: scale(1.25);
	}
`;

export default Button;

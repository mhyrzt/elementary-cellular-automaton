import styled from "styled-components";

const Row = styled.div`
	background-color: rgba(255, 255, 255, 0.9);
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	${({ overflow }) => overflow && "min-width: 100%;"}
	${({ overflow }) => overflow && "width: max-content;"}

`;

export default Row;

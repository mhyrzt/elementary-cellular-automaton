import styled from "styled-components";

const Container = styled.div`
	height: ${({height}) => height || 1}vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	${({scroll}) => scroll && "overflow: scroll;"}
	${({scroll}) => scroll && "box-sizing: border-box;"}

`;

export default Container;
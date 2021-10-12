import Box from "../../UI/Box";

const Cell = ({ isActive, length, border }) => {
	return <Box active={isActive} length={length} border={border} />;
};

export default Cell;

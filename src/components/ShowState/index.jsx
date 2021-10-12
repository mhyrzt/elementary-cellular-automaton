import Cell from "../cell";
import Container from "../../UI/Container";
import Row from "../../UI/Row";

const styleContainer = {
	width: "10%",
	height: "30%",
	display: "flex",
	flexDirection: "column",
};

const ShowState = (props) => {
	const { prevStates, newState } = props;
	const getCell = (s) => <Cell isActive={Boolean(parseInt(s))} border />;

	return (
		<div style={styleContainer}>
			<Row>{prevStates.map((s) => getCell(s))}</Row>
			<Row>{getCell(newState)}</Row>
		</div>
	);
};

export default ShowState;

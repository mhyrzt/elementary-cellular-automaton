import Cell from "../cell";
import Row from "../../UI/Row";
import Container from "../../UI/Container";


const Window = ({ cells: states, size, dir }) => {
	return (
		<Container height={80} scroll style={{direction: dir}}>
			{states.map((cells, ridx) => (
				<Row key={ridx} overflow>
					{cells.map((c, cidx) => (
						<Cell length={size} isActive={Boolean(c)} key={cidx} />
					))}
				</Row>
			))}
		</Container>
	);
};

export default Window;

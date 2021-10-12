import { useEffect, useState } from "react";

import Rule from "../../hooks/Rule/Rule";

import Button from "../../UI/Button";
import Container from "../../UI/Container";
import Input from "../../UI/Input/input";
import Row from "../../UI/Row";
import ShowState from "../ShowState";
import Text from "../../UI/Text";

function isParsable(str) {
	return Boolean(/^\d+$/.exec(str));
}

function getShowState(rule) {
	const lut = Rule.genTable(rule);
	const states = [];
	for (let i = 7; i >= 0; i--) {
		const arr = [];
		const bin = Rule.getBinary(i, 3);
		arr.push(bin);
		arr.push(lut[bin]);
		states.push(arr);
	}

	return states;
}

const Controll = (props) => {
	const { onNext, onPrev, onUpdate, onRule } = props;
	const [row, setRow] = useState(props.row);
	const [dir, setDir] = useState(props.dir);
	const [rule, setRule] = useState(props.rule);
	const [size, setSize] = useState(props.size);

	const incRow = () => {
		setRow(row + 1);
		onNext();
	};

	const decRow = () => {
		setRow(row - 1 ? row - 1 : 1);
		onPrev();
	};

	const toggleDir = () => {
		setDir(dir === "rtl" ? "ltr" : "rtl");
	};

	const handleRule = ({ target }) => {
		const value = target.value.trim();

		if (!value) {
			setRule(0);
		}

		if (isParsable(value)) {
			if (value >= 0 && value <= 255) {
				setRule(parseInt(value));
			}
		}
	};

	const handleSize = ({ target }) => {
		const value = target.value.trim();

		if (!value) {
			setSize(1);
		}

		if (isParsable(value)) {
			setSize(value > 0 ? parseInt(value) : size);
		}
	};

	useEffect(() => {
		onUpdate({ row, rule, size, dir });
	}, [row, rule, size, dir]);

	useEffect(() => {
		onRule(rule);
	}, [rule]);
	
	return (
		<Container height={15} style={{marginTop: "1.5%"}}>
			<Row style={{ marginBottom: "1%" }}>
				<Text>RULE</Text>
				<Input onChange={handleRule} value={rule} />

				<Text> | </Text>

				<Button onClick={decRow}>👈</Button>
				<Text>{row}</Text>
				<Button onClick={incRow}>👉</Button>

				<Text> | </Text>

				<Text>SIZE</Text>
				<Input onChange={handleSize} value={size} />

				<Text> | </Text>

				<Button onClick={toggleDir}>{dir.toUpperCase()}</Button>
			</Row>

			<Row style={{ marginBottom: "1%", width: "45%" }}>
				{getShowState(rule).map(([prev, next]) => (
					<ShowState prevStates={[...prev]} newState={next} />
				))}
			</Row>
			<Row
				style={{
					marginBottom: "1%",
					width: "30%",
					justifyContent: "space-evenly",
				}}
			>
				<a target="_blank" href="">
					GitHub
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/mhyrzt/">
					LinkedIn
				</a>
			</Row>
		</Container>
	);
};

export default Controll;

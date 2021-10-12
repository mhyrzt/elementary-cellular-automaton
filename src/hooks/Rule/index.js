import { useState } from "react";

import Rule from "./Rule";

const useRule = ({ rule: ruleNumber, row: rowCount }) => {
	const [lut, setLut] = useState(Rule.genTable(ruleNumber));
	const [row, setRow] = useState(rowCount);
	const [states, setStates] = useState(Rule.initStates(lut, row));

	const nextState = () => {
		const newStates = Rule.nextState(states, lut, row, setRow);
		setStates(newStates);
	};

	const prevState = () => {
		const newStates = Rule.prevState(states, row, setRow);
		setStates(newStates);
	};

	const setRule = (rule) => {
		const newLut = Rule.genTable(rule);
		const newStates = Rule.initStates(newLut, row);
		setLut(newLut);
		setStates(newStates);
	};

	return [states, { nextState, prevState, setRule }];
};

export default useRule;

class Rule {
	static paddBinary(bin, length) {
		const len = bin.length;
		const min = length - len;
		const zeros = "0".repeat(min);
		return zeros + bin;
	}

	static getBinary(dec, length = 8) {
		return Rule.paddBinary(dec.toString(2), length);
	}

	static genTable(rule) {
		const bin = Rule.getBinary(rule);
		let table = {};
		for (let i = 0; i <= 7; i++) table[this.getBinary(7 - i, 3)] = bin[i];

		return table;
	}

	static getPrevtState(states) {
		return [0, 0, ...states[states.length - 1], 0, 0];
	}

	static shouldProcessNextState(states, rows) {
		return states.length === rows;
	}

	static addRow(row, setRow) {
		setRow(row + 1);
	}

	static getNewState(states, lut) {
		const prev = Rule.getPrevtState(states);
		const state = [];

		const getKey = (idx, prv) =>
			[prv[idx - 1], prv[idx], prv[idx + 1]].join("");

		const getVal = (idx, prv) => parseInt(lut[getKey(idx, prv)]);

		for (let i = 1; i < prev.length - 1; i++) {
			state.push(getVal(i, prev));
		}

		return state;
	}

	static addNewState(states, lut) {
		return [...states, Rule.getNewState(states, lut)];
	}

	static nextState(states, lut, row, setRow) {
		Rule.addRow(row, setRow);
		const check = Rule.shouldProcessNextState(states, row);
		if (!check) {
			return states;
		} else {
			return Rule.addNewState(states, lut);
		}
	}

	static prevState(states, row, setRow) {
		if (!row) return states;
		setRow(row - 1);
		states.pop();
		return states;
	}

	static initStates(lut, row, init = [[1]]) {
		let states = [...init];
		for (let i = 1; i < row; i++)
			states = Rule.addNewState(states, lut)
		return states;
	}
}

export default Rule;

import { useEffect, useState } from "react";

import useRule, { RULE_ACTIONS } from "./hooks/Rule";

import Controll from "./components/Controll";
import Window from "./components/window";

function App() {
	const [globalStates, setGlobalStates] = useState({
		rule: 30,
		row: 275,
		size: 2,
		dir: "rtl"
	});
	const [states, { nextState, prevState, setRule }] = useRule(globalStates);
	return (
		<>
			<Window cells={states} {...globalStates} />
			<Controll
				{...globalStates}
				onNext={nextState}
				onPrev={prevState}
				onRule={setRule}
				onUpdate={setGlobalStates}
			/>
		</>
	);
}

export default App;

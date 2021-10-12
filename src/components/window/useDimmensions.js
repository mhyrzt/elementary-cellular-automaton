import { useLayoutEffect, useRef, useState, forwardRef } from "react";

function useDimensions() {
	const ref = useRef();
	const [dim, setDim] = useState({});

	useLayoutEffect(() => {
		const current = ref.current;
		const height = current.clientHeight;
		const width = current.clientWidth;
		setDim({ height, width });
	}, [ref.current]);

	return [ref, dim];
}

export default useDimensions;

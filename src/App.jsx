import React, { useState, useEffect } from "react";
import "./App.scss";
import Feature from "./components/Feature";
import { randomFeatures, generator } from "./mocks/features";

function App() {
	const [features, setFeatures] = useState(randomFeatures);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setFeatures([...features, generator()]);
		}, 10000);

		return () => clearInterval(intervalId);
	}, [features]);

	return (
		<div className="App">
			{features.map((data, index) => (
				<Feature key={index} {...data} />
			))}
		</div>
	);
}

export default App;

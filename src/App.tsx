import "./styles/App.css";

import { Header } from "./components/Header";
import { Buttons } from "./components/Buttons";
import { Info } from "./components/Info";

function App() {
	const headerText = {
		title: "Button types",
		paragraph:
			"Within a layout, buttons serve to highlight important actions to be taken. Below is an example of types and properties.",
	};

	return (
		<div className="App">
			<section>
				<Header headerText={headerText} />
				<Buttons />
			</section>
			<section>
				<Info />
			</section>
		</div>
	);
}

export default App;

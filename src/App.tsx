import { Header } from "./components/Header";
import { Buttons } from "./components/Buttons";
import { Info } from "./components/Info";
import { Flex } from "@chakra-ui/react";

function App() {
	const headerText = {
		title: "Button types",
		paragraph:
			"Within a layout, buttons serve to highlight important actions to be taken. Below is an example of types and properties.",
	};

	return (
		<Flex className="App">
			<Flex
				direction="column"
				as="section"
				justify="center"
				gap="6.8rem"
				flex={1}
			>
				<Header headerText={headerText} />
				<Buttons />
			</Flex>
			<Flex as="section" align="center" w="27%" bg="#130F1E">
				<Info />
			</Flex>
		</Flex>
	);
}

export default App;

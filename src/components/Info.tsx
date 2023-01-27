import { Button, Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { TemplateButton } from "./TemplateButton";

export function Info() {
	const headerText = {
		title: "Test the buttons",
		paragraph:
			"Interact with the buttons and watch the appearance and cursors change",
	};

	const sampleStyle = {
		opacity: "none",
		img: "none",
		border: "none",
		w: "100%",
	};

	return (
		<Flex direction="column" gap="6.8rem" w="31.8rem">
			<Header headerText={headerText} />
			<Flex h="57.6rem" w="100%" direction="column" align="center" gap="3.2rem">
				<TemplateButton
					pattern=""
					head="INTERACT WITH ME"
					customStyle={sampleStyle}
				></TemplateButton>
				<TemplateButton
					pattern=""
					head="INTERACT WITH ME"
					customStyle={sampleStyle}
				></TemplateButton>
				<TemplateButton
					pattern=""
					head="INTERACT WITH ME"
					customStyle={sampleStyle}
				></TemplateButton>
			</Flex>
		</Flex>
	);
}

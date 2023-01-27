import { Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { TemplateButton } from "./TemplateButton";

export function Info() {
	const headerText = {
		title: "Test the buttons",
		paragraph:
			"Interact with the buttons and watch the appearance and cursors change",
	};
	const customStyle = [
		{
			defaultBg: true,
			opacity: "none",
			img: "",
			border: "none",
			w: "100%",
			customPattern: "PRIMARY",
		},
		{
			defaultBg: true,
			opacity: "none",
			img: "",
			border: "none",
			w: "100%",
			customPattern: "SECONDARY",
		},
		{
			defaultBg: true,
			opacity: "none",
			img: "movableIcon",
			border: "none",
			w: "100%",
			customPattern: "TERTIARY",
		},
	];
	return (
		<Flex direction="column" gap="6.8rem" w="31.8rem">
			<Header headerText={headerText} />
			<Flex h="57.6rem" w="100%" direction="column" align="center" gap="3.2rem">
				{customStyle.map((style, i) => {
					return (
						<TemplateButton
							key={`${style}-${i}`}
							pattern=""
							head="INTERACT WITH ME"
							customStyle={style}
						></TemplateButton>
					);
				})}
			</Flex>
		</Flex>
	);
}

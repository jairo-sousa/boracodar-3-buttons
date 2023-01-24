import { Button, Flex } from "@chakra-ui/react";
import { Header } from "./Header";

export function Info() {
	const headerText = {
		title: "Test the buttons",
		paragraph:
			"Interact with the buttons and watch the appearance and cursors change",
	};
	return (
		<Flex direction="column" gap="6.8rem" w="31.8rem">
			<Header headerText={headerText} />
			<Flex h="57.6rem" w="100%" direction="column" align="center" gap="3.2rem">
				<Flex>
					<Button color="black">Demo button</Button>
				</Flex>
				<Flex>
					<Button color="black">Demo button</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}

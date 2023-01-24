import { Flex, Heading, Text } from "@chakra-ui/react";

type HeaderProps = {
	headerText: {
		title: String;
		paragraph: string;
	};
	customStyle?: {
		w: String;
	};
};

export function Header(props: HeaderProps) {
	return (
		<Flex
			as="header"
			direction="column"
			textAlign="start"
			w={`${props.customStyle?.w}`}
		>
			<Heading
				as="h1"
				fontSize="3.2rem"
				fontFamily="Inter, sans-serif"
				fontWeight="700"
			>
				{props.headerText.title}
			</Heading>

			<Text
				noOfLines={2}
				fontSize="1.921rem"
				fontFamily="roboto"
				fontWeight="400"
				opacity="0.67"
			>
				{props.headerText.paragraph}
			</Text>
		</Flex>
	);
}

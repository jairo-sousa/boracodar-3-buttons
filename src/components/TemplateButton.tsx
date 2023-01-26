import { Button } from "@chakra-ui/react";

type ButtonProps = {
	text: String;
	pattern: String;
	customStyle: { opacity: String; img: String; border: String };
};

type defaultBg = any;

export function TemplateButton(props: ButtonProps) {
	const Style = { ...props.customStyle };

	const defaultBg = {
		PRIMARY: {
			default: "#8257E5",
			ligth: "#9674E5",
		},
		SECONDARY: {
			default: "#6A617F",
			ligth: "#6A617F",
		},
		TERTIARY: {
			default: "transparent",
			ligth: "#6A617F",
		},
	}[`${props.customStyle}`];

	return (
		<Button
			bg="#8257E5"
			opacity={Style.opacity?.toString()}
			border={Style.border?.toString()}
			h="4.8rem"
			color="#FFFFFF"
			borderRadius="2.4rem"
			px="2.4rem"
			fontSize="1.4rem"
			fontFamily="Inter"
			fontWeight="500"
			justifyContent="center"
			alignItems="center"
		>
			{props.text}
		</Button>
	);
}

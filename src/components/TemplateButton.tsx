import { Button } from "@chakra-ui/react";

type ButtonProps = {
	text: String;
};

export function TemplateButton(props: ButtonProps) {
	return (
		<Button
			bg="#8257E5"
			color="#FFFFFF"
			h="4.8rem"
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

import { Button, Spinner, Image } from "@chakra-ui/react";
import movableIcon from "../assets/movableIcon.svg";

type ButtonProps = {
	pattern: String;
	head: String;
	customStyle?: { opacity: String; img: String; border: String };
};

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

	const img = chooseImg(Style.img);

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
			gap="0.8rem"
			w="100%"
		>
			{img}
			{`${props.head} ${props.pattern}`}
		</Button>
	);

	function chooseImg(selector: String | unknown) {
		try {
			const choosenImg = {
				Spinner: (
					<Spinner
						thickness="3px"
						speed="1.5s"
						emptyColor="transparent"
						color="white"
						w="1.6rem"
						h="1.6rem"
					/>
				),
				movableIcon: <Image src={movableIcon}></Image>,
			}[`${selector}`];

			return choosenImg;
		} catch (e) {
			console.log(e);
			return <Spinner />;
		}
	}
}

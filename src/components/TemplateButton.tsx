import { Button, Spinner, Image } from "@chakra-ui/react";
import movableIcon from "../assets/movableIcon.svg";

type ButtonProps = {
	pattern: String;
	head: String;
	customStyle?: {
		defaultBg: Boolean;
		opacity: String;
		img: String;
		border: String;
		w: String;
		customPattern?: String;
	};
};

export function TemplateButton(props: ButtonProps) {
	const Style = { ...props.customStyle };

	const img = chooseImg(Style.img);

	const bgPattern = chooseBg(
		props.pattern ? props.pattern : `${Style.customPattern}`
	);

	const bgs = bgPattern.toString().split(",");

	const bg = Style.defaultBg ? bgs[0] : bgs[1];

	return (
		<Button
			bg={bg}
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
			w={Style.w?.toString()}
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
			return null;
		}
	}

	function chooseBg(patternSelector: String) {
		try {
			const bgs = {
				PRIMARY: ["#8257E5", "#9674E5"],
				SECONDARY: ["#3C3748", "#6A617F"],
				TERTIARY: ["transparent", "transparent"],
			}[`${patternSelector}`];

			const choosenBg = [...(bgs ? bgs : "#8257E5")];

			return choosenBg;
		} catch (e) {
			console.log(e);
			return 0;
		}
	}
}

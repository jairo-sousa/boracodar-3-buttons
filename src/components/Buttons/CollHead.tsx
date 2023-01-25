import { Th } from "@chakra-ui/react";

type CollHeadProps = {
	children?: React.ReactNode;
};

export function CollHead(props: CollHeadProps) {
	return <Th h="6.4rem">{props.children}</Th>;
}

import { Td } from "@chakra-ui/react";

type TableCellProps = {
	children: React.ReactNode;
};

export function TableCell(props: TableCellProps) {
	return (
		<Td bg="#130F1E" textAlign="center">
			{props.children}
		</Td>
	);
}

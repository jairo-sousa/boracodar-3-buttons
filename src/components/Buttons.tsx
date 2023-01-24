import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
} from "@chakra-ui/react";

import { ButtonTable } from "../utils/ButtonTable";

export function Buttons() {
	return (
		<TableContainer as="main">
			<Table variant="unstyled" w="95.8rem" h="57.6rem">
				<Thead>
					<Tr>
						<Th></Th>
						{ButtonTable.ColsHead.map((th, i) => {
							return <Th key={`${th}-${i}`}>{th}</Th>;
						})}
					</Tr>
				</Thead>
				<Tbody>
					{ButtonTable.RowsHead.map((row, i) => {
						return (
							<Tr key={`${row}-${i}`}>
								<Td>{row}</Td>

								{ButtonTable.RowsBody.map((cell, i) => {
									return <Td key={`${cell}-${i}`}>{`${row} ${cell}`}</Td>;
								})}
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

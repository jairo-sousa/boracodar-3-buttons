import { Table, Tbody, Tr, Td, TableContainer, Text } from "@chakra-ui/react";

import { ButtonTable } from "../../utils/ButtonTable";
import { TableHead } from "./TableHead";

export function Buttons() {
	return (
		<TableContainer
			as="main"
			bg="#1C162C"
			borderRadius="0.8rem"
			padding="0 0.6rem 0.7rem 0"
		>
			<Table variant="unstyled" w="95.8rem" h="57.6rem">
				<TableHead />
				<Tbody>
					{ButtonTable.RowsHead.map((row, i) => {
						return (
							<Tr key={`${row}-${i}`}>
								<Td>
									<Text
										fontSize="1.1rem"
										fontFamily="roboto"
										fontWeight="400"
										textAlign="center"
									>
										{row}
									</Text>
								</Td>

								{ButtonTable.RowsBody.map((cell, i) => {
									return (
										<Td
											key={`${cell}-${i}`}
											bg="#130F1E"
										>{`${row} ${cell}`}</Td>
									);
								})}
								<Td bg="#130F1E">Icon</Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

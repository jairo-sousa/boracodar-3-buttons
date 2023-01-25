import {
	Table,
	Tbody,
	Tr,
	Td,
	TableContainer,
	Text,
	Button,
} from "@chakra-ui/react";

import { ButtonTable } from "../../utils/ButtonTable";
import { TableHead } from "./TableHead";
import { TableCell } from "./TableCell";

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
										<TableCell key={`${cell}-${i}`}>
											<Button
												fontSize="1.4rem"
												fontFamily="Inter"
												fontWeight="500"
												color="black"
											>{`${row} ${cell}`}</Button>
										</TableCell>
									);
								})}
								<TableCell>
									<Text>Icon</Text>
								</TableCell>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

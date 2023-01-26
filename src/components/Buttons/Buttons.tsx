import {
	Table,
	Tbody,
	Tr,
	Td,
	TableContainer,
	Text,
	Image,
	Flex,
} from "@chakra-ui/react";

import { ButtonTable } from "../../utils/ButtonTable";
import { TableHead } from "./TableHead";
import { TableCell } from "./TableCell";
import { TemplateButton } from "../TemplateButton";

import pointer from "../../assets/cursors/pointer.svg";
import loading from "../../assets/cursors/loading.svg";
import notAllowed from "../../assets/cursors/notAllowed.svg";
import cross from "../../assets/cursors/cross.svg";

const Cursors = [pointer, pointer, pointer, loading, notAllowed, cross];

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
					{ButtonTable.RowsHead.map((rowsHead, i) => {
						return (
							<Tr key={`${rowsHead.Head}-${i}`}>
								<Td>
									<Text
										fontSize="1.1rem"
										fontFamily="roboto"
										fontWeight="400"
										textAlign="center"
									>
										{rowsHead.Head.toString()}
									</Text>
								</Td>

								{ButtonTable.ButtonCells.map((cell, i) => {
									return (
										<TableCell key={`${cell}-${i}`}>
											<TemplateButton
												pattern={cell}
												head={rowsHead.Head}
												customStyle={rowsHead.Style}
											></TemplateButton>
										</TableCell>
									);
								})}
								<TableCell>
									<Flex justify="center">
										<Image src={Cursors[i]}></Image>
									</Flex>
								</TableCell>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

import { Thead, Tr, Text, Th } from "@chakra-ui/react";

import { ButtonTable } from "../../utils/ButtonTable";

export function TableHead() {
	return (
		<Thead>
			<Tr>
				<Th />
				{ButtonTable.ColsHead.map((th, i) => {
					return (
						<Th key={`${th}-${i}`} h="6.4rem">
							<Text
								fontSize="1.1rem"
								fontFamily="roboto"
								fontWeight="400"
								textAlign="center"
							>
								{th}
							</Text>
						</Th>
					);
				})}
			</Tr>
		</Thead>
	);
}

import { Thead, Tr, Text } from "@chakra-ui/react";

import { ButtonTable } from "../../utils/ButtonTable";

import { CollHead } from "./CollHead";

export function TableHead() {
	return (
		<Thead>
			<Tr>
				<CollHead />
				{ButtonTable.ColsHead.map((th, i) => {
					return (
						<CollHead key={`${th}-${i}`}>
							<Text
								fontSize="1.1rem"
								fontFamily="roboto"
								fontWeight="400"
								textAlign="center"
							>
								{th}
							</Text>
						</CollHead>
					);
				})}
			</Tr>
		</Thead>
	);
}

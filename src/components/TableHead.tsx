import { Th, Thead, Tr } from "@chakra-ui/react";

import { ButtonTable } from "../utils/ButtonTable";

export function TableHead() {
	return (
		<Thead>
			<Tr>
				<Th></Th>
				{ButtonTable.ColsHead.map((th, i) => {
					return <Th key={`${th}-${i}`}>{th}</Th>;
				})}
			</Tr>
		</Thead>
	);
}

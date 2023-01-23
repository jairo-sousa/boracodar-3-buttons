import { Header } from "./Header";

export function Info() {
	const headerText = {
		title: "Test the buttons",
		paragraph:
			"Interact with the buttons and watch the appearance and cursors change",
	};
	return (
		<div>
			<Header headerText={headerText} />
		</div>
	);
}

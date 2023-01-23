type HeaderProps = {
	headerText: {
		title: String;
		paragraph: string;
	};
};

export function Header(props: HeaderProps) {
	return (
		<header>
			<h1>{props.headerText.title}</h1>
			<p>{props.headerText.paragraph}</p>
		</header>
	);
}

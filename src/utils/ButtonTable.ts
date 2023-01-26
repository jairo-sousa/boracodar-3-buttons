type RowsHead = {
	Head: String;
	Style?: {
		bg?: String;
		opacity?: String;
		img?: String;
		border?: String;
	};
};

type ButtonTable = {
	ColsHead: String[];

	RowsHead: RowsHead[];
	ButtonCels: String[];
};

const colshead = [
	"PRIMARY BUTTON",
	"SECONDARY BUTTON",
	"TERTIARY BUTTON",
	"CURSOR",
];

const rowsHead = [
	{ Head: "DEFAULT", Style: {} },
	{
		Head: "HOVER",
		Style: {
			bg: "#9674E5",
			opacity: "",
			img: "",
			border: "",
		},
	},
	{
		Head: "FOCUS",
		Style: {
			bg: "",
			opacity: "",
			img: "",
			border: "2px solid #D9CDF7",
		},
	},
	{
		Head: "DISABLED",
		Style: {
			bg: "",
			opacity: "0.56",
			img: "",
			border: "",
		},
	},
	{
		Head: "LOADING",
		Style: {
			bg: "",
			opacity: "",
			img: "Spinner",
			border: "",
		},
	},
	{
		Head: "MOVABLE",
		Style: {
			bg: "",
			opacity: "",
			img: "",
			border: "",
		},
	},
];

const ButtonCels = ["PRIMARY", "SECONDARY", "TERTIARY"];

export const ButtonTable: ButtonTable = {
	ColsHead: colshead,
	RowsHead: rowsHead,
	ButtonCels: ButtonCels,
};

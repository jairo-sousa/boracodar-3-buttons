type RowsHead = {
	Head: String;
	Style: {
		opacity: String;
		img: String;
		border: String;
	};
};

type ButtonTable = {
	ColsHead: String[];

	RowsHead: RowsHead[];
	ButtonCells: String[];
};

const colshead = [
	"PRIMARY BUTTON",
	"SECONDARY BUTTON",
	"TERTIARY BUTTON",
	"CURSOR",
];

const rowsHead = [
	{
		Head: "DEFAULT",
		Style: {
			opacity: "none",
			img: "none",
			border: "none",
		},
	},
	{
		Head: "HOVER",
		Style: {
			opacity: "none",
			img: "none",
			border: "none",
		},
	},
	{
		Head: "FOCUS",
		Style: {
			opacity: "none",
			img: "none",
			border: "2px solid #FFFFFF",
		},
	},
	{
		Head: "DISABLED",
		Style: {
			opacity: "0.56",
			img: "none",
			border: "none",
		},
	},
	{
		Head: "LOADING",
		Style: {
			opacity: "none",
			img: "none",
			border: "none",
		},
	},
	{
		Head: "MOVABLE",
		Style: {
			opacity: "none",
			img: "none",
			border: "none",
		},
	},
];

const ButtonCells = ["PRIMARY", "SECONDARY", "TERTIARY"];

export const ButtonTable: ButtonTable = {
	ColsHead: colshead,
	RowsHead: rowsHead,
	ButtonCells: ButtonCells,
};

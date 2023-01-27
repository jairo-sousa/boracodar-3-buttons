type RowsHead = {
	Head: String;
	Style: {
		opacity: String;
		img: String;
		border: String;
		w: String;
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
			w: "",
		},
	},
	{
		Head: "HOVER",
		Style: {
			opacity: "none",
			img: "none",
			border: "none",
			w: "",
		},
	},
	{
		Head: "FOCUS",
		Style: {
			opacity: "none",
			img: "none",
			border: "2px solid #FFFFFF",
			w: "",
		},
	},
	{
		Head: "DISABLED",
		Style: {
			opacity: "0.56",
			img: "none",
			border: "none",
			w: "",
		},
	},
	{
		Head: "LOADING",
		Style: {
			opacity: "none",
			img: "Spinner",
			border: "none",
			w: "",
		},
	},
	{
		Head: "MOVABLE",
		Style: {
			opacity: "none",
			img: "movableIcon",
			border: "none",
			w: "",
		},
	},
];

const ButtonCells = ["PRIMARY", "SECONDARY", "TERTIARY"];

export const ButtonTable: ButtonTable = {
	ColsHead: colshead,
	RowsHead: rowsHead,
	ButtonCells: ButtonCells,
};

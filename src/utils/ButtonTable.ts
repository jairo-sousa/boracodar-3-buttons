type RowsHead = {
	Head: String;
	Style: {
		defaultBg: Boolean;
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
			defaultBg: true,
			opacity: "none",
			img: "none",
			border: "none",
			w: "",
		},
	},
	{
		Head: "HOVER",
		Style: {
			defaultBg: false,
			opacity: "none",
			img: "none",
			border: "none",
			w: "",
		},
	},
	{
		Head: "FOCUS",
		Style: {
			defaultBg: true,
			opacity: "none",
			img: "none",
			border: "2px solid #FFFFFF",
			w: "",
		},
	},
	{
		Head: "DISABLED",
		Style: {
			defaultBg: true,
			opacity: "0.56",
			img: "none",
			border: "none",
			w: "",
		},
	},
	{
		Head: "LOADING",
		Style: {
			defaultBg: true,
			opacity: "none",
			img: "Spinner",
			border: "none",
			w: "",
		},
	},
	{
		Head: "MOVABLE",
		Style: {
			defaultBg: true,
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

const sampleStyles = rowsHead.map((rowHead) => {
	return rowHead.Style;
});

type ButtonTable = {
	ColsHead: String[];

	RowsHead: String[];
	ButtonCels: String[];
};

const colshead = [
	"PRIMARY BUTTON",
	"SECONDARY BUTTON",
	"TERTIARY BUTTON",
	"CURSOR",
];

const rowsHead = [
	"DEFAULT",
	"HOVER",
	"FOCUS",
	"DISABLED",
	"LOADING",
	"MOVABLE",
];

const ButtonCels = ["PRIMARY", "SECONDARY", "TERTIARY"];

export const ButtonTable: ButtonTable = {
	ColsHead: colshead,
	RowsHead: rowsHead,
	ButtonCels: ButtonCels,
};

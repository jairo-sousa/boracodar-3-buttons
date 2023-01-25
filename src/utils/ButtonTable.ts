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

const rows = ["PRIMARY", "SECONDARY", "TERTIARY"];

export const ButtonTable: ButtonTable = {
	ColsHead: colshead,
	RowsHead: rowsHead,
	ButtonCels: rows,
};

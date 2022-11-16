export type Action = {
	text: string;
	action: Function;
	method?: string;
	variant?: string;
	// variant?: "contained" | "outlined" | "ghost";
};

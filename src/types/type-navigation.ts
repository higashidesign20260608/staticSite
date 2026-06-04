export interface ItfNavigation {
	name: string,
	label: string,
	path: string,
	sub: ItfNavigation[] | null
};

export interface ItfNavigationLabelPath {
	label: string,
	path: string,
}

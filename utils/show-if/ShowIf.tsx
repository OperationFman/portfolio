type PropsType = {
	condition:
		| (() => boolean | null | undefined | number)
		| boolean
		| number
		| string
		| undefined;
};

const ShowIf: React.FC<PropsType> = ({ children, condition }) => {
	return (typeof condition === "function" ? condition() : condition) ? (
		<>{children}</>
	) : null;
};

export default ShowIf;

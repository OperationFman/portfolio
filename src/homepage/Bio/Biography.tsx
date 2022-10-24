export const Biography = ({ selectedTheme }: { selectedTheme: string }) => {
	return (
		<div
			style={{
				backgroundColor: selectedTheme === "dark" ? "#13181c" : "#FFFFFF",
				border: `2px solid ${selectedTheme === "dark" ? "#13181c" : "#FFFFFF"}`, // Why TF do I get a gap without this?
			}}>
			<h1>Biography Section</h1>
			<div style={{ height: "100vh" }} />
		</div>
	);
};

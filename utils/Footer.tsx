import { Button } from "@mui/material";

export const Footer = () => {
	const toPageTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<footer
			style={{
				marginTop: "200px",
				height: "40px",
				backgroundColor: "#212121",
				display: "flex",
				justifyContent: "center",
			}}>
			<Button
				onClick={() => toPageTop()}
				variant='text'
				style={{ width: "100vw", color: "#949494" }}>
				Back to top
			</Button>
		</footer>
	);
};

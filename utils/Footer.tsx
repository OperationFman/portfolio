import { Button } from "@mui/material";

export const Footer = ({ margin = true }: { margin?: boolean }) => {
	const toPageTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer
			style={{
				marginTop: margin ? "200px" : "",
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

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import {
	ClickAwayListener,
	Grow,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	Stack,
} from "@mui/material";
import Button from "@mui/material/Button";
import React, { Dispatch, SetStateAction } from "react";
import {
	closeMenu,
	keyboardNavigation,
} from "../../guides/components/filter/filterAnimations";
import { SortBy } from "../types";

export const TravelSort = ({
	setSortMetaDataBy,
}: {
	setSortMetaDataBy: Dispatch<SetStateAction<SortBy>>;
}) => {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event | React.SyntheticEvent) => {
		closeMenu(event, setOpen, anchorRef);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		keyboardNavigation(event, setOpen);
	}

	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current!.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<Stack direction='row' spacing={2}>
			<div>
				<Button
					ref={anchorRef}
					aria-controls={open ? "composition-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-haspopup='true'
					onClick={handleToggle}
					endIcon={<FilterListIcon />}
					color='brightGrey'>
					Sort
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					placement='bottom-start'
					transition>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === "bottom-start" ? "right bottom" : "right top",
							}}>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
										{Object.values(SortBy).map((value) => (
											<MenuItem
												onClick={() => {
													setSortMetaDataBy(value);
												}}
												key={value}>
												<ArrowUpwardIcon />ㅤ{value}
											</MenuItem>
										))}
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</Stack>
	);
};

export const closeMenu = (
  event: Event | React.SyntheticEvent,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  anchorRef: React.RefObject<HTMLButtonElement>
): void => {
  if (
    anchorRef.current &&
    anchorRef.current.contains(event.target as HTMLElement)
  ) {
    return;
  }

  setOpen(false);
};

export const keyboardNavigation = (
  event: React.KeyboardEvent,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (event.key === "Tab") {
    event.preventDefault();
    setOpen(false);
  } else if (event.key === "Escape") {
    setOpen(false);
  }
};

import { Avatar, IconButton, Menu as MenuMUI, Tooltip } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import NavigationButtons from "./NavigationButtons";

const Menu = () => {

    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const open = Boolean(anchorElement);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };
    const handleClose = () => setAnchorElement(null);
    const handleMenuItemClick = (route: string) => {
        navigate(route);
        handleClose();
    }

    return (
        <>
            <IconButton
                onClick={handleClick}
                size="medium"
                sx={{ ml: 2 }}
                aria-label='Main Menu Button'
            >
                <Avatar sx={{ width: 45, height: 45 }} variant="rounded">M</Avatar>
            </IconButton>
            <MenuMUI
                open={open}
                onClick={handleClose}
                onClose={handleClose}
                anchorEl={anchorElement}
            >
                <NavigationButtons clickFunction={handleMenuItemClick} />
            </MenuMUI>
        </>
    )
};

export default Menu;
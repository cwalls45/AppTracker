import { Avatar, IconButton, Menu as MenuMUI, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NavigationButtons from "./NavigationButtons";
import { State } from "../../redux";
import { useSelector } from "react-redux";

const Menu = () => {

    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const [abbreviation, setAbbreviation] = useState<string | null>(null);
    const state = useSelector((state: State) => state);
    const navigate = useNavigate();
    const open = Boolean(anchorElement);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };
    const handleClose = () => setAnchorElement(null);
    const handleMenuItemClick = (route: string) => {
        navigate(route);
        handleClose();
    };

    const nameAbbreviation = () => {
        if (!state.account.user.firstName || !state.account.user.lastName) {
            return null;
        }
        console.log('abbreviation: ', `${state.account.user.firstName[0].toUpperCase()} ${state.account.user.lastName[0].toUpperCase()}`)
        return `${state.account.user.firstName[0].toUpperCase()}${state.account.user.lastName[0].toUpperCase()}`
    };

    useEffect(() => {
        const initails = nameAbbreviation();
        setAbbreviation(initails);
    }, [state.account.user])

    return (
        <>
            <IconButton
                onClick={handleClick}
                size="medium"
                aria-label='Main Menu Button'
            >
                <Avatar variant="rounded">{abbreviation}</Avatar>
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
import { Avatar, IconButton, Menu as MenuMUI } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NavigationButtons from "./NavigationButtons";
import { State } from "../../redux";
import { useSelector } from "react-redux";
import { Paths, actionRoutes } from "../../entities/paths";

const Menu = () => {

    const routes = [
        { path: Paths.CALENDAR, text: 'Calendar', clickFunction: handleNavigateMenuItemClick },
        { path: Paths.CREATE_APPLICATION, text: 'Create Application', clickFunction: handleNavigateMenuItemClick },
        { path: Paths.INVENTORY, text: 'Inventory', clickFunction: handleNavigateMenuItemClick },
        { path: Paths.REPORTS, text: 'Reports', clickFunction: handleNavigateMenuItemClick },
        { path: Paths.SIGNOUT, text: 'Log out', clickFunction: handleActionMenuItemClick }
    ];

    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const [abbreviation, setAbbreviation] = useState<string | null>(null);
    const state = useSelector((state: State) => state);
    const navigate = useNavigate();
    const open = Boolean(anchorElement);

    function handleClick(event: React.MouseEvent<HTMLElement>) {
        setAnchorElement(event.currentTarget);
    };

    function handleClose() {
        setAnchorElement(null);
    };

    function handleActionMenuItemClick(route: Paths) {
        console.log('action route: ', route);
    };

    function handleNavigateMenuItemClick(route: Paths) {
        navigate(route);
        handleClose();
    };

    function nameAbbreviation() {
        if (!state.account.user.firstName || !state.account.user.lastName) {
            return null;
        }
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
                <NavigationButtons routes={routes} />
            </MenuMUI>
        </>
    )
};

export default Menu;
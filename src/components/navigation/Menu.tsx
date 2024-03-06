import { Avatar, IconButton, Menu as MenuMUI } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NavigationButtons from "./NavigationButtons";
import { State } from "../../redux";
import { useSelector } from "react-redux";
import { Paths } from "../../entities/paths";
import { removeCookiesAndSessionStorage, signOut } from "../../utils/authenticateUser";
import { useCookies } from "react-cookie";
import { CookieKeys, SessionStorageKeys } from "../../entities/auth";

const Menu = () => {

    const routes = [
        { path: Paths.CALENDAR, text: 'Calendar', clickFunction: handleNavigateMenuItemClick },
        { path: Paths.CREATE_APPLICATION, text: 'Create Application', clickFunction: handleNavigateMenuItemClick },
        { path: Paths.INVENTORY, text: 'Inventory', clickFunction: handleNavigateMenuItemClick },
        { path: Paths.REPORTS, text: 'Reports', clickFunction: handleNavigateMenuItemClick },
        { path: Paths.SIGNOUT, text: 'Log out', clickFunction: handleSignOutMenuItemClick },
        { path: Paths.SUBSCRIBE, text: 'Subscription', clickFunction: handleNavigateMenuItemClick }
    ];

    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const [abbreviation, setAbbreviation] = useState<string | null>(null);
    const account = useSelector((state: State) => state.account);
    const navigate = useNavigate();
    const open = Boolean(anchorElement);

    const [cookies, setCookies, removeCookie] = useCookies();

    function handleClick(event: React.MouseEvent<HTMLElement>) {
        setAnchorElement(event.currentTarget);
    };

    function handleClose() {
        setAnchorElement(null);
    };

    async function handleSignOutMenuItemClick() {
        const isSignedOut = await signOut(cookies.TurfTrackerAccessToken);

        if (isSignedOut) {
            removeCookiesAndSessionStorage([CookieKeys.ACCESS_TOKEN, CookieKeys.REFRESH_TOKEN], [SessionStorageKeys.ACCOUNTID], removeCookie);
            navigate(Paths.LOGIN);
        }
    };

    function handleNavigateMenuItemClick(route: Paths) {
        navigate(route);
        handleClose();
    };

    function nameAbbreviation() {
        if (!account.user.firstName || !account.user.lastName) {
            return null;
        }
        return `${account.user.firstName[0].toUpperCase()}${account.user.lastName[0].toUpperCase()}`
    };

    useEffect(() => {
        const initails = nameAbbreviation();
        setAbbreviation(initails);
    }, [account.user])

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
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
            <Tooltip title="Main Menu">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'Main Menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 45, height: 45 }}>M</Avatar>
                </IconButton>
            </Tooltip>
            <MenuMUI
                open={open}
                onClick={handleClose}
                onClose={handleClose}
                anchorEl={anchorElement}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 45,
                            height: 45,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <NavigationButtons clickFunction={handleMenuItemClick} />
            </MenuMUI>
        </>
    )
};

export default Menu;
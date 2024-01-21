import { Paths } from '../../entities/paths';
import { MenuItem } from '@mui/material';

interface IProps {
    clickFunction: (...args: any) => void;
}

const NavigationButtons = ({ clickFunction }: IProps) => {

    const routes = [
        { path: Paths.CALENDAR, text: 'Calendar' },
        { path: Paths.CREATE_APPLICATION, text: 'Create Application' },
        { path: Paths.INVENTORY, text: 'Inventory' },
        { path: Paths.REPORTS, text: 'Reports' },
        { path: Paths.SIGNOUT, text: 'Log out' }
    ];

    return (
        <>
            {
                routes.map(route => (
                    <MenuItem onClick={() => clickFunction(route.path)} key={route.path} aria-label={`${route.text} Menu Tab`}>
                        {route.text}
                    </MenuItem>
                ))
            }
        </>
    );
}

export default NavigationButtons;
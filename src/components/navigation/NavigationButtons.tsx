import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import { Paths } from '../../entities/paths';

const NavigationButtons = () => {

    const routes = [
        { path: Paths.CALENDAR, text: 'Calendar' },
        { path: Paths.CREATE_APPLICATION, text: 'Create Application' },
        { path: Paths.INVENTORY, text: 'Inventory' }
    ];

    return (
        <>
            {
                routes.map(route => (
                    <Button component={Link} to={route.path} variant='outlined' color='inherit' key={route.path}>
                        {route.text}
                    </Button>
                ))
            }
        </>
    );
}

export default NavigationButtons;
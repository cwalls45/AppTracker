import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";

interface IProps {
    isLoggedIn: boolean;
}

const NavigationButtons = ({ isLoggedIn }: IProps) => {

    const routes = [
        { path: '/calendar', text: 'Calendar' },
        { path: '/createApplication', text: 'Create Application' }
    ];

    return (
        <>
            {
                isLoggedIn ? routes.map(route => (
                    <Button component={Link} to={route.path} variant='outlined' color='inherit' key={route.path}>
                        {route.text}
                    </Button>
                )) :
                    <Button component={Link} to='/login' color="inherit">
                        Login
                    </Button>
            }
        </>
    );
}

export default NavigationButtons;
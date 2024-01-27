import { Paths } from '../../entities/paths';
import { MenuItem } from '@mui/material';

interface IProps {
    path: Paths;
    text: string;
    clickFunction: (...args: any) => void;
}


const NavigationButtons = ({ routes }: { routes: IProps[] }) => {

    return (
        <>
            {
                routes.map(route => (
                    <MenuItem onClick={() => route.clickFunction(route.path)} key={route.path} aria-label={`${route.text} Menu Tab`}>
                        {route.text}
                    </MenuItem>
                ))
            }
        </>
    );
}

export default NavigationButtons;
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from './Menu';

const NavigationBar = () => {

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fefefe' }}>
                    LOGO
                </Typography>
                <Menu />
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;
import Grid from '@mui/material/Grid';
import { useCookies } from 'react-cookie';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

// 3vh is height of AppBar and 10px is margin of AppBar set in theme.ts

interface IProps {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isLoggedIn, setIsLoggedIn }: IProps) => {

    const [cookies] = useCookies();

    return (
        <Grid container sx={{
            height: '100vh',
            width: 'auto'
        }}>
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
            {(!cookies.TurfTrackerAccessToken || !cookies.TurfTrackerRefreshToken) && < SignUp />}
        </Grid >
    );
}

export default Login;
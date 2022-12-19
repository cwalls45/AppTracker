import Grid from '@mui/material/Grid';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

// 3vh is height of AppBar and 10px is margin of AppBar set in theme.ts

const Login = () => {
    return (
        <Grid container sx={{
            height: `calc(91.5vh - (3vh - 10px))`,
            width: 'auto'
        }}>
            < LoginForm />
            <SignUp />
        </Grid >
    );
}

export default Login;
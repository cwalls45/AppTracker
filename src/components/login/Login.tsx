import Grid from '@mui/material/Grid';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

const Login = () => {
    return (
        <Grid container>
            <LoginForm />
            <SignUp />
        </Grid>
    );
}

export default Login;
import { useState } from "react";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import FormTextField from "../inventory/FormTextField";
import Button from "@mui/material/Button";
import { Paths } from "../../entities/paths";
import { useNavigate } from "react-router-dom";

interface IProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({ setIsLoggedIn }: IProps) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('username: ', username);
        console.log('password: ', password);
        const isAuthenticated = authenticateUser();
        if (isAuthenticated) {
            setIsLoggedIn(true);
            navigateToCalendar();
            resetPassword();
        }
    };

    const authenticateUser = () => {
        //TODO: will eventually authenticate with AWS congnito
        return true;
    };

    const navigateToCalendar = () => navigate(Paths.CALENDAR);

    const resetPassword = () => {
        setUsername('');
        setPassword('');
    }

    return (
        <Grid container item md={8} justifyContent='center' alignItems='center'>
            <Grid container item justifyContent='center'>
                <Typography variant="h4" component="div">
                    Login to your account
                </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                <Grid item xs={6.5}>
                    <FormTextField
                        label='Username'
                        value={username}
                        setterFunction={setUsername}
                    />
                </Grid>
                <Grid item xs={6.5}>
                    <FormTextField
                        label='Password'
                        value={password}
                        setterFunction={setPassword}
                        type='password'
                    />
                </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <Grid item>
                    <Button variant='contained' onClick={handleSubmit} sx={{
                        flexGrow: 1,
                        width: '15em'
                    }}
                    >
                        Sign In
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default LoginForm;
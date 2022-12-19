import { useState } from "react";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import FormTextField from "../inventory/FormTextField";
import Button from "@mui/material/Button";

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('username: ', username);
        console.log('password: ', password);
        resetPassword();
    };

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
                <Grid item xs={8}>
                    <FormTextField
                        label='Username'
                        value={username}
                        setterFunction={setUsername}
                    />
                </Grid>
                <Grid item xs={8}>
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
                    <Button variant='contained' onClick={handleSubmit}>
                        Sign In
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default LoginForm;
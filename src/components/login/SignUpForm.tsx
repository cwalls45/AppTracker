import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import FormTextField from "../inventory/FormTextField";

const SignUpForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <Grid container sx={{
            height: '100vh',
            width: 'auto'
        }}>
            <Grid container item justifyContent='center'>
                <Typography variant="h4" component="div">
                    Create Username and Password
                </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                <Grid item xs={6.5}>
                    <FormTextField
                        label='Email'
                        value={email}
                        setterFunction={setEmail}
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
                <Grid item xs={6.5}>
                    <FormTextField
                        label='Confirm Password'
                        value={confirmPassword}
                        setterFunction={setConfirmPassword}
                        type='password'
                    />
                </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                {/* <Grid item>
                    <Button variant='contained' onClick={handleSubmit} sx={{
                        flexGrow: 1,
                        width: '15em'
                    }}
                    >
                        Sign In
                    </Button>
                </Grid> */}
            </Grid>
        </Grid >
    );
}

export default SignUpForm;
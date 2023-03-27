import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Paths } from "../../entities/paths";
import { accountActionCreators } from "../../redux";
import FormTextField from "../inventory/FormTextField";

const SignUpForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const { signUpUser } = bindActionCreators(accountActionCreators, dispatch);

    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        const isValidFirstName = validateName(firstName);
        const isValidLastName = validateName(lastName)
        const isEmailValid = validateEmail();
        const { passwordValidations, passwordIsValidated } = validatePasswords();

        // if (!isEmailValid || !passwordIsValidated || !isValidFirstName || !isValidLastName) {
        //     console.log('email or password is invalid: ', passwordValidations);
        //     return;
        // };

        signUpUser(firstName, lastName, email, password, navigateToCourseInformation);
    }

    const navigateToCourseInformation = () => navigate(Paths.COURSE_INFO);

    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const isValidEmail = emailRegex.test(email);

        return isValidEmail;
    }

    const validatePasswords = () => {
        const matchPasswords = password === confirmPassword;
        const containsUpperCase = /[A-Z]/.test(password);
        const containsLowerCase = /[a-z]/.test(password);
        const containsNumber = /[0-9]/.test(password);
        const meetsMinimumLength = password.length >= 8;

        const validations = [matchPasswords, containsUpperCase, containsLowerCase, containsNumber, meetsMinimumLength];
        const isValidated = validations.every((isTrue) => isTrue);

        return {
            passwordValidations: validations,
            passwordIsValidated: isValidated
        }
    }

    const validateName = (name: string) => {
        return /[a-zA-Z]/.test(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container justifyContent='center' alignItems='center' sx={{ height: '100vh', width: 'auto' }}>
                <Grid container justifyContent='center'>
                    <Typography variant="h4" component="div">
                        Create Username and Password
                    </Typography>
                </Grid>
                <Grid container justifyContent='center'>
                    <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                        <FormTextField
                            label='First Name'
                            value={firstName}
                            setterFunction={setFirstName}
                            xs={4}
                        />
                        <FormTextField
                            label='Last Name'
                            value={lastName}
                            setterFunction={setLastName}
                            xs={4}
                        />
                        <FormTextField
                            label='Email'
                            value={email}
                            setterFunction={setEmail}
                            xs={4}
                        />
                        <FormTextField
                            label='Password'
                            value={password}
                            setterFunction={setPassword}
                            type='password'
                            xs={4}
                        />
                        <FormTextField
                            label='Confirm Password'
                            value={confirmPassword}
                            setterFunction={setConfirmPassword}
                            type='password'
                            xs={4}
                        />
                    </Grid>
                    <Grid container item xs={12} justifyContent='center'>
                        <Grid item>
                            <Button type='submit' variant='contained' sx={{ flexGrow: 1, width: '15em' }}>
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </form>
    );
}

export default SignUpForm;
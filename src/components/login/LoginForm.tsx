import { useState } from "react";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import FormTextField from "../inventory/FormTextField";
import Button from "@mui/material/Button";
import { Paths } from "../../entities/paths";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/authenticateUser";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { accountActionCreators, environmentActionCreators } from "../../redux";
import { CookieKeys, SessionStorageKeys } from "../../entities/auth";

interface IProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({ setIsLoggedIn }: IProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const { setUser, setAccountId, setCourseInfo, setCourseAreas } = bindActionCreators(accountActionCreators, dispatch);
    const { setIsLoading } = bindActionCreators(environmentActionCreators, dispatch);

    const navigate = useNavigate();

    const [cookies, setCookies] = useCookies();

    const handleEnterKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            return;
        };

        setIsLoading(true);
        const isAuthenticated = await authenticateUser(email, password);
        setIsLoggedIn(isAuthenticated);

        if (isAuthenticated) {
            navigateToCalendar();
        }

        resetPassword();
        setIsLoading(false);
    };

    const authenticateUser = async (email: string, password: string) => {
        const isLoggedIn = await loginUser(email, password);
        if (!isLoggedIn) {
            return false
        }

        setUser(isLoggedIn.account.user);
        setAccountId(isLoggedIn.account.accountId);
        setCourseInfo(isLoggedIn.account.courseInfo);
        setCourseAreas(isLoggedIn.account.courseAreas);

        // TODO: Dont forget to remove cookies and make cookie name more specific, remove sessionStorage
        const { AccessToken, ExpiresIn, RefreshToken } = isLoggedIn.credentials;
        setCookies(CookieKeys.ACCESS_TOKEN, AccessToken, { maxAge: ExpiresIn });
        setCookies(CookieKeys.REFRESH_TOKEN, RefreshToken, { maxAge: ExpiresIn });
        sessionStorage.setItem(SessionStorageKeys.ACCOUNTID, isLoggedIn.account.accountId);

        return true;
    };

    const navigateToCalendar = () => navigate(Paths.CALENDAR);

    const resetPassword = () => {
        setEmail('');
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
                <FormTextField
                    label='Email'
                    value={email}
                    setterFunction={setEmail}
                    xs={6.5}
                    handleKeyDown={handleEnterKeyDown}
                />
                <FormTextField
                    label='Password'
                    value={password}
                    setterFunction={setPassword}
                    type='password'
                    xs={6.5}
                    handleKeyDown={handleEnterKeyDown}
                />
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <Grid item>
                    <Button
                        variant='contained'
                        onClick={handleSubmit}
                        sx={{ flexGrow: 1, width: '15em' }}
                    >
                        Sign In
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default LoginForm;
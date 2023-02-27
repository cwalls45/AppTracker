import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { Paths } from "../../entities/paths";
import { theme } from "../../theme";

const SignUp = () => {

    const navigate = useNavigate();

    const navigateToSignUpForm = () => navigate(Paths.SIGNUP);

    return (
        <Grid container item md={4} justifyContent="space-around" alignItems='center' sx={{ backgroundColor: theme.palette.primary.main }}>
            <Grid container justifyContent='center'>
                <Typography variant="h3" color="secondary" component="div">
                    New to TurfTracker?
                </Typography>
            </Grid>
            <Grid container justifyContent='center'>
                <Grid container justifyContent='center'>
                    <Typography variant="h5" color="secondary" component="div">
                        New to TurfTracker?
                    </Typography>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <Grid item>
                        <Button variant='secondary' onClick={navigateToSignUpForm}>
                            <Typography component="div">
                                Sign Up
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default SignUp;
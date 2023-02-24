import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"
import { darken } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { theme } from "../../theme";

const SignUp = () => {
    return (
        <Grid container item md={4} justifyContent="space-around" alignItems='center' sx={{ backgroundColor: theme.palette.primary.main }}>
            <Grid container justifyContent='center'>
                <Typography variant="h3" align='center' component="div">
                    New to TurfTracker?
                </Typography>
            </Grid>
            <Grid container justifyContent='center'>
                <Typography variant="h5" align='center' component="div">
                    New to TurfTracker?
                </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <Grid item>
                    <Button variant='outlined' sx={{
                        flexGrow: 1,
                        width: '15em',
                        backgroundColor: theme.palette.secondary.main,
                        '&:hover': {
                            backgroundColor: darken(theme.palette.secondary.main, 0.1),
                        },
                    }}>
                        <Typography align='center' component="div" sx={{ color: theme.palette.primary.main }}>
                            Sign Up
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default SignUp;
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Paths } from "../../entities/paths";
import { useNavigate } from "react-router-dom";

const SubScriptionSuccess = () => {
    const navigate = useNavigate();

    const handleNavigateToCalendar = () => {
        navigate(Paths.CALENDAR);
    };

    return (
        <Grid container justifyContent='center' alignContent='space-evenly' sx={{ height: '100vh', width: 'auto' }}>
            <Grid container item md={8} justifyContent='center' alignItems='center'>
                <Grid container item justifyContent='center'>
                    <Typography variant="h3" component="div">
                        Welcome to Turf Tracker!
                    </Typography>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <Grid item>
                        <Button
                            variant='contained'
                            onClick={handleNavigateToCalendar}
                            sx={{ flexGrow: 1, width: '15em' }}
                        >
                            Go to Calendar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SubScriptionSuccess
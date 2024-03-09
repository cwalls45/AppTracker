import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Paths } from "../../entities/paths";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux";
import { apiPost } from "../../utils/apiRequests";
import { bindActionCreators } from "redux";
import { useInitializeApp } from "../../hooks/useInitializeApp";

const SubScriptionSuccess = () => {
    const account = useSelector((state: State) => state.account);

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigateToCalendar = () => {
        navigate(Paths.CALENDAR);
    };

    const createCheckoutSession = async (): Promise<void> => {
        const accountId = account.accountId;
        const email = account.user.email;

        if (!accountId || !email) {
            return;
        };

        const currentUrl = location.pathname;
        const splitUrl = currentUrl.split("successful/");
        const sessionId = splitUrl[1];

        await apiPost(`subscribe/successful-subscription`, { sessionId, accountId, email });
    };

    useInitializeApp();

    useEffect(() => {
        createCheckoutSession();
    }, [account.accountId, account.user.email]);

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
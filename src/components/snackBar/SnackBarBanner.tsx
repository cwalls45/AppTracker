import Snackbar from "@mui/material/Snackbar"
import { State, environmentActionCreators } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import SnackBarAlert from "./SnackBarAlert";

const SnackBarBanner = () => {
    const dispatch = useDispatch();
    const environment = useSelector((state: State) => state.environment);
    const { setError } = bindActionCreators(environmentActionCreators, dispatch);

    const handleSnackBarClose = (event: React.SyntheticEvent) => {
        setError(false, '');
    }

    return (
        <Snackbar
            open={environment.isError.isError}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            autoHideDuration={10000}
            onClose={handleSnackBarClose}
        >
            <div>
                <SnackBarAlert
                    message={environment.isError.message}
                    onCloseFunc={handleSnackBarClose}
                    severity='error'
                />
            </div>
        </Snackbar>
    )
};
export default SnackBarBanner;
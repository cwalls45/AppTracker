import Snackbar from "@mui/material/Snackbar"
import { State, environmentActionCreators } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Alert from "@mui/material/Alert";
import SnackBarAlert from "./SnackBarAlert";

interface IProps {
    message: string
}

const SnackBarBanner = ({ message }: IProps) => {
    const dispatch = useDispatch();
    const state = useSelector((state: State) => state);
    const { setError } = bindActionCreators(environmentActionCreators, dispatch);
    const handleSnackBarClose = (event: React.SyntheticEvent) => {
        setError(false);
    }
    return (
        <Snackbar
            open={state.environment.isError}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={10000}
            onClose={handleSnackBarClose}
            action={
                <SnackBarAlert
                    message={message}
                    onCloseFunc={handleSnackBarClose}
                    severity='error'
                />
            }
        />
    )
};

export default SnackBarBanner;
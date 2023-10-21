import Alert, { AlertColor } from '@mui/material/Alert';

interface IProps {
    message: string;
    onCloseFunc: (event: React.SyntheticEvent) => void;
    severity: AlertColor
}

const SnackBarAlert = ({ message, onCloseFunc, severity }: IProps) => {
    return (
        <Alert
            onClose={onCloseFunc}
            severity={severity}
            sx={{ width: '100%' }}
        >
            {message}
        </Alert>
    )
}

export default SnackBarAlert;
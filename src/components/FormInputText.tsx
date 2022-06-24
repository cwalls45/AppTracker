import TextField from '@mui/material/TextField';

interface IProps {
    label: string;
}

const FormInputText = ({ label }: IProps) => {

    return (
        <TextField
            label={label}
            variant='outlined'
            value={1}
            onChange={() => null}
            error={false}
            helperText={''}
        />
    );
};

export default FormInputText;
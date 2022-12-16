import TextField from "@mui/material/TextField";

interface IProps {
    label: string;
    setterFunction: React.Dispatch<React.SetStateAction<string>>;
};

const FormTextField = ({ label, setterFunction }: IProps) => {

    const handleChange = (event) => setterFunction(event.target.value)

    return (
        <TextField
            label={label}
            variant='outlined'
            onChange={(event) => handleChange(event)}
            error={false}
            helperText={''}
        />
    )
};

export default FormTextField;
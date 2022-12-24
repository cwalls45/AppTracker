import TextField from "@mui/material/TextField";

interface IProps {
    label: string;
    value: string;
    setterFunction: React.Dispatch<React.SetStateAction<string>>;
    required?: boolean;
    type?: string
};

const FormTextField = ({ label, value, setterFunction, required = true, type }: IProps) => {

    const handleChange = (event) => setterFunction(event.target.value)

    return (
        <TextField
            fullWidth
            required={required}
            label={label}
            type={type}
            variant='outlined'
            value={value}
            onChange={(event) => handleChange(event)}
            error={false}
            helperText={''}
        />
    )
};

export default FormTextField;
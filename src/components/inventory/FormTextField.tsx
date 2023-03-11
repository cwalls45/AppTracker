import { TextField, Grid } from "@mui/material";

interface IProps {
    label: string;
    value: string;
    setterFunction: React.Dispatch<React.SetStateAction<string>>;
    xs: number;
    required?: boolean;
    type?: string
};

const FormTextField = ({ label, value, setterFunction, xs, required = true, type }: IProps) => {

    const handleChange = (event) => setterFunction(event.target.value)

    return (
        <Grid item xs={xs}>
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
        </Grid>
    )
};

export default FormTextField;
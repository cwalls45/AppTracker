import { TextField, Grid } from "@mui/material";

interface IProps {
    label: string;
    value: string;
    setterFunction: React.Dispatch<React.SetStateAction<string>>;
    xs: number;
    handleKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    required?: boolean;
    type?: string
};

const FormTextField = ({ label, value, setterFunction, xs, handleKeyDown, required = true, type }: IProps) => {

    const handleChange = (event) => setterFunction(event.target.value)

    return (
        <Grid container item xs={12} justifyContent='center'>
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
                    onKeyDown={handleKeyDown}
                />
            </Grid>
        </Grid>
    )
};

export default FormTextField;
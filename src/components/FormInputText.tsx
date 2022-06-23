import TextField from '@mui/material/TextField';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface IProps {
    label: string;
    control: Control<FieldValues, any>;
    index: number;
}

const FormInputText = ({ label, control, index }: IProps) => {

    return (
        <Controller
            name={`TEST.${index}.${label}`}
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field, fieldState }) => (
                <TextField
                    sx={{ minWidth: '5vw' }}
                    label={label}
                    variant='outlined'
                    // value={field.value}
                    onChange={field.onChange}
                    error={!!fieldState.error}
                    helperText={fieldState.error ? fieldState.error.message : null}
                />
            )}
        />
    );
};

export default FormInputText;
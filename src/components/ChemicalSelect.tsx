import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Control, Controller, FieldValues } from 'react-hook-form';


interface IProps {
    options: string[];
    label: string;
    control: Control<FieldValues, any>;
    index: number;
};

const ChemicalSelect = ({ options, label, control, index }: IProps) => {

    return (

        <Controller
            name={`TEST.${index}.${label}`}
            control={control}
            render={({ field: { value, onChange }, fieldState }) => (
                <Autocomplete
                    options={options}
                    onChange={(_, item) => onChange(item)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            value={value}
                            label={label}
                            variant='outlined'
                            error={!!fieldState.error}
                            helperText={fieldState.error ? fieldState.error.message : null}
                        />
                    )}
                />
            )}
        />
    );
};

export default ChemicalSelect;
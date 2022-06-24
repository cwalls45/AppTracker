import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface IProps {
    options: string[];
    label: string;
};

const ChemicalSelect = ({ options, label }: IProps) => {

    return (
        <Autocomplete
            options={options}
            onChange={() => null}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    variant='outlined'
                    value={''}
                    error={false}
                    helperText={''}
                />
            )}
        />
    )
}

export default ChemicalSelect;
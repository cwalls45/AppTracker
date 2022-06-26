import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ChemicalList } from '../types/ApplicationFormDefaultValues';

interface IProps {
    options: string[];
    label: string;
    chemicalList?: ChemicalList,
    setChemicalList?: React.Dispatch<React.SetStateAction<ChemicalList>>
};

const ChemicalSelect = ({ options, label, chemicalList, setChemicalList }: IProps) => {

    const handleOnChange = (chemicalList, setChemicalList) => {

    }

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
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { ChemicalList } from '../types/ApplicationFormDefaultValues';

interface IProps {
    options: string[];
    index: number;
    property: string;
    label: string;
    chemicalList: ChemicalList,
    setChemicalList: React.Dispatch<React.SetStateAction<ChemicalList>>
};

const ChemicalSelect = ({ options, index, property, label, chemicalList, setChemicalList }: IProps) => {

    const [autoCompleteValue, setAutoCompleteValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleAutoCompleteChange = (event, newAutoCompleteValue: string) => {
        setAutoCompleteValue(newAutoCompleteValue);
        const objectToUpdate = { ...chemicalList[index], [property]: newAutoCompleteValue };
        const reconstructedChemicalList = [...chemicalList]
        reconstructedChemicalList[index] = objectToUpdate
        setChemicalList(reconstructedChemicalList);
    }

    const handleInputChange = (event, newInputValue: string) => {
        setInputValue(newInputValue);
    }

    return (
        <Autocomplete
            options={options}
            value={autoCompleteValue}
            onChange={(event, newAutoCompleteValue: string) => handleAutoCompleteChange(event, newAutoCompleteValue)}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => handleInputChange(event, newInputValue)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    variant='outlined'
                    error={false}
                    helperText={''}
                />
            )}
        />
    )
}

export default ChemicalSelect;
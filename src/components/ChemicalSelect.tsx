import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { IChemical, IChemicalApplicationForm } from '../types/ApplicationFormDefaultValues';

interface IProps {
    options: string[];
    index: number;
    property: string;
    label: string;
    chemicalApplicationForm: IChemicalApplicationForm,
    setChemicalApplicationForm: React.Dispatch<React.SetStateAction<IChemicalApplicationForm>>
};

const ChemicalSelect = ({ options, index, property, label, chemicalApplicationForm, setChemicalApplicationForm }: IProps) => {

    const [autoCompleteValue, setAutoCompleteValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleAutoCompleteChange = (event, newAutoCompleteValue: string) => {
        setAutoCompleteValue(newAutoCompleteValue);
        const objectToUpdate = { ...chemicalApplicationForm.chemicals[index], [property]: newAutoCompleteValue };
        const reconstructedChemicalList = [...chemicalApplicationForm.chemicals]
        reconstructedChemicalList[index] = objectToUpdate
        setChemicalApplicationForm({ ...chemicalApplicationForm, chemicals: reconstructedChemicalList });
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
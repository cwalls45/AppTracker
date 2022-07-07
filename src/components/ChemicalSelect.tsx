import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { IChemical, IChemicalApplicationForm } from '../types/ApplicationFormDefaultValues';

interface IProps {
    options: string[];
    property: string;
    label: string;
    chemicalApplicationForm: IChemicalApplicationForm;
    setChemicalApplicationForm: React.Dispatch<React.SetStateAction<IChemicalApplicationForm>>;
    index?: number;
};

const ChemicalSelect = ({ options, property, label, chemicalApplicationForm, setChemicalApplicationForm, index }: IProps) => {

    const [autoCompleteValue, setAutoCompleteValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleAutoCompleteChange = (event, newAutoCompleteValue: string) => {
        setAutoCompleteValue(newAutoCompleteValue);
        if (index !== undefined) {
            const objectToUpdate = { ...chemicalApplicationForm.chemicals[index], [property]: newAutoCompleteValue };
            const reconstructedChemicalList = [...chemicalApplicationForm.chemicals]
            reconstructedChemicalList[index] = objectToUpdate
            setChemicalApplicationForm({ ...chemicalApplicationForm, chemicals: reconstructedChemicalList });
        } else {
            setChemicalApplicationForm({ ...chemicalApplicationForm, [property]: newAutoCompleteValue });
        }

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
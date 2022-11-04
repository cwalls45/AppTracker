import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';
import { ChemicalApplicationFormProperty, IChemicalApplicationForm } from '../../types/ApplicationFormDefaultValues';

interface IProps {
    options: string[];
    property: string;
    label: string;
    chemicalApplicationForm: IChemicalApplicationForm;
    setChemicalApplicationForm: React.Dispatch<React.SetStateAction<IChemicalApplicationForm>>;
    index?: number;
};

const ChemicalSelect = ({ options, property, label, chemicalApplicationForm, setChemicalApplicationForm, index }: IProps) => {

    const dispatch = useDispatch();
    const { updateTotalAreaOfAppUnits } = bindActionCreators(actionCreators, dispatch);

    const actionCreatorFactory = (data, property: string) => {
        if (property === ChemicalApplicationFormProperty.TOTAL_AREA_OF_APP_UNIT) {
            updateTotalAreaOfAppUnits({
                data,
                property
            });
        }
    }

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
            actionCreatorFactory(newAutoCompleteValue, property)
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
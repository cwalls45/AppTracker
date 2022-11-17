import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chemicalApplicationFormActionCreators, State } from '../../redux';
import { ChemicalApplicationFormProperty, ChemicalProperties, IChemicalApplicationForm } from '../../types/applicationFormDefaultValues';

interface IProps {
    options: string[];
    property: string;
    label: string;
    index?: number;
};

const ChemicalSelect = ({ options, property, label, index }: IProps) => {

    const dispatch = useDispatch();
    const { updateTotalAreaOfAppUnits, setChemicalCompany, setChemicalName, setChemicalAmountUnits } = bindActionCreators(chemicalApplicationFormActionCreators, dispatch);
    const state = useSelector((state: State) => state);

    const actionCreatorFactory = (data, property: string) => {
        if (property === ChemicalApplicationFormProperty.TOTAL_AREA_OF_APP_UNIT) {
            updateTotalAreaOfAppUnits({
                data,
                property
            });
        } else if (property === ChemicalProperties.CHEMICAL_COMPANY) {
            setChemicalCompany({
                data,
                property
            });
        } else if (property === ChemicalProperties.CHEMICAL_NAME) {
            setChemicalName({
                data,
                property
            });
        } else if (property === ChemicalProperties.UNITS) {
            setChemicalAmountUnits({
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
            const objectToUpdate = { ...state.chemicalApplication.chemicals[index], [property]: newAutoCompleteValue };
            const reconstructedChemicalList = [...state.chemicalApplication.chemicals]
            reconstructedChemicalList[index] = objectToUpdate
            actionCreatorFactory(reconstructedChemicalList, property)
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
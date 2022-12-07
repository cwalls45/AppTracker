import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chemicalApplicationFormActionCreators, State } from '../../redux';
import { ChemicalApplicationFormProperty, ChemicalProperties } from '../../entities/chemicalApplicationFormDefaultValues';

interface IProps {
    property: string;
    label: string;
    options: string[];
    isSearching: boolean;
    isDisabled: boolean
    index?: number;
};

const ChemicalSelect = ({ property, label, options, isSearching, isDisabled, index }: IProps) => {

    const [searchValue, setSearchValue] = useState('');

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

    const handleInputChange = (event, newInputValue: string) => {
        setSearchValue(newInputValue);
        if (index !== undefined) {
            const objectToUpdate = { ...state.chemicalApplication.chemicals[index], [property]: newInputValue };
            const reconstructedChemicalList = [...state.chemicalApplication.chemicals]
            reconstructedChemicalList[index] = objectToUpdate
            actionCreatorFactory(reconstructedChemicalList, property)
        } else {
            actionCreatorFactory(newInputValue, property)
        }
    };

    return (
        <Autocomplete
            options={options}
            filterOptions={(searchResults) => searchResults}
            loading={isSearching}
            disabled={isDisabled}
            inputValue={searchValue}
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
            isOptionEqualToValue={(option, value) => {
                if (option === value || !value) return true
                else return false;
            }}
        />
    )
}

export default ChemicalSelect;
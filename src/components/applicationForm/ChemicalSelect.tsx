import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chemicalApplicationFormActionCreators, State } from '../../redux';
import { ChemicalApplicationFormProperty, ChemicalProperties } from '../../entities/chemicalApplicationFormDefaultValues';
import { useDebounce } from '../../hooks/useDebounce';

interface IProps {
    defaultOptions: string[];
    property: string;
    label: string;
    dependentValue: any;
    apiRequestFunc?: (queryString: string) => Promise<any>;
    index?: number;
};

const ChemicalSelect = ({ defaultOptions, property, label, dependentValue, apiRequestFunc, index }: IProps) => {

    const [autoCompleteValue, setAutoCompleteValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [options, setOptions] = useState(defaultOptions);
    const [isSearching, setIsSearching] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const debouncedSearchTerm = useDebounce(searchValue, 300);

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
    };

    const handleInputChange = (event, newInputValue: string) => {
        setSearchValue(newInputValue);
    };

    useEffect(() => {
        if (apiRequestFunc) {
            if (debouncedSearchTerm) {
                const fetchData = async (searchValue: string) => {
                    const searchResults = await apiRequestFunc(searchValue);
                    setOptions(searchResults);
                    setIsSearching(false);
                };

                setIsSearching(true);
                fetchData(searchValue).catch((error) => console.log('Error in ChemicalSelect: ', error))
            } else {
                setOptions([]);
                setIsSearching(false);
            }
        }
    }, [debouncedSearchTerm]);

    useEffect(() => {
        if (dependentValue !== null && !dependentValue) {
            setIsDisabled(true);
        } else if (dependentValue !== null && dependentValue) {
            setIsDisabled(false)
        }
    }, [dependentValue])

    return (
        <Autocomplete
            options={options}
            filterOptions={(searchResults) => searchResults}
            loading={isSearching}
            disabled={isDisabled}
            value={autoCompleteValue}
            onChange={(event, newAutoCompleteValue: string) => handleAutoCompleteChange(event, newAutoCompleteValue)}
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
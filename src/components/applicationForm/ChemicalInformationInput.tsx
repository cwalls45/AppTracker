import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ChemicalSelect from "./ChemicalSelect";
import FormInputText from "./FormInputText";
import { chemicalCompanyNames } from "../../dummyData/chemicalCompanyNames";
import { ChemicalProperties } from "../../entities/chemicalApplicationFormDefaultValues";
import { searchChemicalNames } from "../../utils/apiRequests";
import { State } from '../../redux';
import { useSelector } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';

interface IProps {
    index: number;
}

const ChemicalInformationInput = ({ index }: IProps) => {

    const units = ['lbs', 'oz', 'gallon(s)', 'fl. oz'];

    const [options, setOptions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const { chemicalApplication } = useSelector((state: State) => state);
    const debouncedChemicalName = useDebounce(chemicalApplication.chemicals[index].chemicalName, 300);

    const fetchData = async (
        searchValue: string,
        apiRequestFunc: (queryString: string) => Promise<any>
    ) => {
        const searchResults = await apiRequestFunc(searchValue);
        console.log('searchResults', searchResults)
        setOptions(searchResults);
        setIsSearching(false);
    };

    useEffect(() => {
        console.log('in useeffect', debouncedChemicalName)
        console.log('index', index)
        if (debouncedChemicalName) {
            console.log('inDebounceChemicalName', debouncedChemicalName)
            setIsSearching(true);
            fetchData(chemicalApplication.chemicals[index].chemicalName, searchChemicalNames)
                .catch((error) => {
                    setIsSearching(false);
                    console.log('Error in ChemicalSelect: ', error);
                })
        } else {
            setOptions([]);
            setIsSearching(false);
        }
    }, [debouncedChemicalName]);


    return (
        <Grid container justifyContent='space-around'>
            <Grid item xs={12} md={4}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.CHEMICAL_NAME}
                    label='Chemical Name'
                    options={options}
                    isSearching={isSearching}
                    isDisabled={false}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.CHEMICAL_COMPANY}
                    label='Chemical Company'
                    options={chemicalCompanyNames}
                    isSearching={isSearching}
                    isDisabled={false}
                />
            </Grid>
            <Grid item xs={6} md={1}>
                <FormInputText
                    index={index}
                    property={ChemicalProperties.AMOUNT}
                    label='Amount'
                    options={units}
                />
            </Grid>
            <Grid item xs={6} md={1}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.UNITS}
                    label='Units'
                    options={units}
                    isSearching={false}
                    isDisabled={false}
                />
            </Grid>
        </Grid >
    );
};

export default ChemicalInformationInput;
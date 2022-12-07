import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ChemicalSelect from "./ChemicalSelect";
import FormInputText from "./FormInputText";
import { ChemicalProperties } from "../../entities/chemicalApplicationFormDefaultValues";
import { searchChemicalCompaniesByName, searchChemicalNames } from "../../utils/apiRequests";
import { State } from '../../redux';
import { useSelector } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';

interface IProps {
    index: number;
}

const ChemicalInformationInput = ({ index }: IProps) => {

    const units = ['lbs', 'oz', 'gallon(s)', 'fl. oz'];

    const [chemicalOptions, setChemicalOptions] = useState<string[]>([]);
    const [companyOptions, setCompanyOptions] = useState<string[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const { chemicalApplication } = useSelector((state: State) => state);
    const debouncedChemicalName = useDebounce(chemicalApplication.chemicals[index].chemicalName, 400);

    const fetchData = async (
        searchValue: string,
        apiRequestFunc: (queryString: string) => Promise<any>,
        setterFunc: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        const searchResults = await apiRequestFunc(searchValue);
        setterFunc(searchResults);
        setIsSearching(false);
    };

    useEffect(() => {
        if (debouncedChemicalName) {
            setIsSearching(true);
            fetchData(chemicalApplication.chemicals[index].chemicalName, searchChemicalNames, setChemicalOptions)
                .catch((error) => {
                    setIsSearching(false);
                    console.log('Error fetching chemical Names: ', error);
                })
        } else {
            setChemicalOptions([]);
            setIsSearching(false);
        }
    }, [debouncedChemicalName]);

    useEffect(() => {
        if (debouncedChemicalName) {
            setIsSearching(true);
            fetchData(chemicalApplication.chemicals[index].chemicalName, searchChemicalCompaniesByName, setCompanyOptions)
                .catch((error) => {
                    setIsSearching(false);
                    console.log('Error fetching chemical company names: ', error);
                })
        } else {
            setCompanyOptions([]);
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
                    options={chemicalOptions}
                    isSearching={isSearching}
                    isDisabled={false}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.CHEMICAL_COMPANY}
                    label='Chemical Company'
                    options={companyOptions}
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
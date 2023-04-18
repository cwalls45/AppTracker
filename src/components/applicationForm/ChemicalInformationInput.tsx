import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ChemicalSelect from "./ChemicalSelect";
import FormInputText from "./FormInputText";
import { ChemicalProperties, IChemicalCompanySummary, IProductSummary, units } from "../../entities/chemicalApplicationFormDefaultValues";
import { searchChemicalCompaniesByName, searchChemicalNames } from "../../utils/apiRequests";
import { State } from '../../redux';
import { useSelector } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';

interface IProps {
    index: number;
}

const ChemicalInformationInput = ({ index }: IProps) => {

    const [chemicalOptions, setChemicalOptions] = useState<string[]>([]);
    const [companyOptions, setCompanyOptions] = useState<string[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const { chemicalApplication } = useSelector((state: State) => state);
    const debouncedChemicalName = useDebounce(chemicalApplication.chemicals[index].chemicalName, 400);

    const fetchChemicalNames = async (
        searchValue: string,
    ) => {
        const searchResults = await searchChemicalNames(searchValue);
        const chemicalNames = [...new Set(searchResults.map((chemical: IProductSummary) => chemical.productName))];
        setChemicalOptions(chemicalNames);
        setIsSearching(false);
    };

    const fetchCompanies = async (
        searchValue: string,
    ) => {
        const searchResults = await searchChemicalCompaniesByName(searchValue);
        const chemicalNames = [...new Set(searchResults.map((chemicalCompanies: IChemicalCompanySummary) => chemicalCompanies.companyName))];
        setCompanyOptions(chemicalNames);
        setIsSearching(false);
    };

    useEffect(() => {
        if (debouncedChemicalName) {
            setIsSearching(true);
            fetchChemicalNames(chemicalApplication.chemicals[index].chemicalName)
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
            fetchCompanies(chemicalApplication.chemicals[index].chemicalName)
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
            <Grid item xs={12}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.CHEMICAL_NAME}
                    label='Chemical Name'
                    options={chemicalOptions}
                    isSearching={isSearching}
                    isDisabled={false}
                />
            </Grid>
            <Grid item xs={12}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.CHEMICAL_COMPANY}
                    label='Chemical Company'
                    options={companyOptions}
                    isSearching={isSearching}
                    isDisabled={chemicalApplication.chemicals[index].chemicalName === ''}
                />
            </Grid>
            <Grid item xs={6}>
                <FormInputText
                    index={index}
                    property={ChemicalProperties.AMOUNT}
                    label='Amount'
                />
            </Grid>
            <Grid item xs={6}>
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
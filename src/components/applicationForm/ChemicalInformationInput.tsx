import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ChemicalSelect from "./ChemicalSelect";
import FormInputText from "./FormInputText";
import { ChemicalProperties, IProductSummary, units } from "../../entities/chemicalApplicationFormDefaultValues";
import { searchCompanies, searchChemicalNames } from "../../utils/apiRequests";
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
    const debouncedChemicalCompany = useDebounce(chemicalApplication.chemicals[index].chemicalCompany, 400);

    const fetchChemicalNames = async (
        searchValue: string,
    ) => {
        const searchResults = await searchChemicalNames(searchValue);
        const chemicalNames = [...new Set(searchResults.map((chemical: IProductSummary) => chemical.productName))];
        setChemicalOptions(chemicalNames);
        setIsSearching(false);
    };

    const fetchCompanies = async () => {
        const companyOptions = await searchCompanies();
        const companyNames = companyOptions.map(({ companyName }) => companyName)
        setCompanyOptions(companyNames);
        setIsSearching(false);
    };

    useEffect(() => {
        if (debouncedChemicalCompany) {
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
    }, [debouncedChemicalCompany]);

    useEffect(() => {
        if (debouncedChemicalCompany) {
            setIsSearching(true);
            fetchCompanies()
                .catch((error) => {
                    setIsSearching(false);
                    console.log('Error fetching chemical companies: ', error);
                })
        } else {
            setCompanyOptions([]);
            setIsSearching(false);
        }
    }, [debouncedChemicalCompany]);


    return (
        <Grid container justifyContent='space-around' rowSpacing={2}>
            <Grid item xs={12}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.CHEMICAL_COMPANY}
                    label='Chemical Company'
                    options={companyOptions}
                    isSearching={isSearching}
                    isDisabled={false}
                />
            </Grid>
            <Grid item xs={12}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.CHEMICAL_NAME}
                    label='Chemical Name'
                    options={chemicalOptions}
                    isSearching={isSearching}
                    isDisabled={chemicalApplication.chemicals[index].chemicalCompany === ''}
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
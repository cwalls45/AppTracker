import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import AutoCompleteDropDown from "./AutoCompleteDropDown";
import { useDebounce } from "../../hooks/useDebounce";
import { searchChemicalCompaniesByName, searchChemicalNames } from "../../utils/apiRequests";
import { IChemicalCompanySummary, IProductSummary, units as volumeUnits } from "../../entities/chemicalApplicationFormDefaultValues";

const AddInventoryForm = () => {

    const [chemicalOptions, setChemicalOptions] = useState<string[]>([]);
    const [chemicalName, setChemicalName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyOptions, setCompanyOptions] = useState<string[]>([]);
    const [units, setUnits] = useState('')

    const [isSearching, setIsSearching] = useState(false)

    const debouncedChemicalName = useDebounce(chemicalName, 400);

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
            fetchChemicalNames(chemicalName)
                .catch((error) => {
                    setIsSearching(false);
                    console.log('Error fetching chemical Names to add to Inventory: ', error);
                })
        } else {
            setChemicalOptions([]);
            setIsSearching(false);
        }
    }, [debouncedChemicalName]);

    useEffect(() => {
        if (debouncedChemicalName) {
            setIsSearching(true);
            fetchCompanies(companyName)
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
        <Grid container item md={4} direction="column">
            <AutoCompleteDropDown
                label='Chemical Name'
                options={chemicalOptions}
                stateValue={chemicalName}
                setterFunction={setChemicalName}
                isSearching={isSearching}
            />
            <AutoCompleteDropDown
                label='Company Name'
                options={companyOptions}
                stateValue={companyName}
                setterFunction={setCompanyName}
                isSearching={isSearching}
            />
            <AutoCompleteDropDown
                label='Units'
                options={volumeUnits}
                stateValue={units}
                setterFunction={setUnits}
                isSearching={false}
            />
        </Grid>
    )
};

export default AddInventoryForm;
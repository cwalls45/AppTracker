import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import AutoCompleteDropDown from "./AutoCompleteDropDown";
import { useDebounce } from "../../hooks/useDebounce";
import { postAddInventory, searchChemicalCompaniesByName, searchChemicalNames } from "../../utils/apiRequests";
import { IChemicalCompanySummary, IProductSummary, units as volumeUnits } from "../../entities/chemicalApplicationFormDefaultValues";
import FormTextField from "./FormTextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { IAddToInventory } from "../../entities/inventory";

const AddInventoryForm = () => {

    const [chemicalOptions, setChemicalOptions] = useState<string[]>([]);
    const [chemicalName, setChemicalName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyOptions, setCompanyOptions] = useState<string[]>([]);
    const [amount, setAmount] = useState('');
    const [units, setUnits] = useState('');
    const [cost, setCost] = useState('');

    const [isSearching, setIsSearching] = useState(false)

    const debouncedChemicalName = useDebounce(chemicalName, 400);

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const inventoryToAdd: IAddToInventory = {
                chemicalName,
                companyName,
                amount,
                units,
                cost,
            }
            console.log('submitted', inventoryToAdd);
            const addInventory = await postAddInventory(inventoryToAdd);
        } catch (error) {
            console.log('ERROR ADDING INVENTORY', error);
        }
    };

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
            fetchCompanies(chemicalName)
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
            <form onSubmit={handleSubmit}>
                <Grid container direction="column" rowSpacing={1}>
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
                </Grid>
                <Grid container justifyContent='space-around'>
                    <FormTextField
                        label='Amount'
                        setterFunction={setAmount}
                    />
                    <AutoCompleteDropDown
                        label='Units'
                        options={volumeUnits}
                        stateValue={units}
                        setterFunction={setUnits}
                        isSearching={false}
                    />
                </Grid>
                <Grid container justifyContent='center'>
                    <FormTextField
                        label='Cost of Product'
                        setterFunction={setCost}
                    />
                </Grid>
                <Grid container justifyContent='center'>
                    <Button variant='contained' type='submit'>
                        Add to Inventory
                    </Button>
                </Grid>
            </form>
        </Grid>
    )
};

export default AddInventoryForm;
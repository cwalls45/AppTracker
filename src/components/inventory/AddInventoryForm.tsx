import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import AutoCompleteDropDown from "./AutoCompleteDropDown";
import { useDebounce } from "../../hooks/useDebounce";
import { searchChemicalCompaniesByName, searchChemicalNames } from "../../utils/apiRequests";
import { IChemicalCompanySummary, IProductSummary, units as volumeUnits } from "../../entities/chemicalApplicationFormDefaultValues";
import FormTextField from "./FormTextField";
import Button from "@mui/material/Button";
import { IInventory } from "../../entities/inventory";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { inventoryActionCreators } from "../../redux";
import { bindActionCreators } from "redux";

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

    const dispatch = useDispatch();
    const { postInventory } = bindActionCreators(inventoryActionCreators, dispatch)

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const inventoryToAdd: IInventory = {
                chemicalName,
                companyName,
                amount,
                units,
                cost,
                costUnit: units
            }
            await postInventory(inventoryToAdd);
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
        <Grid container item md={2}>
            <Grid container item justifyContent='center'>
                <Typography variant="h4" component="div">
                    Add Inventory
                </Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
                <Grid container rowSpacing={4}>
                    <Grid item xs={12}>
                        <AutoCompleteDropDown
                            label='Chemical Name'
                            options={chemicalOptions}
                            stateValue={chemicalName}
                            setterFunction={setChemicalName}
                            isSearching={isSearching}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <AutoCompleteDropDown
                            label='Company Name'
                            options={companyOptions}
                            stateValue={companyName}
                            setterFunction={setCompanyName}
                            isSearching={isSearching}
                        />
                    </Grid>
                </Grid>
                <Grid container justifyContent='space-between' rowSpacing={4}>
                    <Grid item xs={6}>
                        <FormTextField
                            label='Amount'
                            value={amount}
                            setterFunction={setAmount}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <AutoCompleteDropDown
                            label='Units'
                            options={volumeUnits}
                            stateValue={units}
                            setterFunction={setUnits}
                            isSearching={false}
                        />
                    </Grid>
                </Grid>
                <Grid container justifyContent='space-between' rowSpacing={4}>
                    <Grid item xs={6}>
                        <FormTextField
                            label='Cost of Product'
                            value={cost}
                            setterFunction={setCost}
                        />
                    </Grid>
                    <Grid container item xs={5}>
                        <Typography component="div">
                            per {units}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' rowSpacing={2}>
                    <Grid item>
                        <Button variant='contained' type='submit'>
                            Add to Inventory
                        </Button>
                    </Grid>
                </Grid>
            </form >
        </Grid >
    )
};

export default AddInventoryForm;
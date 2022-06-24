import ChemicalSelect from "./ChemicalSelect";
import Grid from '@mui/material/Grid';
import { chemicals } from "../dummyData/chemical";
import { chemicalCompanyNames } from "../dummyData/chemicalCompanyNames";
import FormInputText from "./FormInputText";
//import { IChemical, ChemicalList } from "../types/ApplicationFormDefaultValues";

interface IProps {
}

const ChemicalInformationInput = () => {
    const units = ['lbs', 'oz', 'gallon(s)', 'fl. oz'];

    return (
        <Grid container justifyContent='space-around'>
            <Grid item xs={12} md={4}>
                <ChemicalSelect options={chemicalCompanyNames} label='ChemicalCompany' />
            </Grid>
            <Grid item xs={12} md={4}>
                <ChemicalSelect options={chemicals} label='ChemicalName' />
            </Grid>
            <Grid item xs={6} md={1}>
                <FormInputText label='Amount' />
            </Grid>
            <Grid item xs={6} md={1}>
                <ChemicalSelect options={units} label='Units' />
            </Grid>
        </Grid >
    );
};

export default ChemicalInformationInput;
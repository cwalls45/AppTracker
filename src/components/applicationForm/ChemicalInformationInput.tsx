import ChemicalSelect from "./ChemicalSelect";
import Grid from '@mui/material/Grid';
import { chemicals } from "../../dummyData/chemical";
import { chemicalCompanyNames } from "../../dummyData/chemicalCompanyNames";
import FormInputText from "./FormInputText";
import { ChemicalProperties, IChemicalApplicationForm } from "../../types/applicationFormDefaultValues";

interface IProps {
    index?: number;
}

const ChemicalInformationInput = ({ index }: IProps) => {
    const units = ['lbs', 'oz', 'gallon(s)', 'fl. oz'];

    return (
        <Grid container justifyContent='space-around'>
            <Grid item xs={12} md={4}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.CHEMICAL_COMPANY}
                    label='Chemical Company'
                    options={chemicalCompanyNames}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.CHEMICAL_NAME}
                    label='Chemical Name'
                    options={chemicals}
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
                />
            </Grid>
        </Grid >
    );
};

export default ChemicalInformationInput;
import ChemicalSelect from "./ChemicalSelect";
import Grid from '@mui/material/Grid';
import { chemicals } from "../dummyData/chemical";
import { chemicalCompanyNames } from "../dummyData/chemicalCompanyNames";
import FormInputText from "./FormInputText";
import { Control, FieldValues } from "react-hook-form";
import { IChemical, IChemicalList } from "../types/ApplicationFormDefaultValues";

interface IProps {
    control: Control<FieldValues, IChemicalList>;
    index: number;
}

const ChemicalInformationInput = ({ control, index }: IProps) => {
    const units = ['lbs', 'oz', 'gallon(s)', 'fl. oz'];

    return (
        <Grid container columnSpacing={4} justifyContent='center'>
            <Grid item sx={{ minWidth: '25vw' }}>
                <ChemicalSelect options={chemicalCompanyNames} label='ChemicalCompany' control={control} index={index} />
            </Grid>
            <Grid item sx={{ minWidth: '25vw' }}>
                <ChemicalSelect options={chemicals} label='ChemicalName' control={control} index={index} />
            </Grid>
            <Grid item >
                <FormInputText label='Amount' control={control} index={index} />
            </Grid>
            <Grid item sx={{ minWidth: '10vw' }}>
                <ChemicalSelect options={units} label='Units' control={control} index={index} />
            </Grid>
        </Grid >
    );
};

export default ChemicalInformationInput;
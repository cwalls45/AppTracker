import ChemicalSelect from "./ChemicalSelect";
import Grid from '@mui/material/Grid';
import { chemicals } from "../dummyData/chemical";
import { chemicalCompanyNames } from "../dummyData/chemicalCompanyNames";
import FormInputText from "./FormInputText";
import { IChemical, IChemicalApplicationForm } from "../types/ApplicationFormDefaultValues";

interface IProps {
    index: number;
    chemical: IChemical,
    chemicalApplicationForm: IChemicalApplicationForm,
    setChemicalApplicationForm: React.Dispatch<React.SetStateAction<IChemicalApplicationForm>>
}

const ChemicalInformationInput = ({ index, chemical, chemicalApplicationForm, setChemicalApplicationForm }: IProps) => {
    const units = ['lbs', 'oz', 'gallon(s)', 'fl. oz'];

    return (
        <Grid container justifyContent='space-around'>
            <Grid item xs={12} md={4}>
                <ChemicalSelect
                    index={index}
                    property='chemicalCompany'
                    label='Chemical Company'
                    chemicalApplicationForm={chemicalApplicationForm}
                    setChemicalApplicationForm={setChemicalApplicationForm}
                    options={chemicalCompanyNames}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <ChemicalSelect
                    index={index}
                    property='chemicalName'
                    label='Chemical Name'
                    options={chemicals}
                    chemicalApplicationForm={chemicalApplicationForm}
                    setChemicalApplicationForm={setChemicalApplicationForm}
                />
            </Grid>
            <Grid item xs={6} md={1}>
                <FormInputText
                    index={index}
                    property='amount'
                    label='Amount'
                    options={units}
                    chemicalApplicationForm={chemicalApplicationForm}
                    setChemicalApplicationForm={setChemicalApplicationForm}
                />
            </Grid>
            <Grid item xs={6} md={1}>
                <ChemicalSelect
                    index={index}
                    property='units'
                    label='Units'
                    options={units}
                    chemicalApplicationForm={chemicalApplicationForm}
                    setChemicalApplicationForm={setChemicalApplicationForm}
                />
            </Grid>
        </Grid >
    );
};

export default ChemicalInformationInput;
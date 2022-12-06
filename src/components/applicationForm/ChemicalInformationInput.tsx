import Grid from '@mui/material/Grid';
import ChemicalSelect from "./ChemicalSelect";
import FormInputText from "./FormInputText";
import { chemicalCompanyNames } from "../../dummyData/chemicalCompanyNames";
import { ChemicalProperties } from "../../entities/chemicalApplicationFormDefaultValues";
import { searchChemicalNames } from "../../utils/apiRequests";
import { State } from '../../redux';
import { useSelector } from 'react-redux';

interface IProps {
    index: number;
}

const ChemicalInformationInput = ({ index }: IProps) => {

    const units = ['lbs', 'oz', 'gallon(s)', 'fl. oz'];

    const { chemicalApplication } = useSelector((state: State) => state);

    return (
        <Grid container justifyContent='space-around'>
            <Grid item xs={12} md={4}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.CHEMICAL_NAME}
                    label='Chemical Name'
                    defaultOptions={[]}
                    dependentValue={null}
                    apiRequestFunc={searchChemicalNames}

                />
            </Grid>
            <Grid item xs={12} md={4}>
                <ChemicalSelect
                    index={index}
                    property={ChemicalProperties.CHEMICAL_COMPANY}
                    label='Chemical Company'
                    defaultOptions={chemicalCompanyNames}
                    dependentValue={chemicalApplication.chemicals[index].chemicalName}
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
                    defaultOptions={units}
                    dependentValue={null}
                />
            </Grid>
        </Grid >
    );
};

export default ChemicalInformationInput;
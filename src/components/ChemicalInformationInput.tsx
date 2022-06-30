import ChemicalSelect from "./ChemicalSelect";
import Grid from '@mui/material/Grid';
import { chemicals } from "../dummyData/chemical";
import { chemicalCompanyNames } from "../dummyData/chemicalCompanyNames";
import FormInputText from "./FormInputText";
import { IChemical, ChemicalList } from "../types/ApplicationFormDefaultValues";

interface IProps {
    index: number;
    chemical: IChemical,
    chemicalList: ChemicalList,
    setChemicalList: React.Dispatch<React.SetStateAction<ChemicalList>>
}

const ChemicalInformationInput = ({ index, chemical, chemicalList, setChemicalList }: IProps) => {
    const units = ['lbs', 'oz', 'gallon(s)', 'fl. oz'];

    return (
        <Grid container justifyContent='space-around'>
            <Grid item xs={12} md={4}>
                <ChemicalSelect
                    index={index}
                    property='chemicalCompany'
                    label='Chemical Company'
                    chemicalList={chemicalList}
                    setChemicalList={setChemicalList}
                    options={chemicalCompanyNames}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <ChemicalSelect
                    index={index}
                    property='chemicalName'
                    label='Chemical Name'
                    options={chemicals}
                    chemicalList={chemicalList}
                    setChemicalList={setChemicalList}
                />
            </Grid>
            <Grid item xs={6} md={1}>
                <FormInputText
                    index={index}
                    property='amount'
                    label='Amount'
                    options={units}
                    chemicalList={chemicalList}
                    setChemicalList={setChemicalList}
                />
            </Grid>
            <Grid item xs={6} md={1}>
                <ChemicalSelect
                    index={index}
                    property='units'
                    label='Units'
                    options={units}
                    chemicalList={chemicalList}
                    setChemicalList={setChemicalList}
                />
            </Grid>
        </Grid >
    );
};

export default ChemicalInformationInput;
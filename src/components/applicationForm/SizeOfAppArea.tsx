import Grid from '@mui/material/Grid';
import FormInputText from "./FormInputText";
import ChemicalSelect from "./ChemicalSelect";
import { IChemicalApplicationForm } from "../../types/ApplicationFormDefaultValues";
import { sizeOfApplicationAreaUnits } from '../../dummyData/areaOfApplication';

interface IProps {
    chemicalApplicationForm: IChemicalApplicationForm,
    setChemicalApplicationForm: React.Dispatch<React.SetStateAction<IChemicalApplicationForm>>
    index?: number;
}

const SizeOfAppArea = ({ chemicalApplicationForm, setChemicalApplicationForm }: IProps) => {
    return (
        <>
            <Grid item xs={6} md={1}>
                <FormInputText
                    property='totalAreaOfApp'
                    label='Total Area of Application'
                    chemicalApplicationForm={chemicalApplicationForm}
                    setChemicalApplicationForm={setChemicalApplicationForm}
                />
            </Grid>
            <Grid item xs={6} md={1}>
                <ChemicalSelect
                    property='totalAreaOfAppUnit'
                    label='Unit'
                    options={sizeOfApplicationAreaUnits}
                    chemicalApplicationForm={chemicalApplicationForm}
                    setChemicalApplicationForm={setChemicalApplicationForm}
                />
            </Grid>
        </>
    )
}

export default SizeOfAppArea;
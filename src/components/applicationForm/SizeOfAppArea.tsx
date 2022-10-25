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
        <Grid container justifyContent='space-evenly' xs={6} md={5}>
            <Grid>
                <FormInputText
                    property='totalAreaOfApp'
                    label='Total Area of Application'
                    chemicalApplicationForm={chemicalApplicationForm}
                    setChemicalApplicationForm={setChemicalApplicationForm}
                />
            </Grid>
            <Grid>
                <ChemicalSelect
                    property='totalAreaOfAppUnit'
                    label='Unit'
                    options={sizeOfApplicationAreaUnits}
                    chemicalApplicationForm={chemicalApplicationForm}
                    setChemicalApplicationForm={setChemicalApplicationForm}
                />
            </Grid>
        </Grid>
    )
}

export default SizeOfAppArea;
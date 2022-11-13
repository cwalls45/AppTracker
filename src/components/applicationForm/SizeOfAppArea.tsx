import Grid from '@mui/material/Grid';
import FormInputText from "./FormInputText";
import ChemicalSelect from "./ChemicalSelect";
import { ChemicalApplicationFormProperty, IChemicalApplicationForm } from "../../types/ApplicationFormDefaultValues";
import { sizeOfApplicationAreaUnits } from '../../dummyData/areaOfApplication';

const SizeOfAppArea = () => {

    return (
        <Grid container justifyContent='space-evenly' xs={6} md={5}>
            <Grid>
                <FormInputText
                    property={ChemicalApplicationFormProperty.TOTAL_AREA_OF_APP}
                    label='Total Area of Application'
                />
            </Grid>
            <Grid>
                <ChemicalSelect
                    property={ChemicalApplicationFormProperty.TOTAL_AREA_OF_APP_UNIT}
                    label='Unit'
                    options={sizeOfApplicationAreaUnits}
                />
            </Grid>
        </Grid>
    )
}

export default SizeOfAppArea;
import Grid from '@mui/material/Grid';
import FormInputText from "./FormInputText";
import ChemicalSelect from "./ChemicalSelect";
import { ChemicalApplicationFormProperty } from "../../types/chemicalApplicationFormDefaultValues";
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
            <Grid item xs={6} md={3}>
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
import Grid from '@mui/material/Grid';
import FormInputText from "./FormInputText";
import ChemicalSelect from "./ChemicalSelect";
import { ChemicalApplicationFormProperty } from "../../entities/chemicalApplicationFormDefaultValues";
import { sizeOfApplicationAreaUnits } from '../../dummyData/areaOfApplication';

const SizeOfAppArea = () => {

    return (
        <Grid container item justifyContent='space-around' xs={12} rowSpacing={2}>
            <Grid item xs={8} md={6}>
                <FormInputText
                    property={ChemicalApplicationFormProperty.TOTAL_AREA_OF_APP}
                    label='Total Area of Application'
                />
            </Grid>
            <Grid item xs={8} md={3}>
                <ChemicalSelect
                    property={ChemicalApplicationFormProperty.TOTAL_AREA_OF_APP_UNIT}
                    label='Unit'
                    options={sizeOfApplicationAreaUnits}
                    isSearching={false}
                    isDisabled={false}
                />
            </Grid>
        </Grid>
    )
}

export default SizeOfAppArea;
import Grid from '@mui/material/Grid';
import FormInputText from "./FormInputText";
import ChemicalSelect from "./ChemicalSelect";
import { ApplicationProperty } from "../../entities/chemicalApplicationFormDefaultValues";
import { sizeOfApplicationAreaUnits } from '../../dummyData/areaOfApplication';

const SizeOfAppArea = () => {

    return (
        <Grid container item justifyContent='space-evenly' xs={12} rowSpacing={2}>
            <Grid item xs={8} md={6}>
                <FormInputText
                    property={ApplicationProperty.TOTAL_AREA_OF_APP}
                    label='Total Area of Application'
                />
            </Grid>
            <Grid item xs={8} md={3}>
                <ChemicalSelect
                    property={ApplicationProperty.TOTAL_AREA_OF_APP_UNIT}
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
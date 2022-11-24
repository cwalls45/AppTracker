import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import ChemicalInformationInput from './ChemicalInformationInput';
import MultiSelect from './MultiSelect';
import DatePickerCalendar from './DatePickerCalendar';
import { ChemicalApplicationFormProperty } from '../../types/chemicalApplicationFormDefaultValues';
import { areaOfApplication } from '../../dummyData/areaOfApplication';
import { targetPests } from '../../dummyData/targetPests';
import SizeOfAppArea from './SizeOfAppArea';
import { useSelector, useDispatch } from 'react-redux';
import { applicationsActionCreators, chemicalApplicationFormActionCreators, State } from '../../redux'
import { bindActionCreators } from 'redux';
import { formatChemicalApplicationToApplicationEvent } from '../../utils/formatChemicalApplicationToApplicationEvent';

const ApplicationForm = () => {

    const dispatch = useDispatch();
    const { addChemical, removeChemical } = bindActionCreators(chemicalApplicationFormActionCreators, dispatch);
    const { postChemicalApplication } = bindActionCreators(applicationsActionCreators, dispatch);
    const state = useSelector((state: State) => state);

    const [attestForm, setAttestForm] = useState<boolean>(false);

    const addChemicalEvent = () => {
        if (attestForm) setAttestForm(false);
        addChemical();
    };

    const removeChemicalEvent = () => {
        if (attestForm) setAttestForm(false);
        removeChemical();
    };

    const handleAttestFormToggle = () => setAttestForm(!attestForm);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!attestForm) return;
        postChemicalApplication(state.chemicalApplication);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} >
                <Grid container justifyContent='space-around'>
                    <Grid container justifyContent='space-around'>
                        <Grid>
                            <DatePickerCalendar
                                label='Date of Application'
                                property={ChemicalApplicationFormProperty.DATE_OF_APPLICATION}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <MultiSelect
                                label='Target Pests'
                                property={ChemicalApplicationFormProperty.TARGET_PESTS}
                                options={targetPests}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='space-evenly'>
                        <Grid container xs={11} md={6}>
                            <Grid item justifyContent='space-evenly' xs={12}>
                                <MultiSelect
                                    label='Area of Application'
                                    property={ChemicalApplicationFormProperty.AREA_OF_APPLICATION}
                                    options={areaOfApplication}
                                />
                            </Grid>
                        </Grid>
                        <SizeOfAppArea
                        />
                    </Grid>
                </Grid>
                {state.chemicalApplication.chemicals.map((chemical, index) => (
                    <ChemicalInformationInput
                        key={index}
                        index={index}
                    />
                ))}
                <Grid container justifyContent='center' alignItems='center'>
                    <Checkbox size='medium' checked={attestForm} onChange={handleAttestFormToggle} />
                    I attest that the above information is correct.
                </Grid>
                <Grid container justifyContent='center'>
                    <Button onClick={addChemicalEvent} variant='outlined' color='inherit'>
                        Add
                    </Button>
                    {state.chemicalApplication.chemicals.length > 1 &&
                        <Button onClick={removeChemicalEvent} variant='outlined' color='inherit'>
                            Remove
                        </Button>
                    }
                    <Button variant='contained' type='submit' disabled={!attestForm}>
                        Submit
                    </Button>
                </Grid>
            </form >
        </Container >
    );
}

export default ApplicationForm;
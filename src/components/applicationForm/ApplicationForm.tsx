import { useState } from 'react';
import ChemicalInformationInput from './ChemicalInformationInput';
import MultiSelect from './MultiSelect';
import DatePickerCalendar from './DatePickerCalendar';
import { ChemicalApplicationFormProperty } from '../../entities/chemicalApplicationFormDefaultValues';
import { areaOfApplication } from '../../dummyData/areaOfApplication';
import { targetPests } from '../../dummyData/targetPests';
import SizeOfAppArea from './SizeOfAppArea';
import { useSelector, useDispatch } from 'react-redux';
import { applicationsActionCreators, chemicalApplicationFormActionCreators, State } from '../../redux'
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../entities/paths';
import { Button, Checkbox, Grid } from '@mui/material';

const ApplicationForm = () => {

    const dispatch = useDispatch();
    const { addChemical, removeChemical } = bindActionCreators(chemicalApplicationFormActionCreators, dispatch);
    const { postChemicalApplication } = bindActionCreators(applicationsActionCreators, dispatch);
    const state = useSelector((state: State) => state);

    const [attestForm, setAttestForm] = useState<boolean>(false);

    const navigate = useNavigate();
    const navigateToCalendar = () => navigate(Paths.CALENDAR);

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
        navigateToCalendar();
    }

    return (

        <form onSubmit={handleSubmit} >
            <Grid container justifyContent='center' alignContent='space-evenly' sx={{ height: '100vh', width: 'auto' }}>
                <Grid container sx={{ width: '50vw' }}>
                    <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                        <Grid container item xs={11} md={6}>
                            <Grid container justifyContent='center'>
                                <DatePickerCalendar
                                    label='Date of Application'
                                    property={ChemicalApplicationFormProperty.DATE_OF_APPLICATION}
                                />
                            </Grid>
                        </Grid>
                        <Grid container item xs={11} md={6}>
                            <Grid item justifyContent='space-evenly' xs={12}>
                                <MultiSelect
                                    label='Target Pests'
                                    property={ChemicalApplicationFormProperty.TARGET_PESTS}
                                    options={targetPests}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center' rowSpacing={2}>
                        <Grid container item xs={7}>
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
                    <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                        <Grid container item xs={11} md={6} rowSpacing={10}>
                            {state.chemicalApplication.chemicals.map((chemical, index) => (
                                <ChemicalInformationInput
                                    key={index}
                                    index={index}
                                />
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                        <Grid container item xs={11} md={6}>
                            <Grid container justifyContent='center' alignItems='center'>
                                <Checkbox size='medium' checked={attestForm} onChange={handleAttestFormToggle} />
                                I attest that the above information is correct.
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Button onClick={addChemicalEvent} variant='outlined' color='inherit' sx={{ width: '8em' }}>
                                    Add
                                </Button>
                                {state.chemicalApplication.chemicals.length > 1 &&
                                    <Button onClick={removeChemicalEvent} variant='outlined' color='inherit' sx={{ width: '8em' }}>
                                        Remove
                                    </Button>
                                }
                                <Button variant='contained' type='submit' disabled={!attestForm} sx={{ width: '15em' }}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form >
    );
}

export default ApplicationForm;
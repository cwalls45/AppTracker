import { useState } from 'react';
import ChemicalInformationInput from './ChemicalInformationInput';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { IChemical, IChemicalApplicationForm } from '../../types/ApplicationFormDefaultValues';
import { areaOfApplication } from '../../dummyData/areaOfApplication';
import MultiSelect from './MultiSelect';
import { targetPests } from '../../dummyData/targetPests';

const ApplicationForm = () => {

    const defaultValues = (): IChemicalApplicationForm => ({
        dateOfApplication: '',
        areaOfApplication: [],
        acresCovered: '',
        targetPests: [],
        chemicals: [{
            chemicalCompany: '',
            chemicalName: '',
            amount: '',
            units: ''
        }],
    });

    const chemicalListDefaultValues = (): IChemical => ({
        chemicalCompany: '',
        chemicalName: '',
        amount: '',
        units: ''
    });

    const [chemicalApplicationForm, setChemicalApplicationForm] = useState<IChemicalApplicationForm>(defaultValues);

    const addChemical = () => setChemicalApplicationForm({ ...chemicalApplicationForm, chemicals: [...chemicalApplicationForm.chemicals, chemicalListDefaultValues()] });

    const removeChemical = () => {
        const lastChemicalIndex = chemicalApplicationForm.chemicals.length - 1;
        const removeLastChemical = chemicalApplicationForm.chemicals.slice(0, lastChemicalIndex);
        setChemicalApplicationForm({ ...chemicalApplicationForm, chemicals: removeLastChemical })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Chemical List', chemicalApplicationForm)
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} >
                <Grid container justifyContent='space-around'>
                    <Grid item xs={12} md={4}>
                        <MultiSelect
                            label='Area of Application'
                            property='areaOfApplication'
                            options={areaOfApplication}
                            chemicalApplicationForm={chemicalApplicationForm}
                            setChemicalApplicationForm={setChemicalApplicationForm}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <MultiSelect
                            label='Target Pests'
                            property='targetPests'
                            options={targetPests}
                            chemicalApplicationForm={chemicalApplicationForm}
                            setChemicalApplicationForm={setChemicalApplicationForm}
                        />
                    </Grid>
                </Grid>
                {chemicalApplicationForm.chemicals.map((chemical, index) => (
                    <ChemicalInformationInput
                        key={index}
                        index={index}
                        chemicalApplicationForm={chemicalApplicationForm}
                        setChemicalApplicationForm={setChemicalApplicationForm}
                    />
                ))}
                <Grid container justifyContent='center'>
                    <Button onClick={addChemical} variant='outlined' color='inherit'>
                        Add
                    </Button>
                    {chemicalApplicationForm.chemicals.length > 1 &&
                        <Button onClick={removeChemical} variant='outlined' color='inherit'>
                            Remove
                        </Button>
                    }
                    <Button variant='outlined' color='inherit' type='submit'>
                        Submit
                    </Button>
                </Grid>
            </form >
        </Container>
    );
}

export default ApplicationForm;
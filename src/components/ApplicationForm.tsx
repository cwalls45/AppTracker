import { useState } from 'react';
import ChemicalInformationInput from './ChemicalInformationInput';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { IChemical, IChemicalApplicationForm } from '../types/ApplicationFormDefaultValues';

const ApplicationForm = () => {

    const defaultValues = (): IChemicalApplicationForm => ({
        dateOfApplication: '',
        areaOfApplication: '',
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

    const [chemicalApplicationForm, setChemicalApplicationForm] = useState<IChemicalApplicationForm>(defaultValues());

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
                {chemicalApplicationForm.chemicals.map((chemical, index) => (
                    <ChemicalInformationInput
                        key={index}
                        index={index}
                        chemical={chemical}
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
import { useState } from 'react';
import ChemicalInformationInput from './ChemicalInformationInput';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { v4 as uuidV4 } from 'uuid';
import { IChemical, ChemicalList } from '../types/ApplicationFormDefaultValues';

// const defaultValues: IChemical = {
//     ChemicalCompany: '',
//     ChemicalName: '',
//     Amount: '',
//     Units: ''
// };

const ApplicationForm = () => {

    const defaultValues = (): IChemical => ({
        id: uuidV4(),
        chemicalCompany: '',
        chemicalName: '',
        amount: '',
        units: ''
    });

    const [chemicalList, setChemicalList] = useState<ChemicalList>([defaultValues()]);

    const addChemical = () => setChemicalList([...chemicalList, defaultValues()]);

    const removeChemical = () => {
        const lastChemicalIndex = chemicalList.length - 1;
        const removeLastChemical = chemicalList.slice(0, lastChemicalIndex);
        setChemicalList(removeLastChemical);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Chemical List', chemicalList)
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} >
                {chemicalList.map((chemical, index) => (
                    <ChemicalInformationInput
                        key={index}
                        chemical={chemical}
                        chemicalList={chemicalList}
                        setChemicalList={setChemicalList}
                    />
                ))}
                <Grid container justifyContent='center'>
                    <Button onClick={addChemical} variant='outlined' color='inherit'>
                        Add
                    </Button>
                    {chemicalList.length > 1 &&
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
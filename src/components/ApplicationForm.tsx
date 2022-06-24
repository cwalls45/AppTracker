import { FieldValues, useForm, useFieldArray } from 'react-hook-form';
import ChemicalInformationInput from './ChemicalInformationInput';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { IChemical } from '../types/ApplicationFormDefaultValues';
import { useEffect } from 'react';


const defaultValues: IChemical = {
    ChemicalCompany: '',
    ChemicalName: '',
    Amount: '',
    Units: ''
};

const ApplicationForm = () => {

    const { control, handleSubmit, reset } = useForm<FieldValues>();
    const { fields, append, remove } = useFieldArray({ control, name: 'chemical' })

    const addChemical = () => append(defaultValues);
    const removeChemical = () => remove(fields.length - 1);
    const submit = (data) => {
        reset();
        addChemical();
    }

    useEffect(() => {
        addChemical();
    }, []);

    return (
        <Container sx={{ margin: '20px' }}>
            <form onSubmit={handleSubmit(submit)} >
                {fields.map((field, index) => (
                    <ChemicalInformationInput key={field.id} index={index} control={control} />
                ))}
                <Button onClick={addChemical} variant='outlined' color='inherit'>
                    Add
                </Button>
                {fields.length > 1 &&
                    <Button onClick={removeChemical} variant='outlined' color='inherit'>
                        Remove
                    </Button>
                }
                <Button variant='outlined' color='inherit' type='submit'>Submit</Button>
            </form >
        </Container>
    );
}

export default ApplicationForm;
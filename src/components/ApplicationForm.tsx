import { useState } from 'react';
import { FieldValues, useForm, useFieldArray } from 'react-hook-form';
import ChemicalInformationInput from './ChemicalInformationInput';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { IDefaultValues } from '../types/ApplicationFormDefaultValues';


const defaultValues: IDefaultValues = {
    ChemicalCompany: '',
    ChemicalName: '',
    Amount: '',
    Units: ''
};

const ApplicationForm = () => {

    const { control, handleSubmit } = useForm<FieldValues>({ defaultValues });
    const { fields, append, remove } = useFieldArray({ control, name: 'TEST' })

    const addChemical = () => append(defaultValues);
    const removeChemical = () => console.log('removed called');
    const submit = (data) => {
        console.log('data', data.TEST);
    }
    return (
        <Container sx={{ margin: '20px' }}>
            <form onSubmit={handleSubmit(submit)} >
                {fields.map((field, index) => (
                    <ChemicalInformationInput key={field.id} index={index} control={control} />
                ))}
                <Button onClick={addChemical} variant='outlined' color='inherit'>
                    Add
                </Button>
                {/* {numberOfChemicals > 1 &&
                    <Button onClick={removeChemical} variant='outlined' color='inherit'>
                        Remove
                    </Button>
                } */}
                <Button variant='outlined' color='inherit' type='submit'>Submit</Button>
            </form >
        </Container>
    );
}

export default ApplicationForm;
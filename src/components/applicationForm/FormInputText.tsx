import TextField from '@mui/material/TextField';
import { IChemical, IChemicalApplicationForm } from '../../types/ApplicationFormDefaultValues';

interface IProps {
    property: string;
    label: string;
    chemicalApplicationForm: IChemicalApplicationForm;
    setChemicalApplicationForm: React.Dispatch<React.SetStateAction<IChemicalApplicationForm>>;
    options?: string[];
    index?: number;
};

const FormInputText = ({ property, label, chemicalApplicationForm, setChemicalApplicationForm, options, index }: IProps) => {


    const handleChange = (event) => {
        if (index) {
            const objectToUpdate = { ...chemicalApplicationForm.chemicals[index], [property]: event.target.value.toString() };
            const reconstructedChemicalList = [...chemicalApplicationForm.chemicals]
            reconstructedChemicalList[index] = objectToUpdate
            setChemicalApplicationForm({ ...chemicalApplicationForm, chemicals: reconstructedChemicalList });
        } else {
            const propertyToUpdate = { ...chemicalApplicationForm, [property]: event.target.value };
            setChemicalApplicationForm(propertyToUpdate);
        }
    }

    return (
        <TextField
            label={label}
            variant='outlined'
            onChange={(event) => handleChange(event)}
            error={false}
            helperText={''}
        />
    );
};

export default FormInputText;
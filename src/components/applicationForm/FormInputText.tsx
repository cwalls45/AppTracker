import TextField from '@mui/material/TextField';
import { IChemical, IChemicalApplicationForm } from '../../types/ApplicationFormDefaultValues';

interface IProps {
    options: string[];
    property: string;
    label: string;
    chemicalApplicationForm: IChemicalApplicationForm,
    setChemicalApplicationForm: React.Dispatch<React.SetStateAction<IChemicalApplicationForm>>
    index?: number;
};

const FormInputText = ({ options, property, label, chemicalApplicationForm, setChemicalApplicationForm, index }: IProps) => {


    const handleChange = (event) => {
        if (index) {
            const objectToUpdate = { ...chemicalApplicationForm.chemicals[index], [property]: event.target.value.toString() };
            const reconstructedChemicalList = [...chemicalApplicationForm.chemicals]
            reconstructedChemicalList[index] = objectToUpdate
            setChemicalApplicationForm({ ...chemicalApplicationForm, chemicals: reconstructedChemicalList });
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
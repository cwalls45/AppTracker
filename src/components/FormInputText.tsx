import TextField from '@mui/material/TextField';
import { ChemicalList } from '../types/ApplicationFormDefaultValues';

interface IProps {
    options: string[];
    index: number;
    property: string;
    label: string;
    chemicalList: ChemicalList,
    setChemicalList: React.Dispatch<React.SetStateAction<ChemicalList>>
};

const FormInputText = ({ options, index, property, label, chemicalList, setChemicalList }: IProps) => {


    const handleChange = (event) => {
        console.log('event', event.target.value.toString())
        const objectToUpdate = { ...chemicalList[index], [property]: event.target.value.toString() };
        const reconstructedChemicalList = [...chemicalList]
        reconstructedChemicalList[index] = objectToUpdate
        setChemicalList(reconstructedChemicalList);
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
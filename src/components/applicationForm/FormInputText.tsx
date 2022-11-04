import TextField from '@mui/material/TextField';
import { ChemicalApplicationFormProperty, IChemicalApplicationForm } from '../../types/ApplicationFormDefaultValues';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';

interface IProps {
    property: string;
    label: string;
    chemicalApplicationForm: IChemicalApplicationForm;
    setChemicalApplicationForm: React.Dispatch<React.SetStateAction<IChemicalApplicationForm>>;
    options?: string[];
    index?: number;
};

const FormInputText = ({ property, label, chemicalApplicationForm, setChemicalApplicationForm, options, index }: IProps) => {

    const dispatch = useDispatch();
    const { updateTotalAreaOfApp } = bindActionCreators(actionCreators, dispatch);

    const actionCreatorFactory = (data, property: string) => {
        if (property === ChemicalApplicationFormProperty.TOTAL_AREA_OF_APP) {
            updateTotalAreaOfApp({
                data,
                property
            });
        }
    }

    const handleChange = (event) => {
        if (index) {
            const objectToUpdate = { ...chemicalApplicationForm.chemicals[index], [property]: event.target.value.toString() };
            const reconstructedChemicalList = [...chemicalApplicationForm.chemicals]
            reconstructedChemicalList[index] = objectToUpdate
            setChemicalApplicationForm({ ...chemicalApplicationForm, chemicals: reconstructedChemicalList });
        } else {
            actionCreatorFactory(event.target.value, property)
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
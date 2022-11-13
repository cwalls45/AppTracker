import TextField from '@mui/material/TextField';
import { ChemicalApplicationFormProperty, ChemicalProperties, IChemicalApplicationForm } from '../../types/ApplicationFormDefaultValues';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../redux';

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
    const { updateTotalAreaOfApp, setChemicalAmount } = bindActionCreators(actionCreators, dispatch);
    const state = useSelector((state: State) => state);

    const actionCreatorFactory = (data, property: string) => {
        if (property === ChemicalApplicationFormProperty.TOTAL_AREA_OF_APP) {
            updateTotalAreaOfApp({
                data,
                property
            });
        } else if (property === ChemicalProperties.AMOUNT) {
            setChemicalAmount({
                data,
                property
            });
        }
    }

    const handleChange = (event) => {
        if (index !== undefined) {
            const objectToUpdate = { ...state.chemicalApplication.chemicals[index], [property]: event.target.value.toString() };
            const reconstructedChemicalList = [...state.chemicalApplication.chemicals]
            reconstructedChemicalList[index] = objectToUpdate
            actionCreatorFactory(reconstructedChemicalList, property)
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
import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ChemicalApplicationFormProperty, IChemicalApplicationForm } from '../../types/ApplicationFormDefaultValues';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';
import { State } from '../../redux/reducers';

interface IProps {
    label: string;
    property: string;
    options: any[];
    chemicalApplicationForm: IChemicalApplicationForm;
    setChemicalApplicationForm: React.Dispatch<React.SetStateAction<IChemicalApplicationForm>>;
}

const MultiSelect = ({ label, property, options, chemicalApplicationForm, setChemicalApplicationForm }: IProps) => {

    const dispatch = useDispatch();
    const { addAreaOfApplication } = bindActionCreators(actionCreators, dispatch);
    const state = useSelector((state: State) => state);

    const [multiSelectValue, setMultiSelectValue] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    const actionCreatorFactory = (data) => {
        if (property === ChemicalApplicationFormProperty.AREA_OF_APPLICATION) {
            addAreaOfApplication({
                data,
                property
            })
        }
    }

    const handleMultiSelectChange = (event, newMultiSelectValue: string[]) => {
        setMultiSelectValue(newMultiSelectValue);
        actionCreatorFactory(newMultiSelectValue);
        const newState = { ...chemicalApplicationForm, [property]: newMultiSelectValue };
        setChemicalApplicationForm(newState);
    };

    const handleInputChange = (event, newInputValue: string) => {
        setInputValue(newInputValue);
    };

    return (
        <Autocomplete
            multiple
            id="tags-standard"
            options={options}
            defaultValue={[]}
            value={multiSelectValue}
            onChange={(event, newMultiSelectValue: string[]) => handleMultiSelectChange(event, newMultiSelectValue)}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => handleInputChange(event, newInputValue)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant='outlined'
                    label={label}
                    placeholder={label}
                    error={false}
                    helperText={''}
                />
            )}
        />
    );
}

export default MultiSelect;
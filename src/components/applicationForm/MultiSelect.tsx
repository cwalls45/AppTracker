import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ChemicalApplicationFormProperty } from '../../types/chemicalApplicationFormDefaultValues';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chemicalApplicationFormActionCreators } from '../../redux';

interface IProps {
    label: string;
    property: string;
    options: any[];
}

const MultiSelect = ({ label, property, options }: IProps) => {

    const dispatch = useDispatch();
    const { addAreaOfApplication, updateTargetPests } = bindActionCreators(chemicalApplicationFormActionCreators, dispatch);

    const [multiSelectValue, setMultiSelectValue] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    const actionCreatorFactory = (data, property: string) => {
        if (property === ChemicalApplicationFormProperty.AREA_OF_APPLICATION) {
            addAreaOfApplication({
                data,
                property
            });
        } else if (property === ChemicalApplicationFormProperty.TARGET_PESTS) {
            updateTargetPests({
                data,
                property
            });
        }
    }

    const handleMultiSelectChange = (event, newMultiSelectValue: string[]) => {
        setMultiSelectValue(newMultiSelectValue);
        actionCreatorFactory(newMultiSelectValue, property);
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
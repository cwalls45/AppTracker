import { MenuItem, TextField, SelectChangeEvent, Select, FormControl, InputLabel } from "@mui/material"
import { IState } from "../../entities/environment";

interface IProps {
    value: string;
    setterFunction: React.Dispatch<SelectChangeEvent<string>>;
    label: string;
    options: IState[];
}

const SelectDropdown = ({ value, setterFunction, label, options }: IProps) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="select-dropdown-label">{label}</InputLabel>
            <Select
                value={value}
                onChange={setterFunction}
                label={label}
                autoWidth={true}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.name}
                        value={option.name}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectDropdown;
import { MenuItem, SelectChangeEvent, Select, FormControl, InputLabel, Grid } from "@mui/material"
import { IState } from "../../entities/account";

interface IProps {
    value: string;
    setterFunction: React.Dispatch<SelectChangeEvent<string>>;
    label: string;
    xs: number
    options: IState[];
}

const SelectDropdown = ({ value, setterFunction, label, xs, options }: IProps) => {
    return (
        <Grid item xs={xs}>
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
        </Grid>
    )
}

export default SelectDropdown;
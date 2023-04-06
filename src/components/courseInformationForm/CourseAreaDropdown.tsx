import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ICourseArea } from "../../entities/account";

interface IProps {
    courseAreas: ICourseArea[];
    setterFunction: React.Dispatch<React.SetStateAction<ICourseArea[]>>;
    label: string;
    xs: number
    options: string[];
    index: number;
    property: string
}

const CourseAreaDropdown = ({ courseAreas, setterFunction, label, xs, options, index, property }: IProps) => {

    const handleChange = (event: SelectChangeEvent<string>) => {
        const updatedArea = { ...courseAreas[index], [property]: event.target.value }
        const courseAreasUpdated = [...courseAreas];
        courseAreasUpdated[index] = updatedArea;
        setterFunction(courseAreasUpdated);
    }

    return (
        <Grid item xs={xs}>
            <FormControl fullWidth>
                <InputLabel id="select-dropdown-label">{label}</InputLabel>
                <Select
                    value={courseAreas[index][property]}
                    onChange={handleChange}
                    label={label}
                    autoWidth={true}
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option}
                            value={option}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}

export default CourseAreaDropdown;
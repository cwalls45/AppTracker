import { Grid } from "@mui/material";
import { ICourseArea, turfTypeOptions } from "../../entities/environment";
import SelectDropdown from "./SelectDropdown";

interface IProps {
    courseAreas: ICourseArea;
    setCourseAreas: React.Dispatch<React.SetStateAction<ICourseArea[]>>;
    index: number
}

const AreaOfCourse = () => {
    return (
        <Grid container sx={{ width: '50vw' }}>
            <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
            </Grid>
        </Grid>
    )
}

export default AreaOfCourse;
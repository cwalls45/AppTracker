import { Grid } from "@mui/material";
import { ICourseArea, turfTypeOptions } from "../../entities/environment";
import CourseAreaDropdown from "./CourseAreaDropdown";

interface IProps {
    courseAreas: ICourseArea[];
    setCourseAreas: React.Dispatch<React.SetStateAction<ICourseArea[]>>;
    index: number
}

const AreaOfCourse = ({ courseAreas, setCourseAreas, index }: IProps) => {
    return (
        <Grid container sx={{ width: '50vw' }}>
            <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                <CourseAreaDropdown
                    courseAreas={courseAreas}
                    setterFunction={setCourseAreas}
                    label='Type of Turf'
                    xs={6}
                    options={turfTypeOptions}
                    index={index}
                    property='turfType'
                />
                <CourseAreaDropdown
                    courseAreas={courseAreas}
                    setterFunction={setCourseAreas}
                    label='Units'
                    xs={6}
                    options={['Acres', 'Sq. Feet']}
                    index={index}
                    property='sizeUnit'
                />
            </Grid>
        </Grid>
    )
}

export default AreaOfCourse;
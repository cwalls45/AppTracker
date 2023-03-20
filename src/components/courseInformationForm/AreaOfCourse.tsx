import { Divider, Grid } from "@mui/material";
import { areaOfCourseOptions, ICourseArea, turfTypeOptions } from "../../entities/environment";
import CourseAreaDropdown from "./CourseAreaDropdown";
import SizeOfArea from "./SizeOfArea";

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
                    label='Area of Course'
                    xs={6}
                    options={areaOfCourseOptions}
                    index={index}
                    property='area'
                />
                <SizeOfArea
                    courseAreas={courseAreas}
                    setterFunction={setCourseAreas}
                    label='Size of Area'
                    xs={3}
                    index={index}
                    property='size'
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
                <CourseAreaDropdown
                    courseAreas={courseAreas}
                    setterFunction={setCourseAreas}
                    label='Type of Turf'
                    xs={6}
                    options={turfTypeOptions}
                    index={index}
                    property='turfType'
                />
                <Divider />
            </Grid>
        </Grid>
    )
}

export default AreaOfCourse;
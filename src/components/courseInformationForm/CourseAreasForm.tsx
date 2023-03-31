import { useState } from "react";
import Grid from "@mui/material/Grid"
import { createInitialCourseArea, ICourseArea } from "../../entities/account";
import AreaOfCourse from "./AreaOfCourse";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CourseAreasForm = () => {

  const [courseAreas, setCourseAreas] = useState<ICourseArea[]>([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidSizeOfArea()) {
      console.log('Area of course is not valid: ', courseAreas);
      return;
    }
    console.log('submited')
  }

  const handleAddCourseArea = (event) => {
    const intialCourseArea = createInitialCourseArea();
    setCourseAreas([...courseAreas, intialCourseArea])
  };

  const isValidSizeOfArea = () => {
    return courseAreas.every((courseArea) => /^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/.test(courseArea.size) === true)
  }

  return (
    <form onSubmit={handleSubmit}>
        <Grid container justifyContent='center' alignContent='space-evenly' sx={{ height: '100vh', width: 'auto' }}>
          <Grid>
            <Grid container justifyContent='center'>
                <Typography variant="h4" component="div">
                    Course Area Information
                </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <Grid item>
                    <Button variant='contained' onClick={handleAddCourseArea}>
                        Add Area of Course
                    </Button>
                </Grid>
            </Grid>
            {courseAreas.map((area, index) =>
              <AreaOfCourse
                key={index}
                courseAreas={courseAreas}
                setCourseAreas={setCourseAreas}
                index={index}
              />
            )}
            </Grid>
        </Grid>
      </form>
  )
}

export default CourseAreasForm;
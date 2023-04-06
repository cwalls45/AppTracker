import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid"
import { createInitialCourseArea, ICourseArea, AreaOfCourse as AreaOfCourseEnum } from "../../entities/account";
import AreaOfCourse from "./AreaOfCourse";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { accountActionCreators } from "../../redux";
import { useNavigate } from "react-router";
import { Paths } from "../../entities/paths";

const CourseAreasForm = () => {

  const [courseAreas, setCourseAreas] = useState<ICourseArea[]>([]);

  const dispatch = useDispatch();
  const { addCourseAreas } = bindActionCreators(accountActionCreators, dispatch);

  const navigate = useNavigate();
  const navigateToCalendar = () => navigate(Paths.CALENDAR);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidSizeOfArea()) {
      console.log('Area of course is not valid: ', courseAreas);
      return;
    }
    addCourseAreas(courseAreas, navigateToCalendar);
  }

  const handleAddCourseArea = (event) => {
    const intialCourseArea = createInitialCourseArea();
    setCourseAreas([...courseAreas, intialCourseArea])
  };

  const isValidSizeOfArea = () => {
    return courseAreas.every((courseArea) => /^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/.test(courseArea.size) === true)
  };

  const createInitialAreas = () => {
    const areas = [AreaOfCourseEnum.GREENS, AreaOfCourseEnum.FAIRWAY, AreaOfCourseEnum.TEES];
    const initialAreas = areas.map(area => {
      const courseAreaShell = createInitialCourseArea();
      courseAreaShell.area = area;
      return courseAreaShell;
    });

    return initialAreas;
  };

  useEffect(() => {
    const initialAreas = createInitialAreas();
    setCourseAreas(initialAreas);
  }, []);


  return (
    <form onSubmit={handleSubmit}>
      <Grid container justifyContent='center' alignContent='space-evenly' sx={{ height: '100vh', width: 'auto' }}>
        <Grid>
          <Grid container justifyContent='center'>
            <Typography variant="h4" component="div">
              Course Area Information
            </Typography>
          </Grid>
          {courseAreas.map((area, index) =>
            <AreaOfCourse
              key={index}
              courseAreas={courseAreas}
              setCourseAreas={setCourseAreas}
              index={index}
            />
          )}
          <Grid container item xs={12} justifyContent='center'>
            <Grid item>
              <Button variant='contained' onClick={handleAddCourseArea}>
                Add Area of Course
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
            <Grid item>
              <Button variant='contained' onClick={handleSubmit}>
                Complete Signing Up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default CourseAreasForm;
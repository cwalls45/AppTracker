import { useEffect, useState } from "react";
import { Button, Divider, Grid, SelectChangeEvent, Typography } from "@mui/material";
import { State } from 'country-state-city';
import { createInitialCourseArea, ICourseArea, IState } from "../../entities/environment";
import GeneralCourseInformation from "./GeneralCourseInformation";
import AreaOfCourse from "./AreaOfCourse";
import { isEmpty } from "lodash";

const CourseInformation = () => {
    const countryCode = 'US';

    const [states, setStates] = useState<IState[]>([]);
    const [courseName, setCourseName] = useState('');
    const [addressLineOne, setAddressLineOne] = useState('');
    const [addressLineTwo, setAddressLineTwo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [courseAreas, setCourseAreas] = useState<ICourseArea[]>([]);

    const handleStateChange = (event: SelectChangeEvent) => setState(event.target.value);

    const handleAddCourseArea = (event) => {
        const intialCourseArea = createInitialCourseArea();
        setCourseAreas([...courseAreas, intialCourseArea])
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(isValidSizeOfArea())
        console.log('COURSEAREAS: ', courseAreas)
    }

    const isValidSizeOfArea = () => {
        // TODO: fix regex to only allow . and not other symbols
        return courseAreas.every((courseArea) => /[0-9]/.test(courseArea.size) === true)
    }

    useEffect(() => {
        const states = State.getStatesOfCountry(countryCode).map((state) => ({
            name: state.name,
            abbreviation: state.isoCode,
            label: `${state.name} - ${state.isoCode}`
        }));
        setStates(states);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <Grid container justifyContent='center' alignContent='space-evenly' sx={{ height: '100vh', width: 'auto' }}>
                <Grid>
                    <GeneralCourseInformation
                        courseName={courseName}
                        setCourseName={setCourseName}
                        addressLineOne={addressLineOne}
                        setAddressLineOne={setAddressLineOne}
                        addressLineTwo={addressLineTwo}
                        setAddressLineTwo={setAddressLineTwo}
                        city={city}
                        setCity={setCity}
                        state={state}
                        handleStateChange={handleStateChange}
                        states={states}
                    />
                    <Divider />
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
                    {!isEmpty(courseAreas) &&
                    <Grid container item xs={12} justifyContent='center'>
                        <Grid item>
                            <Button type='submit' variant='contained' sx={{ flexGrow: 1, width: '15em' }}>
                                Finish Signing Up
                            </Button>
                        </Grid>
                    </Grid>}
                </Grid>
            </Grid>
        </form>
    )
}

export default CourseInformation;
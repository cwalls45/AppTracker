import { useEffect, useState } from "react";
import { Button, Grid, SelectChangeEvent } from "@mui/material";
import { State } from 'country-state-city';
import { IState } from "../../entities/account";
import GeneralCourseInformation from "./GeneralCourseInformation";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { accountActionCreators } from "../../redux";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../entities/paths";

const CourseInformation = () => {
    const countryCode = 'US';

    const [states, setStates] = useState<IState[]>([]);
    const [courseName, setCourseName] = useState('');
    const [addressLineOne, setAddressLineOne] = useState('');
    const [addressLineTwo, setAddressLineTwo] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');

    const dispatch = useDispatch();
    const { addCourseInfo } = bindActionCreators(accountActionCreators, dispatch);

    const navigate = useNavigate();
    const navigateToCourseAreas = () => navigate(Paths.COURSE_AREAS);

    const handleStateChange = (event: SelectChangeEvent) => setState(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        const courseInfo = {
            courseName,
            address1: addressLineOne,
            address2: addressLineTwo,
            city,
            zipCode,
            state
        };

        addCourseInfo(courseInfo, navigateToCourseAreas);
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
                        zipCode={zipCode}
                        setZipCode={setZipCode}
                        state={state}
                        handleStateChange={handleStateChange}
                        states={states}
                    />
                        <Grid container item xs={12} justifyContent='center'>
                            <Grid item>
                                <Button type='submit' variant='contained' sx={{ flexGrow: 1, width: '15em' }}>
                                    Submit Course Information
                                </Button>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default CourseInformation;
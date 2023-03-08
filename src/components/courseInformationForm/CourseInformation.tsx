import { useEffect, useState } from "react";
import { Grid, Typography, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import FormTextField from "../inventory/FormTextField";
import { State } from 'country-state-city';
import { IState } from "../../entities/environment";
import SelectDropdown from "./SelectDropdown";
import GeneralCourseInformation from "./GeneralCourseInformation";

const CourseInformation = () => {
    const countryCode = 'US';

    const [states, setStates] = useState<IState[]>([]);
    const [courseName, setCourseName] = useState('');
    const [addressLineOne, setAddressLineOne] = useState('');
    const [addressLineTwo, setAddressLineTwo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const handleStateChange = (event: SelectChangeEvent) => setState(event.target.value);

    useEffect(() => {
        const states = State.getStatesOfCountry(countryCode).map((state) => ({
            name: state.name,
            abbreviation: state.isoCode,
            label: `${state.name} - ${state.isoCode}`
        }));
        setStates(states);
    }, []);

    return (
        <form>
            <Grid container justifyContent='center' alignItems='center' sx={{ height: '100vh', width: 'auto' }}>
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
            </Grid>
        </form>
    )
}

export default CourseInformation;
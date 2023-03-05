import { useEffect, useState } from "react";
import { Grid, Typography, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import FormTextField from "../inventory/FormTextField";
import { State } from 'country-state-city';
import { IState } from "../../entities/environment";

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
                <Grid container justifyContent='center'>
                    <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                        <Grid container justifyContent='center'>
                            <Typography variant="h4" component="div">
                                General Course Information
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <FormTextField
                                label='Course Name'
                                value={courseName}
                                setterFunction={setCourseName}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormTextField
                                label='Address Line 1'
                                value={addressLineOne}
                                setterFunction={setAddressLineOne}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormTextField
                                label='Address Line 2'
                                value={addressLineTwo}
                                setterFunction={setAddressLineTwo}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormTextField
                                label='City'
                                value={city}
                                setterFunction={setCity}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Select
                                value={state}
                                onChange={handleStateChange}
                                label='State'
                            >
                                {states.map((state) => (
                                    <MenuItem
                                        key={state.name}
                                        value={state.name}
                                    >
                                        {state.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default CourseInformation;
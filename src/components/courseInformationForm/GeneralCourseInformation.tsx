import { Grid, SelectChangeEvent, Typography } from "@mui/material";
import { IState } from "../../entities/environment";
import FormTextField from "../inventory/FormTextField";
import SelectDropdown from "./SelectDropdown";

interface IProps {
    courseName: string;
    setCourseName: React.Dispatch<React.SetStateAction<string>>;
    addressLineOne: string;
    setAddressLineOne: React.Dispatch<React.SetStateAction<string>>;
    addressLineTwo: string;
    setAddressLineTwo: React.Dispatch<React.SetStateAction<string>>;
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    state: string;
    handleStateChange: React.Dispatch<SelectChangeEvent<string>>;
    states: IState[];
}

const GeneralCourseInformation = ({
    courseName,
    setCourseName,
    addressLineOne,
    setAddressLineOne,
    addressLineTwo,
    setAddressLineTwo,
    city,
    setCity,
    state,
    handleStateChange,
    states
}: IProps) => {
    return (
        <Grid container justifyContent='center' alignItems='center' sx={{ height: '100vh', width: '50vw' }}>
            <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                <Grid container justifyContent='center'>
                    <Typography variant="h4" component="div">
                        General Course Information
                    </Typography>
                </Grid>
                <FormTextField
                    label='Course Name'
                    value={courseName}
                    setterFunction={setCourseName}
                    xs={7}
                />
                <FormTextField
                    label='Address Line 1'
                    value={addressLineOne}
                    setterFunction={setAddressLineOne}
                    xs={7}
                />
                <FormTextField
                    label='Address Line 2'
                    value={addressLineTwo}
                    setterFunction={setAddressLineTwo}
                    xs={7}
                />
                <FormTextField
                    label='City'
                    value={city}
                    setterFunction={setCity}
                    xs={7}
                />
                <Grid item xs={3}>
                    <SelectDropdown
                        value={state}
                        setterFunction={handleStateChange}
                        label='State'
                        options={states}
                    />
                </Grid>
            </Grid>
        </Grid >
    )
}

export default GeneralCourseInformation;
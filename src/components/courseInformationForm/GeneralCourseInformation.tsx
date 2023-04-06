import { Grid, SelectChangeEvent, Typography } from "@mui/material";
import { IState } from "../../entities/account";
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
    zipCode: string;
    setZipCode: React.Dispatch<React.SetStateAction<string>>;
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
    zipCode,
    setZipCode,
    state,
    handleStateChange,
    states
}: IProps) => {
    return (
        <Grid container sx={{ width: '50vw' }}>
            <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                <Grid container justifyContent='center'>
                    <Typography variant="h4" component="div">
                        Course Information
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
                    required={false}
                />
                <FormTextField
                    label='City'
                    value={city}
                    setterFunction={setCity}
                    xs={7}
                />
                <FormTextField
                    label='Zip Code'
                    value={zipCode}
                    setterFunction={setZipCode}
                    xs={3.5}
                />
                <SelectDropdown
                    value={state}
                    setterFunction={handleStateChange}
                    label='State'
                    xs={3.5}
                    options={states}
                />
            </Grid>
        </Grid >
    )
}

export default GeneralCourseInformation;
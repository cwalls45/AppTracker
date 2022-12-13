import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField";

interface IProps {
    label: string;
    options: string[];
    stateValue: string
    setterFunction: React.Dispatch<React.SetStateAction<string>>;
    isSearching: boolean;
};

const AutoCompleteDropDown = ({ label, options, stateValue, setterFunction, isSearching }: IProps) => {

    const handleChange = (event, newInputValue: string) => {
        setterFunction(newInputValue);
    }

    return (
        <Grid>
            <Autocomplete
                options={options}
                filterOptions={(searchResults) => searchResults}
                loading={isSearching}
                inputValue={stateValue}
                onInputChange={(event, newInputValue) => handleChange(event, newInputValue)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
                        variant='outlined'
                        error={false}
                        helperText={''}
                    />
                )}
                isOptionEqualToValue={(option, value) => {
                    if (option === value || !value) return true
                    else return false;
                }}
            />
        </Grid>
    )
};

export default AutoCompleteDropDown;
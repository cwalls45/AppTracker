import { useState, useEffect } from 'react';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs'
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { IChemicalApplicationForm } from '../../types/ApplicationFormDefaultValues';

interface IProps {
    label: string;
    property: string;
    chemicalApplicationForm: IChemicalApplicationForm;
    setChemicalApplicationForm: React.Dispatch<React.SetStateAction<IChemicalApplicationForm>>;
};

const DatePickerCalendar = ({ label, property, chemicalApplicationForm, setChemicalApplicationForm }: IProps) => {

    const [date, setDate] = useState<Dayjs>(dayjs);

    const handleDateChange = (newDate: Dayjs) => {
        const formattedDate = dayjs(newDate).format('MM/DD/YYYY');
        const newState = { ...chemicalApplicationForm, [property]: formattedDate };
        setDate(newDate);
        setChemicalApplicationForm(newState);
    };

    useEffect(() => {
        const formattedDate = dayjs(date).format('MM/DD/YYYY');
        const newState = { ...chemicalApplicationForm, [property]: formattedDate };
        setChemicalApplicationForm(newState);
    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={date}
                label={label}
                onChange={handleDateChange}
                renderInput={(params) => (
                    <TextField {...params} />
                )}
            />
        </LocalizationProvider>
    )
};

export default DatePickerCalendar;
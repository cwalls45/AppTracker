import { useState, useEffect } from 'react';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chemicalApplicationFormActionCreators } from '../../redux';
import { State } from '../../redux/reducers';

interface IProps {
    label: string;
    property: string;
};

const DatePickerCalendar = ({ label, property }: IProps) => {

    const dispatch = useDispatch();
    const { updateDateOfApplication } = bindActionCreators(chemicalApplicationFormActionCreators, dispatch);
    const dateOfApplication = useSelector((state: State) => state.chemicalApplication.dateOfApplication);

    const [date, setDate] = useState<Dayjs>(dayjs);

    const handleDateChange = (newDate: Dayjs) => {
        const formattedDate = dayjs(newDate).format('MM/DD/YYYY');
        setDate(newDate);
        updateDateOfApplication({
            data: formattedDate,
            property
        });
    };

    useEffect(() => {
        const formattedDate = dayjs(date).format('MM/DD/YYYY');
        updateDateOfApplication({
            data: formattedDate,
            property
        });
    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={date}
                label={label}
                onChange={handleDateChange}
            />
        </LocalizationProvider>
    )
};

export default DatePickerCalendar;
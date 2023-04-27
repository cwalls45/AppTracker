import { useEffect } from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Scheduler } from '@aldabil/react-scheduler';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../entities/paths';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { applicationSummaryActionCreators, State } from '../redux';


const Calendar = () => {

    const dispatch = useDispatch();
    const { fetchApplicationEvents } = bindActionCreators(applicationSummaryActionCreators, dispatch);
    const state = useSelector((state: State) => state);

    const navigate = useNavigate();

    const navigateToCreateApplication = () => navigate(Paths.CREATE_APPLICATION);

    useEffect(() => {
        fetchApplicationEvents();
    }, []);

    return (
        <Container>
            <Scheduler
                view='month'
                events={state.applicationSummaries}
                month={{
                    weekDays: [0, 1, 2, 3, 4, 5, 6],
                    weekStartOn: 0,
                    startHour: 1,
                    endHour: 23,
                    cellRenderer: ({ height, start, onClick, ...props }) => {
                        return (
                            <Button
                                onClick={navigateToCreateApplication}
                            />
                        )
                    }
                }}
                week={{
                    weekDays: [0, 1, 2, 3, 4, 5, 6],
                    weekStartOn: 0,
                    startHour: 1,
                    endHour: 23,
                    step: 60,
                    cellRenderer: ({ height, start, onClick, ...props }) => {
                        return (
                            <Button
                                onClick={navigateToCreateApplication}
                            />
                        )
                    }
                }}

            />
        </Container>
    );
}

export default Calendar;
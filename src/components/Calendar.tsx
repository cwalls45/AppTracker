import Container from '@mui/material/Container';
import { Scheduler } from '@aldabil/react-scheduler';

const Calendar = () => {
    return (
        <Container>
            <Scheduler view='month' />
        </Container>
    );
}

export default Calendar;
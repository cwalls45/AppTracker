import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';
import Calendar from './components/Calendar';
import ApplicationForm from './components/applicationForm/ApplicationForm';
import NavigationBar from './components/navigation/NavigationBar';
import Login from './components/Login';
import { Paths } from './entities/paths';
import Inventory from './components/inventory/Inventory';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <NavigationBar isLoggedIn={isLoggedIn} />
                <Routes>
                    <Route path={Paths.ROOT} element={<Navigate to={Paths.CALENDAR} replace />} />
                    <Route path={Paths.LOGIN} element={<Login />} />
                    <Route path={Paths.CALENDAR} element={<Calendar />} />
                    <Route path={Paths.CREATE_APPLICATION} element={<ApplicationForm />} />
                    <Route path={Paths.INVENTORY} element={<Inventory />} />
                </Routes>
            </Router>
        </ThemeProvider >
    );
}

export default App;
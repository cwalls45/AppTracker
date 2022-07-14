import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Calendar from './components/Calendar';
import ApplicationForm from './components/applicationForm/ApplicationForm';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <NavigationBar isLoggedIn={isLoggedIn} />
                <Routes>
                    <Route path='/' element={<Navigate to="/calendar" replace />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path='/createApplication' element={<ApplicationForm />} />
                </Routes>
            </Router>
        </ThemeProvider >
    );
}

export default App;
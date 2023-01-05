import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';
import Calendar from './components/Calendar';
import ApplicationForm from './components/applicationForm/ApplicationForm';
import NavigationBar from './components/navigation/NavigationBar';
import Login from './components/login/Login';
import { Paths } from './entities/paths';
import Inventory from './components/inventory/Inventory';
import ProtectedWrapper from './components/login/ProtectedWrapper';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { environmentActionCreators } from './redux';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();
    const { setAPIUrl } = bindActionCreators(environmentActionCreators, dispatch);

    useEffect(() => {
        setAPIUrl();
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <Router>
                <NavigationBar isLoggedIn={isLoggedIn} />
                <Routes>
                    <Route
                        path={Paths.ROOT}
                        element={
                            <ProtectedWrapper isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                                <Calendar />
                            </ProtectedWrapper>
                        }
                    />
                    <Route
                        path={Paths.CALENDAR}
                        element={
                            <ProtectedWrapper isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                                <Calendar />
                            </ProtectedWrapper>
                        }
                    />
                    <Route
                        path={Paths.CREATE_APPLICATION}
                        element={
                            <ProtectedWrapper isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                                <ApplicationForm />
                            </ProtectedWrapper>
                        }
                    />
                    <Route
                        path={Paths.INVENTORY}
                        element={
                            <ProtectedWrapper isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                                <Inventory />
                            </ProtectedWrapper>
                        }
                    />
                    <Route path={Paths.LOGIN} element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                </Routes>
            </Router>
        </ThemeProvider >
    );
}

export default App;
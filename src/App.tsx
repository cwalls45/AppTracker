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
import { accountActionCreators, environmentActionCreators } from './redux';
import { useCookies } from 'react-cookie';
import SignUpForm from './components/login/SignUpForm';
import CourseInformation from './components/courseInformationForm/CourseInformation';
import CourseAreasForm from './components/courseInformationForm/CourseAreasForm';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();
    const { setAPIUrl } = bindActionCreators(environmentActionCreators, dispatch);
    const { setAccountId } = bindActionCreators(accountActionCreators, dispatch);

    const [cookies] = useCookies();

    useEffect(() => {

        setAPIUrl();

        if (cookies.TurfTrackerAccessToken && cookies.TurfTrackerRefreshToken) {
            setIsLoggedIn(true);
            setAccountId('accountId-123');
        }

    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                {isLoggedIn && <NavigationBar />}
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
                    <Route path={Paths.SIGNUP} element={<SignUpForm />} />
                    <Route path={Paths.COURSE_INFO} element={<CourseInformation />} />
                    <Route path={Paths.COURSE_AREAS} element={<CourseAreasForm />} />
                </Routes>
            </Router>
        </ThemeProvider >
    );
}

export default App;
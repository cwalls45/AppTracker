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
import { accountActionCreators, environmentActionCreators, State } from './redux';
import { useCookies } from 'react-cookie';
import SignUpForm from './components/login/SignUpForm';
import CourseInformation from './components/courseInformationForm/CourseInformation';
import CourseAreasForm from './components/courseInformationForm/CourseAreasForm';
import Loading from './components/loading/Loading';
import { getUserEmailWithAccessToken } from './utils/authenticateUser';
import Reports from './components/reports/Reports';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();
    const { setAPIUrl } = bindActionCreators(environmentActionCreators, dispatch);
    const { getUserByUserName } = bindActionCreators(accountActionCreators, dispatch);

    const [cookies] = useCookies();

    useEffect(() => {

        const fetchUser = async (token: string) => {
            const user = await getUserEmailWithAccessToken(token)
            return user;
        }

        setAPIUrl();

        if (cookies.TurfTrackerAccessToken && cookies.TurfTrackerRefreshToken) {
            fetchUser(cookies.TurfTrackerAccessToken)
                .then(res => {
                    getUserByUserName(res.userName);
                });
            setIsLoggedIn(true);
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
                    <Route
                        path={Paths.REPORTS}
                        element={
                            <ProtectedWrapper isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                                <Reports />
                            </ProtectedWrapper>
                        }
                    />
                    <Route path={Paths.LOGIN} element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path={Paths.SIGNUP} element={<SignUpForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path={Paths.COURSE_INFO} element={<CourseInformation />} />
                    <Route path={Paths.COURSE_AREAS} element={<CourseAreasForm />} />
                </Routes>
                <Loading />
            </Router>
        </ThemeProvider >
    );
}

export default App;
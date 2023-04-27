import axios from "axios";
import { Dispatch } from "redux";
import { ICourseArea, ICourseInfo, IUser } from "../../entities/account";
import { AcccountActionTypes } from "../../entities/accountActions";
import { AccountActions } from "../action-types/accountActions";
import { State } from "../reducers";
import { CookieSetOptions } from 'universal-cookie';
import { EnvironmentActions } from "../action-types/environmentActions";
import { EnvironmentActionTypes } from "../../entities/environmentActionTypes";

export const setAccountId = (accountId: string) => {
    return (dispatch: Dispatch<AcccountActionTypes>) => dispatch({
        type: AccountActions.SET_ACCOUNT_ID,
        payload: accountId
    });
}

export const setUser = (user: IUser) => {
    return (dispatch: Dispatch<AcccountActionTypes>) => dispatch({
        type: AccountActions.SET_USER,
        payload: user
    })
}

export const setCourseInfo = (courseInfo: ICourseInfo) => {
    return (dispatch: Dispatch<AcccountActionTypes>) => dispatch({
        type: AccountActions.SET_COURSE_INFO,
        payload: courseInfo
    })
}

export const setCourseAreas = (courseAreas: ICourseArea[]) => {
    return (dispatch: Dispatch<AcccountActionTypes>) => dispatch({
        type: AccountActions.SET_COURSE_AREAS,
        payload: courseAreas
    })
}

export const signUpUser = (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    navigateToCourseInformation: () => void,
    setCookies: ((name: string, value: any, options?: CookieSetOptions | undefined) => void),
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
) => {
    return async (dispatch: Dispatch<AcccountActionTypes | EnvironmentActionTypes>, getState: () => State) => {
        try {
            const { environment } = getState();

            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: true
            });

            const { data } = await axios.post(`${environment.apiUrl}/auth/createUser`, {
                signUp: {
                    firstName,
                    lastName,
                    email,
                    password
                }
            });

            const { AccessToken, RefreshToken, ExpiresIn } = data.user;

            setCookies("TurfTrackerAccessToken", AccessToken, { maxAge: ExpiresIn });
            setCookies("TurfTrackerRefreshToken", RefreshToken, { maxAge: ExpiresIn });
            setIsLoggedIn(true);

            dispatch({
                type: AccountActions.SET_ACCOUNT_ID,
                payload: data.accountInfo.accountId
            });

            dispatch({
                type: AccountActions.SET_USER,
                payload: data.accountInfo.user
            });

            navigateToCourseInformation();

            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: false
            });

        } catch (error) {
            console.log(`Error signing up ${email}: ${error}`);

            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: false
            });
        }
    };
}

export const addCourseInfo = (courseInfo: ICourseInfo, navigateToCourseAreas: () => void) => {
    return async (dispatch: Dispatch<AcccountActionTypes | EnvironmentActionTypes>, getState: () => State) => {

        const { environment, account } = getState();

        try {

            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: true
            });

            await axios.post(`${environment.apiUrl}/auth/addCourseInfo`, {
                courseInfo,
                accountId: account.accountId,
                email: account.user.email
            });

            dispatch({
                type: AccountActions.SET_COURSE_INFO,
                payload: courseInfo
            });

            navigateToCourseAreas();

            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: false
            });

        } catch (error) {
            console.log(`Error adding courseInfo to account ${account.accountId}: ${error} : ${courseInfo}`);

            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: false
            });
        }
    };
}

export const addCourseAreas = (courseAreas: ICourseArea[], navigateToCalendar: () => void) => {
    return async (dispatch: Dispatch<AcccountActionTypes | EnvironmentActionTypes>, getState: () => State) => {

        const { environment, account } = getState();

        try {

            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: true
            });

            const courseAreasResponse = await axios.post(`${environment.apiUrl}/auth/addCourseAreas`, {
                courseAreas,
                accountId: account.accountId,
                email: account.user.email
            });

            dispatch({
                type: AccountActions.SET_COURSE_AREAS,
                payload: courseAreasResponse.data.courseAreas
            });

            navigateToCalendar();

            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: false
            });

        } catch (error) {
            console.log(`Error adding courseAreas to account ${account.accountId}: ${error} : ${JSON.stringify(courseAreas, null, 2)}`);

            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: false
            });
        }
    };
}

export const getUserByUserName = (userName: string) => {
    return async (dispatch: Dispatch<AcccountActionTypes | EnvironmentActionTypes>, getState: () => State) => {

        const { environment } = getState();

        try {

            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: true
            });

            const response = await axios.get(`${environment.apiUrl}/auth/user/${userName}`);

            dispatch({
                type: AccountActions.SET_ACCOUNT_ID,
                payload: response.data.user.accountId
            });

            dispatch({
                type: AccountActions.SET_USER,
                payload: response.data.user.user
            });

            dispatch({
                type: AccountActions.SET_COURSE_INFO,
                payload: response.data.user.courseInfo
            });

            dispatch({
                type: AccountActions.SET_COURSE_AREAS,
                payload: response.data.user.courseAreas
            });


            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: false
            });

        } catch (error) {
            console.log(`Error getting user ${userName}: ${error}`);

            dispatch({
                type: EnvironmentActions.IS_LOADING,
                payload: false
            });
        }
    };
}
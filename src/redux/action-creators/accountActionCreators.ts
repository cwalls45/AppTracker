import axios from "axios";
import { Dispatch } from "redux";
import { ICourseArea, ICourseInfo, IUser } from "../../entities/account";
import { AcccountActions } from "../../entities/accountActions";
import { AccountActionTypes } from "../action-types/accountActionTypes";
import { State } from "../reducers";
import { CookieSetOptions } from 'universal-cookie';
import { EnvironmentActionsTypes } from "../action-types/environmentActionTypes";
import { EnvironmentActions } from "../../entities/environmentActions";

export const setAccountId = (accountId: string) => {
    return (dispatch: Dispatch<AcccountActions>) => dispatch({
        type: AccountActionTypes.SET_ACCOUNT_ID,
        payload: accountId
    });
}

export const setUser = (user: IUser) => {
    return (dispatch: Dispatch<AcccountActions>) => dispatch({
        type: AccountActionTypes.SET_USER,
        payload: user
    })
}

export const setCourseInfo = (courseInfo: ICourseInfo) => {
    return (dispatch: Dispatch<AcccountActions>) => dispatch({
        type: AccountActionTypes.SET_COURSE_INFO,
        payload: courseInfo
    })
}

export const setCourseAreas = (courseAreas: ICourseArea[]) => {
    return (dispatch: Dispatch<AcccountActions>) => dispatch({
        type: AccountActionTypes.SET_COURSE_AREAS,
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
    return async (dispatch: Dispatch<AcccountActions | EnvironmentActions>, getState: () => State) => {
        try {
            const { environment } = getState();

            dispatch({
                type: EnvironmentActionsTypes.IS_LOADING,
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
                type: AccountActionTypes.SET_ACCOUNT_ID,
                payload: data.accountInfo.accountId
            });

            dispatch({
                type: AccountActionTypes.SET_USER,
                payload: data.accountInfo.user
            });

            navigateToCourseInformation();

            dispatch({
                type: EnvironmentActionsTypes.IS_LOADING,
                payload: false
            });

        } catch (error) {
            console.log(`Error signing up ${email}: ${error}`);

            dispatch({
                type: EnvironmentActionsTypes.IS_LOADING,
                payload: false
            });
        }
    };
}

export const addCourseInfo = (courseInfo: ICourseInfo, navigateToCourseAreas: () => void) => {
    return async (dispatch: Dispatch<AcccountActions | EnvironmentActions>, getState: () => State) => {

        const { environment, account } = getState();

        try {

            dispatch({
                type: EnvironmentActionsTypes.IS_LOADING,
                payload: true
            });

            await axios.post(`${environment.apiUrl}/auth/addCourseInfo`, {
                courseInfo,
                accountId: account.accountId,
                email: account.user.email
            });

            dispatch({
                type: AccountActionTypes.SET_COURSE_INFO,
                payload: courseInfo
            });

            navigateToCourseAreas();

            dispatch({
                type: EnvironmentActionsTypes.IS_LOADING,
                payload: false
            });

        } catch (error) {
            console.log(`Error adding courseInfo to account ${account.accountId}: ${error} : ${courseInfo}`);

            dispatch({
                type: EnvironmentActionsTypes.IS_LOADING,
                payload: false
            });
        }
    };
}

export const addCourseAreas = (courseAreas: ICourseArea[], navigateToCalendar: () => void) => {
    return async (dispatch: Dispatch<AcccountActions | EnvironmentActions>, getState: () => State) => {

        const { environment, account } = getState();

        try {

            dispatch({
                type: EnvironmentActionsTypes.IS_LOADING,
                payload: true
            });

            const courseAreasResponse = await axios.post(`${environment.apiUrl}/auth/addCourseAreas`, {
                courseAreas,
                accountId: account.accountId,
                email: account.user.email
            });

            dispatch({
                type: AccountActionTypes.SET_COURSE_AREAS,
                payload: courseAreasResponse.data.courseAreas
            });

            navigateToCalendar();

            dispatch({
                type: EnvironmentActionsTypes.IS_LOADING,
                payload: false
            });

        } catch (error) {
            console.log(`Error adding courseAreas to account ${account.accountId}: ${error} : ${JSON.stringify(courseAreas, null, 2)}`);

            dispatch({
                type: EnvironmentActionsTypes.IS_LOADING,
                payload: false
            });
        }
    };
}
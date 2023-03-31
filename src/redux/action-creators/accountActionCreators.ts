import axios from "axios";
import { Dispatch } from "redux";
import { ICourseArea, ICourseInfo } from "../../entities/account";
import { AcccountActions } from "../../entities/accountActions";
import { AccountActionTypes } from "../action-types/accountActionTypes";
import { State } from "../reducers";

export const setAccountId = (accountId: string) => {
    return (dispatch: Dispatch<AcccountActions>) => dispatch({
        type: AccountActionTypes.SET_ACCOUNT_ID,
        payload: accountId
    });
}

export const signUpUser = (firstName: string, lastName: string, email: string, password: string, navigateToCourseInformation: () => void) => {
    return async (dispatch: Dispatch<AcccountActions>, getState: () => State) => {
        try {
            const { environment } = getState();

            // const response = await axios.post(`${environment.apiUrl}/auth/createUser`, {
            //     signUp: {
            //         firstName,
            //         lastName,
            //         email,
            //         password
            //     }
            // });

            // dispatch({
            //     type: AccountActionTypes.SET_ACCOUNT_ID,
            //     payload: response.data.accountInfo.accountId
            // });

            // dispatch({
            //     type: AccountActionTypes.SET_USER,
            //     payload: response.data.accountInfo.user
            // });

            navigateToCourseInformation();
        } catch (error) {
            console.log(`Error signing up ${email}: ${error}`)
        }
    };
}

export const addCourseInfo = (courseInfo: ICourseInfo, navigateToCourseAreas: () => void) => {
    return async (dispatch: Dispatch<AcccountActions>, getState: () => State) => {

        const { environment, account } = getState();

        try {

            // await axios.post(`${environment.apiUrl}/auth/addCourseInfo`, {
            //     courseInfo,
            //     accountId: account.accountId,
            //     email: account.user.email
            // });

            dispatch({
                type: AccountActionTypes.SET_COURSE_INFO,
                payload: courseInfo
            });

            navigateToCourseAreas();

        } catch (error) {
            console.log(`Error adding courseInfo to account ${account.accountId}: ${error} : ${courseInfo}`)
        }
    };
}

export const addCourseAreas = (courseAreas: ICourseArea[]) => {
    return async (dispatch: Dispatch<AcccountActions>, getState: () => State) => {

        const { environment, account } = getState();

        try {

            // const courseAreasResponse = await axios.post(`${environment.apiUrl}/auth/addCourseAreas`, {
            //     courseAreas,
            //     accountId: account.accountId,
            //     email: account.user.email
            // });

            // dispatch({
            //     type: AccountActionTypes.SET_COURSE_AREAS,
            //     payload: courseAreasResponse.data.courseAreas
            // });

        } catch (error) {
            console.log(`Error adding courseAreas to account ${account.accountId}: ${error} : ${JSON.stringify(courseAreas, null , 2)}`)
        }
    };
}
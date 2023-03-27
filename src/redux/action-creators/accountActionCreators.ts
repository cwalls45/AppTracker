import axios from "axios";
import { Dispatch } from "redux";
import { ICourseInfo } from "../../entities/account";
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

export const addCourseInfo = (courseInfo: ICourseInfo) => {
    return async (dispatch: Dispatch<AcccountActions>, getState: () => State) => {

        const { environment, account } = getState();

        try {

            dispatch({
                type: AccountActionTypes.SET_COURSE_INFO,
                payload: courseInfo
            });

        } catch (error) {
            console.log(`Error adding courseInfo to account ${account.accountId}: ${error} : ${courseInfo}`)
        }
    };
}
import axios from "axios";
import { Dispatch } from "redux";
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

            navigateToCourseInformation();
        } catch (error) {
            console.log(`Error signing up ${email}: ${error}`)
        }
    };
}
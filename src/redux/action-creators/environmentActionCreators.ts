import axios from "axios";
import { Dispatch } from "redux"
import { EnvironmentActions } from "../../entities/environmentActions"
import { Paths } from "../../entities/paths";
import { EnvironmentActionsTypes } from "../action-types/environmentActionTypes"
import { State } from "../reducers";

export const setAPIUrl = () => {
    return (dispatch: Dispatch<EnvironmentActions>) => dispatch({
        type: EnvironmentActionsTypes.SET_API_URL
    });
}

export const setAccountId = (accountId: string) => {
    return (dispatch: Dispatch<EnvironmentActions>) => dispatch({
        type: EnvironmentActionsTypes.SET_ACCOUNT_ID,
        payload: accountId
    });
}

export const signUpUser = (firstName: string, lastName: string, email: string, password: string, navigateToCourseInformation: () => void) => {
    return async (dispatch: Dispatch<EnvironmentActions>, getState: () => State) => {
        try {
            const { environment } = getState();

            // const response = await axios.post(`${environment.apiUrl}/auth/signUp`, {
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


import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux"
import { EnvironmentActions } from "../../entities/environmentActions"
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

export const signUpUser = (email: string, password: string) => {
    return async (dispatch: Dispatch<EnvironmentActions>, getState: () => State) => {
        try {
            const { environment } = getState();
            const navigate = useNavigate();

            const response = await axios.post(`${environment.apiUrl}/auth/signUp`, {
                signUp: {
                    email,
                    password
                }
            });


            console.log('user: ', JSON.stringify(response, null, 2))
        } catch (error) {
            console.log(`Error signing up ${email}`)
        }
    };
}


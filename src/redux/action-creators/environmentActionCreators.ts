import { Dispatch } from "redux"
import { EnvironmentActionTypes } from "../../entities/environmentActionTypes"
import { EnvironmentActions } from "../actions/environmentActions"


export const setAPIUrl = () => {
    return (dispatch: Dispatch<EnvironmentActionTypes>) => dispatch({
        type: EnvironmentActions.SET_API_URL
    });
}

export const setIsLoading = (isLoading: boolean) => {
    return (dispatch: Dispatch<EnvironmentActionTypes>) => dispatch({
        type: EnvironmentActions.IS_LOADING,
        payload: isLoading
    });
}

export const setError = (isError: boolean) => {
    return (dispatch: Dispatch<EnvironmentActionTypes>) => dispatch({
        type: EnvironmentActions.SET_ERROR,
        payload: isError
    });
}


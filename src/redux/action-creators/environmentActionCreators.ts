import { Dispatch } from "redux"
import { EnvironmentActions } from "../../entities/environmentActions"
import { EnvironmentActionsTypes } from "../action-types/environmentActionTypes"


export const setAPIUrl = () => {
    return (dispatch: Dispatch<EnvironmentActions>) => dispatch({
        type: EnvironmentActionsTypes.SET_API_URL
    });
}

export const setIsLoading = (isLoading: boolean) => {
    return (dispatch: Dispatch<EnvironmentActions>) => dispatch({
        type: EnvironmentActionsTypes.IS_LOADING,
        payload: isLoading
    });
}


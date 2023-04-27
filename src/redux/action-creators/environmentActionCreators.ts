import { Dispatch } from "redux"
import { EnvironmentActionTypes } from "../../entities/environmentActionTypes"
import { EnvironmentActions } from "../action-types/environmentActions"


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


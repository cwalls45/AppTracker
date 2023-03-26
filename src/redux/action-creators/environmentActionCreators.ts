import { Dispatch } from "redux"
import { EnvironmentActions } from "../../entities/environmentActions"
import { EnvironmentActionsTypes } from "../action-types/environmentActionTypes"


export const setAPIUrl = () => {
    return (dispatch: Dispatch<EnvironmentActions>) => dispatch({
        type: EnvironmentActionsTypes.SET_API_URL
    });
}


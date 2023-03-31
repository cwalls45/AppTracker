import { EnvironmentActionsTypes } from "../redux/action-types/environmentActionTypes";

export type EnvironmentActions =
    ISetAPIUrl |
    ISetIsLoading

export interface ISetAPIUrl {
    type: EnvironmentActionsTypes.SET_API_URL,
};

export interface ISetIsLoading {
    type: EnvironmentActionsTypes.IS_LOADING,
    payload: boolean
}
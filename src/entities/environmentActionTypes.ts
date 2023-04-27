import { EnvironmentActions } from "../redux/action-types/environmentActions";

export type EnvironmentActionTypes =
    ISetAPIUrl |
    ISetIsLoading

export interface ISetAPIUrl {
    type: EnvironmentActions.SET_API_URL,
};

export interface ISetIsLoading {
    type: EnvironmentActions.IS_LOADING,
    payload: boolean
}
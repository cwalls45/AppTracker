import { EnvironmentActions } from "../redux/actions/environmentActions";

export type EnvironmentActionTypes =
    ISetAPIUrl |
    ISetIsLoading |
    ISetIsError

export interface ISetAPIUrl {
    type: EnvironmentActions.SET_API_URL,
};

export interface ISetIsLoading {
    type: EnvironmentActions.IS_LOADING,
    payload: boolean
}

export interface ISetIsError {
    type: EnvironmentActions.IS_ERROR,
    payload: boolean
}
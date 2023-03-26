import { EnvironmentActionsTypes } from "../redux/action-types/environmentActionTypes";

export type EnvironmentActions =
    ISetAPIUrl;

export interface ISetAPIUrl {
    type: EnvironmentActionsTypes.SET_API_URL,
};
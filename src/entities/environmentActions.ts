import { EnvironmentActionsTypes } from "../redux/action-types/environmentActionTypes";

export type EnvironmentActions =
    ISetAPIUrl |
    ISetAccountId;

export interface ISetAPIUrl {
    type: EnvironmentActionsTypes.SET_API_URL,
};

export interface ISetAccountId {
    type: EnvironmentActionsTypes.SET_ACCOUNT_ID,
    payload: string
}
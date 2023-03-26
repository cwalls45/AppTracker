import { EnvironmentActionsTypes } from "../redux/action-types/environmentActionTypes";
import { IUser } from "./account";

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

export interface ISetUser {
    type: EnvironmentActionsTypes.SET_USER,
    payload: IUser
}
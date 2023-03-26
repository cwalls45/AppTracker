import { AccountActionTypes } from "../redux/action-types/accountActionTypes";
import { IUser } from "./account";

export type AcccountActions =
    ISetAccountId |
    ISetUser

export interface ISetAccountId {
    type: AccountActionTypes.SET_ACCOUNT_ID,
    payload: string
}

export interface ISetUser {
    type: AccountActionTypes.SET_USER,
    payload: IUser
}
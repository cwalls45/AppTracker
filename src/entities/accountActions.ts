import { AccountActionTypes } from "../redux/action-types/accountActionTypes";

export type AcccountActions =
    ISetAccountId;

export interface ISetAccountId {
    type: AccountActionTypes.SET_ACCOUNT_ID,
    payload: string
}
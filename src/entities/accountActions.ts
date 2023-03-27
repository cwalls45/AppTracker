import { AccountActionTypes } from "../redux/action-types/accountActionTypes";
import { ICourseInfo, IUser } from "./account";

export type AcccountActions =
    ISetAccountId |
    ISetUser |
    ISetCourseInfo

export interface ISetAccountId {
    type: AccountActionTypes.SET_ACCOUNT_ID,
    payload: string
}

export interface ISetUser {
    type: AccountActionTypes.SET_USER,
    payload: IUser
}

export interface ISetCourseInfo {
    type: AccountActionTypes.SET_COURSE_INFO,
    payload: ICourseInfo
}


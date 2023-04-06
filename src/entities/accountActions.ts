import { AccountActionTypes } from "../redux/action-types/accountActionTypes";
import { ICourseArea, ICourseInfo, IUser } from "./account";

export type AcccountActions =
    ISetAccountId |
    ISetUser |
    ISetCourseInfo |
    ISetCourseAreas

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

export interface ISetCourseAreas {
    type: AccountActionTypes.SET_COURSE_AREAS,
    payload: ICourseArea[]
}


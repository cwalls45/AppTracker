import { AccountActions } from "../redux/actions/accountActions";
import { ICourseArea, ICourseInfo, IUser } from "./account";

export type AcccountActionTypes =
    ISetAccountId |
    ISetUser |
    ISetCourseInfo |
    ISetCourseAreas

export interface ISetAccountId {
    type: AccountActions.SET_ACCOUNT_ID,
    payload: string
}

export interface ISetUser {
    type: AccountActions.SET_USER,
    payload: IUser
}

export interface ISetCourseInfo {
    type: AccountActions.SET_COURSE_INFO,
    payload: ICourseInfo
}

export interface ISetCourseAreas {
    type: AccountActions.SET_COURSE_AREAS,
    payload: ICourseArea[]
}


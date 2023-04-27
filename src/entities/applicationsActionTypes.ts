import { ApplicationActions } from "../redux/action-types/applicationsActions"
import { IApplication } from "./chemicalApplicationFormDefaultValues"

export type ApplicationsActionsTypes = ISetApplications

export interface ISetApplications {
    type: ApplicationActions.SET_ALL_APPLICATIONS,
    payload: IApplication[]
}
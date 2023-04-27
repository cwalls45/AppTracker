import { ApplicationActions } from "../redux/actions/applicationsActions"
import { IApplication } from "./chemicalApplicationFormDefaultValues"

export type ApplicationsActionsTypes = ISetApplications

export interface ISetApplications {
    type: ApplicationActions.SET_ALL_APPLICATIONS,
    payload: IApplication[]
}
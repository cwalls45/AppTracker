import { ApplicationsActions } from "../redux/action-types/applicationsActionTypes";
import { IApplication } from "./applications";

export type ApplicationActionsType =
    IAddApplication;

export interface IAddApplication {
    type: ApplicationsActions.ADD_APPLICATION,
    payload: any
};

export interface IApplicationPayload {
    data: IApplication;
};
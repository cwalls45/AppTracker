import { ApplicationsActions } from "../redux/action-types/applicationsActionTypes";

export type ApplicationActionsType =
    IAddApplication;

export interface IAddApplication {
    type: ApplicationsActions.ADD_APPLICATION,
    payload: any
};

export interface IApplicationPayload {
    data: [];
    property: string;
};
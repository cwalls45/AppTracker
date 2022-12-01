import { ApplicationsActions } from "../redux/action-types/applicationsActionTypes";
import { IApplication } from "./applications";

export type ApplicationActionsType =
    IAddApplication
    | IFetchApplicationEvents
    | ISetApplicationEvents;

export interface IAddApplication {
    type: ApplicationsActions.ADD_APPLICATION,
    payload: IApplication
};

export interface IFetchApplicationEvents {
    type: ApplicationsActions.FETCH_APPLICATION_EVENTS
};

export interface ISetApplicationEvents {
    type: ApplicationsActions.SET_APPLICATION_EVENTS,
    payload: IApplication[]
};
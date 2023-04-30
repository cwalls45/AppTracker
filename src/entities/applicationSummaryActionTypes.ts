import { ApplicationSummaryActions } from "../redux/actions/applicationSummaryActions";
import { IApplicationSummary } from "./applicationSummary";

export type ApplicationSummaryActionsTypes =
    IAddApplicationSummary
    | IFetchApplicationEvents
    | ISetApplicationEvents;

export interface IAddApplicationSummary {
    type: ApplicationSummaryActions.ADD_APPLICATION_SUMMARY,
    payload: IApplicationSummary
};

export interface IFetchApplicationEvents {
    type: ApplicationSummaryActions.FETCH_APPLICATION_EVENTS
};

export interface ISetApplicationEvents {
    type: ApplicationSummaryActions.SET_APPLICATION_EVENTS,
    payload: IApplicationSummary[]
};
import { IApplicationSummary } from "../../entities/applicationSummary";
import { ApplicationSummaryActionsTypes } from "../../entities/applicationSummaryActionTypes";
import { ApplicationSummaryActions } from "../actions/applicationSummaryActions";

const initialState: IApplicationSummary[] = [];

const applicationSummaryReducer = (state = initialState, action: ApplicationSummaryActionsTypes): IApplicationSummary[] => {
    if (action.type === ApplicationSummaryActions.ADD_APPLICATION_SUMMARY) {
        return [...state, action.payload];
    } else if (action.type === ApplicationSummaryActions.SET_APPLICATION_EVENTS) {
        return action.payload;
    } else {
        return state;
    }
}

export default applicationSummaryReducer;
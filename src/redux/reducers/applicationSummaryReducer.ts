import { IApplicationSummary } from "../../entities/applicationSummary";
import { ApplicationSummaryActionsType } from "../../entities/applicationSummaryActions";
import { ApplicationSummaryActions } from "../action-types/applicationSummaryActionTypes";

const initialState: IApplicationSummary[] = [];

const applicationSummaryReducer = (state = initialState, action: ApplicationSummaryActionsType): IApplicationSummary[] => {
    if (action.type === ApplicationSummaryActions.ADD_APPLICATION_SUMMARY) {
        return [...state, action.payload];
    } else if (action.type === ApplicationSummaryActions.SET_APPLICATION_EVENTS) {
        return action.payload;
    } else {
        return state;
    }
}

export default applicationSummaryReducer;
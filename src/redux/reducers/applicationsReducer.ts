import { IApplicationSummary } from "../../entities/applications";
import { ApplicationSummaryActionsType } from "../../entities/applicationsActions";
import { ApplicationSummaryActions } from "../action-types/applicationsActionTypes";

const initialState: IApplicationSummary[] = [];

const applicationsReducer = (state = initialState, action: ApplicationSummaryActionsType): IApplicationSummary[] => {
    if (action.type === ApplicationSummaryActions.ADD_APPLICATION_SUMMARY) {
        return [...state, action.payload];
    } else if (action.type === ApplicationSummaryActions.SET_APPLICATION_EVENTS) {
        return action.payload;
    } else {
        return state;
    }
}

export default applicationsReducer;
import { IApplication } from "../../entities/applications";
import { ApplicationActionsType } from "../../entities/applicationsActions";
import { ApplicationsActions } from "../action-types/applicationsActionTypes";

const initialState: IApplication[] = [];

const applicationsReducer = (state = initialState, action: ApplicationActionsType): IApplication[] => {
    if (action.type === ApplicationsActions.ADD_APPLICATION) {
        return [...state, action.payload];
    } else if (action.type === ApplicationsActions.SET_APPLICATION_EVENTS) {
        return action.payload;
    } else {
        return state;
    }
}

export default applicationsReducer;
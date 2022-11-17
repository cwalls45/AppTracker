import { IApplication } from "../../types/applications";
import { ApplicationActionsType } from "../../types/applicationsActions";
import { ApplicationsActions } from "../action-types/applicationsActionTypes";

const initialState: IApplication[] = [];

const applicationsReducer = (state = initialState, action: ApplicationActionsType) => {
    if (action.type === ApplicationsActions.ADD_APPLICATION) {
        return [...state, action.payload];
    } else {
        return state;
    }
}

export default applicationsReducer;
import { ApplicationActionsType } from "../../types/applicationsActions";
import { ApplicationsActions } from "../action-types/applicationsActionTypes";

const initialState = [];

const applicationsReducer = (state = initialState, action: ApplicationActionsType) => {
    if (action.type === ApplicationsActions.ADD_APPLICATION) {
        return state;
    } else {
        return state;
    }
}

export default applicationsReducer;
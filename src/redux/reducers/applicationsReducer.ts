import { ApplicationsActionsTypes } from "../../entities/applicationsActionTypes";
import { IApplication } from "../../entities/chemicalApplicationFormDefaultValues";
import { ApplicationActions } from "../actions/applicationsActions";

const intialState: IApplication[] = [];

const applicationsReducer = (state = intialState, action: ApplicationsActionsTypes): IApplication[] => {
    if (action.type === ApplicationActions.SET_ALL_APPLICATIONS) {
        return action.payload
    } else {
        return intialState
    }
}

export default applicationsReducer;
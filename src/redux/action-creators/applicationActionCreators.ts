import { Dispatch } from "redux";
import { ApplicationActionsType, IApplicationPayload } from "../../types/applicationsActions";
import { ApplicationsActions } from "../action-types/applicationsActionTypes";

export const addApplication = (application: IApplicationPayload) => {
    return (dispatch: Dispatch<ApplicationActionsType>) => dispatch({
        type: ApplicationsActions.ADD_APPLICATION,
        payload: application
    })
};
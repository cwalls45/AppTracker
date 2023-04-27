import { Dispatch } from "redux";
import { IApplication } from "../../entities/chemicalApplicationFormDefaultValues";
import { ApplicationActions } from "../actions/applicationsActions";
import { ApplicationsActionsTypes } from "../../entities/applicationsActionTypes";

export const setAllApplications = (applications: IApplication[]) => {
    return (dispatch: Dispatch<ApplicationsActionsTypes>) => dispatch({
        type: ApplicationActions.SET_ALL_APPLICATIONS,
        payload: applications
    });
}
import { Dispatch } from "redux";
import { IApplication } from "../../entities/chemicalApplicationFormDefaultValues";
import { ApplicationActions } from "../actions/applicationsActions";
import { ApplicationsActionsTypes } from "../../entities/applicationsActionTypes";
import { getApplications } from "../../utils/applicationRequests";
import { EnvironmentActionTypes } from "../../entities/environmentActionTypes";
import { EnvironmentActions } from "../actions/environmentActions";

export const setAllApplications = (applications: IApplication[]) => {
    return async (dispatch: Dispatch<ApplicationsActionsTypes>) => {

        dispatch({
            type: ApplicationActions.SET_ALL_APPLICATIONS,
            payload: applications
        });

    }
}
import { Dispatch } from "redux";
import { ApplicationActionsType, IApplicationPayload } from "../../entities/applicationsActions";
import { IChemicalApplicationForm } from "../../entities/chemicalApplicationFormDefaultValues";
import { ApplicationsActions } from "../action-types/applicationsActionTypes";
import axios from 'axios';

export const addApplication = (application: IApplicationPayload) => {
    return (dispatch: Dispatch<ApplicationActionsType>) => dispatch({
        type: ApplicationsActions.ADD_APPLICATION,
        payload: application
    })
};

export const postChemicalApplication = (application: IChemicalApplicationForm) => {
    return async (dispatch: Dispatch<ApplicationActionsType>) => {
        try {
            const response = await axios.post('http://localhost:3000/api/createApplication', {
                application
            });
            const formattedApplicationEvent: IApplicationPayload = { data: response.data };
            dispatch({
                type: ApplicationsActions.ADD_APPLICATION,
                payload: formattedApplicationEvent
            });
        } catch (error) {
            console.log('error', error)
        }
    }
}
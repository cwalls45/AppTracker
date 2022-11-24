import { Dispatch } from "redux";
import { ApplicationActionsType, IApplicationPayload } from "../../types/applicationsActions";
import { IChemicalApplicationForm } from "../../types/chemicalApplicationFormDefaultValues";
import { ApplicationsActions } from "../action-types/applicationsActionTypes";
import axios from 'axios';
import { formatChemicalApplicationToApplicationEvent } from "../../utils/formatChemicalApplicationToApplicationEvent";

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
                data: application
            });
            const formattedResponse = formatChemicalApplicationToApplicationEvent(response.data.data);
            const formattedApplicationEvent = { data: formattedResponse };
            dispatch({
                type: ApplicationsActions.ADD_APPLICATION,
                payload: formattedApplicationEvent
            });
        } catch (error) {
            console.log('error', error)
        }
    }
}
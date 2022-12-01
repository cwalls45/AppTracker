import { Dispatch } from "redux";
import { ApplicationActionsType } from "../../entities/applicationsActions";
import { IChemicalApplicationForm } from "../../entities/chemicalApplicationFormDefaultValues";
import { ApplicationsActions } from "../action-types/applicationsActionTypes";
import axios from 'axios';
import { IApplication } from "../../entities/applications";

export const addApplication = (application: IApplication) => {
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
            let formattedApplicationEvent: IApplication = response.data;
            formattedApplicationEvent = {
                event_id: formattedApplicationEvent.event_id,
                title: formattedApplicationEvent.title,
                start: new Date(formattedApplicationEvent.start),
                end: new Date(formattedApplicationEvent.start)
            }

            dispatch({
                type: ApplicationsActions.ADD_APPLICATION,
                payload: formattedApplicationEvent
            });
        } catch (error) {
            console.log('ERROR: ', error.response.data)
        }
    }
};

export const fetchApplicationEvents = () => {
    return async (dispatch: Dispatch<ApplicationActionsType>) => {
        try {
            const response = await axios.get('http://localhost:3000/api/applicationEvents');
            let applicationEvents: IApplication[] = response.data;
            applicationEvents = applicationEvents.map((event) => ({
                event_id: event.event_id,
                title: event.title,
                start: new Date(event.start),
                end: new Date(event.end)
            }));

            dispatch({
                type: ApplicationsActions.SET_APPLICATION_EVENTS,
                payload: applicationEvents
            });
        } catch (error) {
            console.log('ERROR: ', error.response)
        }
    }
}
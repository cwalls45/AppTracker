import { Dispatch } from "redux";
import { ApplicationActionsType } from "../../entities/applicationsActions";
import { IChemicalApplicationForm } from "../../entities/chemicalApplicationFormDefaultValues";
import { ApplicationsActions } from "../action-types/applicationsActionTypes";
import axios from 'axios';
import { IApplication } from "../../entities/applications";
import { State } from "../reducers";
import { ChemicalApplicationActions } from "../action-types/chemicalApplicationActionTypes";
import { ChemicalApplicationFormActions } from "../../entities/chemicalApplicationFormActions";

export const addApplication = (application: IApplication) => {
    return (dispatch: Dispatch<ApplicationActionsType>) => dispatch({
        type: ApplicationsActions.ADD_APPLICATION,
        payload: application
    })
};

export const postChemicalApplication = (application: IChemicalApplicationForm) => {
    return async (dispatch: Dispatch<ApplicationActionsType | ChemicalApplicationFormActions>, getState: () => State) => {

        const { environment, account } = getState();

        try {


            const response = await axios.post(`${environment.apiUrl}/api/createApplication`, {
                application,
                accountId: account.accountId
            });

            let formattedApplicationEvent: IApplication = response.data;

            formattedApplicationEvent = {
                event_id: formattedApplicationEvent.event_id,
                title: formattedApplicationEvent.title,
                start: new Date(formattedApplicationEvent.start),
                end: new Date(formattedApplicationEvent.start)
            };

            dispatch({
                type: ApplicationsActions.ADD_APPLICATION,
                payload: formattedApplicationEvent
            });

            dispatch({
                type: ChemicalApplicationActions.RESET_CHEMICAL_APPLICATION_FORM
            });

        } catch (error) {
            console.log('ERROR creating chemical application: ', error.response.data)
        }
    }
};

export const fetchApplicationEvents = () => {
    return async (dispatch: Dispatch<ApplicationActionsType>, getState: () => State) => {
        try {
            const { environment, account } = getState();

            const response = await axios.get(`${environment.apiUrl}/api/applicationEvents/${2023}/${account.accountId}`);

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
            console.log('ERROR fetching application events: ', error.response)
        }
    }
}
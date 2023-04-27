import { Dispatch } from "redux";
import { ApplicationSummaryActionsType } from "../../entities/applicationSummaryActions";
import { IApplication } from "../../entities/chemicalApplicationFormDefaultValues";
import { ApplicationSummaryActions } from "../action-types/applicationSummaryActionTypes";
import axios from 'axios';
import { IApplicationSummary } from "../../entities/applications";
import { State } from "../reducers";
import { ChemicalApplicationActions } from "../action-types/chemicalApplicationActionTypes";
import { ChemicalApplicationFormActions } from "../../entities/chemicalApplicationFormActions";

export const addApplication = (application: IApplicationSummary) => {
    return (dispatch: Dispatch<ApplicationSummaryActionsType>) => dispatch({
        type: ApplicationSummaryActions.ADD_APPLICATION_SUMMARY,
        payload: application
    })
};

export const postChemicalApplication = (application: IApplication) => {
    return async (dispatch: Dispatch<ApplicationSummaryActionsType | ChemicalApplicationFormActions>, getState: () => State) => {

        const { environment, account } = getState();

        try {


            const response = await axios.post(`${environment.apiUrl}/api/createApplication`, {
                application,
                accountId: account.accountId
            });

            let formattedApplicationEvent: IApplicationSummary = response.data;

            formattedApplicationEvent = {
                event_id: formattedApplicationEvent.event_id,
                title: formattedApplicationEvent.title,
                start: new Date(formattedApplicationEvent.start),
                end: new Date(formattedApplicationEvent.start)
            };

            dispatch({
                type: ApplicationSummaryActions.ADD_APPLICATION_SUMMARY,
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
    return async (dispatch: Dispatch<ApplicationSummaryActionsType>, getState: () => State) => {
        try {
            const { environment, account } = getState();

            const response = await axios.get(`${environment.apiUrl}/api/applicationEvents/${2023}/${account.accountId}`);

            let applicationEvents: IApplicationSummary[] = response.data;

            applicationEvents = applicationEvents.map((event) => ({
                event_id: event.event_id,
                title: event.title,
                start: new Date(event.start),
                end: new Date(event.end)
            }));

            dispatch({
                type: ApplicationSummaryActions.SET_APPLICATION_EVENTS,
                payload: applicationEvents
            });
        } catch (error) {
            console.log('ERROR fetching application events: ', error.response)
        }
    }
}
import { Dispatch } from "redux";
import { ApplicationSummaryActionsTypes } from "../../entities/applicationSummaryActionTypes";
import { IApplication } from "../../entities/chemicalApplicationFormDefaultValues";
import { ApplicationSummaryActions } from "../actions/applicationSummaryActions";
import { IApplicationSummary } from "../../entities/applicationSummary";
import { State } from "../reducers";
import { ChemicalApplicationActions } from "../actions/chemicalApplicationActions";
import { ChemicalApplicationFormActionTypes } from "../../entities/chemicalApplicationFormActionTypes";
import { apiGet, apiPost } from "../../utils/apiRequests";
import { EnvironmentActionTypes } from "../../entities/environmentActionTypes";
import { EnvironmentActions } from "../actions/environmentActions";

export const addApplication = (application: IApplicationSummary) => {
    return (dispatch: Dispatch<ApplicationSummaryActionsTypes>) => dispatch({
        type: ApplicationSummaryActions.ADD_APPLICATION_SUMMARY,
        payload: application
    })
};

export const postChemicalApplication = (application: IApplication) => {
    return async (dispatch: Dispatch<ApplicationSummaryActionsTypes | ChemicalApplicationFormActionTypes>, getState: () => State) => {

        const { environment, account } = getState();

        try {
            const response = await apiPost(`${environment.apiUrl}/api/createApplication`, {
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
    return async (dispatch: Dispatch<ApplicationSummaryActionsTypes | EnvironmentActionTypes>, getState: () => State) => {
        try {
            const { environment, account } = getState();
            const accountId = account.accountId || sessionStorage.getItem('TurfTrackerAccountId');

            const response = await apiGet(`${environment.apiUrl}/api/applicationEvents/${2024}/${accountId}`);
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
            dispatch({
                type: EnvironmentActions.SET_ERROR,
                payload: {
                    isError: true,
                    message: 'There was an error fecthing appilcations.'
                }
            });
        }
    }
}
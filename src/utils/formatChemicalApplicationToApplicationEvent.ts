import { IApplication } from "../entities/chemicalApplicationFormDefaultValues";
import { IApplicationSummary } from "../entities/applicationSummary";
import { v4 as uuidv4 } from 'uuid';

export const formatApplicationToApplicationEvent = (chemApp: IApplication): IApplicationSummary => {
    const event_id = `application-${uuidv4()}`
    const applicationDate = new Date(chemApp.dateOfApplication);
    return {
        event_id,
        title: combineAreaOfApplication(chemApp.areaOfApplication),
        start: applicationDate,
        end: applicationDate,
    }
};

export const combineAreaOfApplication = (areas: string[]) => {
    return areas.join(', ');
}
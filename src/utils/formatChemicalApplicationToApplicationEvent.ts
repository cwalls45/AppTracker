import { IChemicalApplicationForm } from "../types/applicationFormDefaultValues";
import { IApplication } from "../types/applications";
import { v4 as uuidv4 } from 'uuid';

export const formatChemicalApplicationToApplicationEvent = (chemApp: IChemicalApplicationForm): IApplication => {
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
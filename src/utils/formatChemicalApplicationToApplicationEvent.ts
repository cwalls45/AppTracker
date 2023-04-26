import { IChemicalApplicationForm } from "../entities/chemicalApplicationFormDefaultValues";
import { IApplicationSummary } from "../entities/applications";
import { v4 as uuidv4 } from 'uuid';

export const formatChemicalApplicationToApplicationEvent = (chemApp: IChemicalApplicationForm): IApplicationSummary => {
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
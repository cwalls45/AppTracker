import { IApplication } from "../entities/chemicalApplicationFormDefaultValues";
import { store } from "../redux/store";
import { apiGet } from "./apiRequests";

export const getApplications = async (year: string): Promise<IApplication[]> => {
    const { environment, account } = store.getState();
    const accountId = account.accountId || sessionStorage.getItem('TurfTrackerAccountId');

    try {
        const response = await apiGet(`${environment.apiUrl}/api/getApplications/${year}/${accountId}`);
        return response.data.applications as IApplication[];
    } catch (error) {
        console.log(`Error getting applications for ${year}: ${error}`);
        return [];
    }
};
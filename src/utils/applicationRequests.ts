import axios from "axios";
import { IApplication } from "../entities/chemicalApplicationFormDefaultValues";
import { store } from "../redux/store";
import { apiGet } from "./apiRequests";

export const getApplications = async (year: string): Promise<IApplication[]> => {
    const { environment, account } = store.getState();
    try {
        const response = await apiGet(`${environment.apiUrl}/api/getApplications/${year}/${account.accountId}`);
        return response.data.applications as IApplication[];
    } catch (error) {
        console.log(`Error getting applications for ${year}: ${error}`);
        return [];
    }
};
import axios from 'axios';
import { IChemicalCompanySummary, IProductSummary } from '../entities/chemicalApplicationFormDefaultValues';
import { store } from '../redux/store';
import Cookies from 'js-cookie';

export const apiGet = async (url: string) => {
    const authToken = Cookies.get('TurfTrackerAccessToken');
    const config = {
        headers: {
            "X-Amz-Security-Token": authToken,
        },
    }
    const response = await axios.get(url, config);
    return response;
};

export const apiPost = async (url: string, body) => {
    const authToken = Cookies.get('TurfTrackerAccessToken');
    const config = {
        headers: {
            "X-Amz-Security-Token": authToken,
        },
        ...(body && body)
    }
    const response = await axios.post(url, config);
    return response;
}

export const searchChemicalNames = async (queryString: string): Promise<IProductSummary[]> => {
    const { environment } = store.getState();
    const response = await apiGet(`${environment.apiUrl}/api/partialChemicalName/${queryString}`);
    return response.data.chemicals;
};

export const searchChemicalCompaniesByName = async (queryString: string): Promise<IChemicalCompanySummary[]> => {
    const { environment } = store.getState();
    const response = await apiGet(`${environment.apiUrl}/api/companyNamesByProduct/${queryString}`);
    return response.data.chemicalData;
};

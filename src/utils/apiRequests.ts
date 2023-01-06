import axios from 'axios';
import { IChemicalCompanySummary, IProductSummary } from '../entities/chemicalApplicationFormDefaultValues';
import { IAddToInventory } from '../entities/inventory';
import { store } from '../redux/store';

export const searchChemicalNames = async (queryString: string): Promise<IProductSummary[]> => {
    const { environment } = store.getState();
    const response = await axios.get(`${environment.apiUrl}/api/partialChemicalName/${queryString}`);
    return response.data.chemicals;
};

export const searchChemicalCompaniesByName = async (queryString: string): Promise<IChemicalCompanySummary[]> => {
    const { environment } = store.getState();
    const response = await axios.get(`${environment.apiUrl}/api/companyNamesByProduct/${queryString}`);
    return response.data.chemicalData;
};

export const postAddInventory = async (inventory: IAddToInventory): Promise<any> => {
    const { environment } = store.getState();
    const response = await axios.post(`${environment.apiUrl}/api/addInventory`, { inventory });
    console.log('response', response);
    return 'Inventory added'
}
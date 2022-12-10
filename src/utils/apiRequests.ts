import axios from 'axios';
import { IChemicalCompanySummary, IProductSummary } from '../entities/chemicalApplicationFormDefaultValues';

export const searchChemicalNames = async (queryString: string): Promise<IProductSummary[]> => {
    const response = await axios.get(`http://localhost:3000/api/partialChemicalName/${queryString}`);
    return response.data.chemicals;
};

export const searchChemicalCompaniesByName = async (queryString: string): Promise<IChemicalCompanySummary[]> => {
    const response = await axios.get(`http://localhost:3000/api/companyNamesByProduct/${queryString}`);
    return response.data.chemicalData;
}; 

import axios from 'axios';
import { IProductSummary } from '../entities/chemicalApplicationFormDefaultValues';

export const searchChemicalNames = async (queryString: string) => {
    const response = await axios.get(`http://localhost:3000/api/partialChemicalName/${queryString}`);
    const chemicalNames: IProductSummary = response.data.chemicals.map((chemical) => chemical.productName);
    return chemicalNames;
};

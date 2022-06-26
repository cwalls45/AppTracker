export interface IChemical {
    id: string;
    chemicalCompany: string;
    chemicalName: string;
    amount: string;
    units: string
};

export type ChemicalList = IChemical[];
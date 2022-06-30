export interface IChemical {
    chemicalCompany: string;
    chemicalName: string;
    amount: string;
    units: string
};

export type ChemicalList = IChemical[];
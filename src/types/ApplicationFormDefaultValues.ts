export interface IChemical {
    ChemicalCompany: string;
    ChemicalName: string;
    Amount: string;
    Units: string
};

export interface IChemicalList {
    chemical: IChemical[];
}
export interface IChemicalApplicationForm {
    dateOfApplication: string;
    areaOfApplication: string[];
    totalAreaOfApp: string;
    totalAreaOfAppUnit: string;
    targetPests: string[];
    chemicals: IChemical[];
}

export interface IChemical {
    chemicalCompany: string;
    chemicalName: string;
    amount: string;
    units: string
};

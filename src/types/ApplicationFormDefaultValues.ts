export interface IChemicalApplicationForm {
    dateOfApplication: string;
    areaOfApplication: string[];
    acresCovered: string;
    targetPests: string[];
    chemicals: IChemical[];
}

export interface IChemical {
    chemicalCompany: string;
    chemicalName: string;
    amount: string;
    units: string
};

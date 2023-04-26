export interface IApplication {
    id?: string;
    dateOfApplication: string;
    areaOfApplication: string[];
    totalAreaOfApp: string;
    totalAreaOfAppUnit: string;
    targetPests: string[];
    chemicals: IChemical[];
};

export interface IChemical {
    chemicalCompany: string;
    chemicalName: string;
    amount: string;
    units: string
};

export enum ApplicationProperty {
    ID = 'id',
    DATE_OF_APPLICATION = 'dateOfApplication',
    AREA_OF_APPLICATION = 'areaOfApplication',
    TOTAL_AREA_OF_APP = 'totalAreaOfApp',
    TOTAL_AREA_OF_APP_UNIT = 'totalAreaOfAppUnit',
    TARGET_PESTS = 'targetPests',
    CHEMICALS = 'chemicals'
};

export enum ChemicalProperties {
    CHEMICAL_COMPANY = 'chemicalCompany',
    CHEMICAL_NAME = 'chemicalName',
    AMOUNT = 'amount',
    UNITS = 'units'
};

export enum Units {
    LBS = 'lbs',
    OZ = 'oz',
    GALLONS = 'gallon(s)',
    FLOZ = 'fl. oz'
}

export const units = [Units.LBS, Units.OZ, Units.GALLONS, Units.FLOZ];

export interface IProductSummary {
    epaRegistrationNumber: string;
    productName: string;
    productStatus: string;
};

export interface IChemicalCompanySummary {
    epaRegistrationNumber: string;
    productName: string;
    companyName: string;
    activeIngredients: IActiveIngredient[];
    formulations: { formulation: string }[];
};

export interface IActiveIngredient {
    pc_Code: string;
    activeIngredient: string;
    activeIngredientPercent: number;
    cas_Number: string;
}

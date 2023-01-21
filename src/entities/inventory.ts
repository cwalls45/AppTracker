export interface IInventory {
    chemicalName: string;
    companyName: string;
    amount: string;
    units: string;
    cost: string;
};

export enum Units {
    LBS = 'lbs',
    OZ = 'oz',
    GAL = 'gallon(s)',
    FLOZ = 'fl. oz'
}
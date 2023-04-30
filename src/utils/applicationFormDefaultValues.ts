import { IChemical, IApplication } from "../entities/chemicalApplicationFormDefaultValues";

export const defaultValues = (): IApplication => ({
    dateOfApplication: '',
    areaOfApplication: [],
    totalAreaOfApp: '',
    totalAreaOfAppUnit: '',
    targetPests: [],
    chemicals: [{
        chemicalCompany: '',
        chemicalName: '',
        amount: '',
        units: ''
    }],
});

export const chemicalListDefaultValues = (): IChemical => ({
    chemicalCompany: '',
    chemicalName: '',
    amount: '',
    units: ''
});
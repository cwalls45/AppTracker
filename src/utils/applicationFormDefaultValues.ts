import { IChemical, IChemicalApplicationForm } from "../types/applicationFormDefaultValues";

export const defaultValues = (): IChemicalApplicationForm => ({
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
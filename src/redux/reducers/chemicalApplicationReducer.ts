import { ChemicalApplicationFormActions } from "../../entities/chemicalApplicationFormActions";
import { IChemicalApplicationForm } from "../../entities/chemicalApplicationFormDefaultValues";
import { chemicalListDefaultValues } from "../../utils/applicationFormDefaultValues";
import { ChemicalApplicationActions } from "../action-types/chemicalApplicationActionTypes";


const initialState: IChemicalApplicationForm = {
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
}

const chemicalApplicationReducer = (state: IChemicalApplicationForm = initialState, action: ChemicalApplicationFormActions): IChemicalApplicationForm => {
    if (action.type === ChemicalApplicationActions.ADD_AREA_OF_APPLICATION) {
        return { ...state, areaOfApplication: action.payload.data };
    } else if (action.type === ChemicalApplicationActions.UPDATE_TARGET_PESTS) {
        return { ...state, targetPests: action.payload.data };
    } else if (action.type === ChemicalApplicationActions.UPDATE_DATE_OF_APPLICATION) {
        return { ...state, dateOfApplication: action.payload.data }
    } else if (action.type === ChemicalApplicationActions.UPDATE_TOTAL_AREA_OF_APP) {
        return { ...state, totalAreaOfApp: action.payload.data }
    } else if (action.type === ChemicalApplicationActions.UPDATE_TOTAL_AREA_OF_APP_UNITS) {
        return { ...state, totalAreaOfAppUnit: action.payload.data }
    } else if (action.type === ChemicalApplicationActions.SET_CHEMICAL_COMPANY) {
        return { ...state, chemicals: action.payload.data }
    } else if (action.type === ChemicalApplicationActions.SET_CHEMICAL_NAME) {
        return { ...state, chemicals: action.payload.data }
    } else if (action.type === ChemicalApplicationActions.SET_CHEMICAL_AMOUNT) {
        return { ...state, chemicals: action.payload.data }
    } else if (action.type === ChemicalApplicationActions.SET_CHEMICAL_AMOUNT_UNITS) {
        return { ...state, chemicals: action.payload.data }
    } else if (action.type === ChemicalApplicationActions.ADD_CHEMICAL) {
        return { ...state, chemicals: [...state.chemicals, chemicalListDefaultValues()] }
    } else if (action.type === ChemicalApplicationActions.REMOVE_CHEMICAL) {
        const lastChemicalIndex = state.chemicals.length - 1;
        const removeLastChemical = state.chemicals.slice(0, lastChemicalIndex);
        return { ...state, chemicals: removeLastChemical };
    } else {
        return state;
    }
};

export default chemicalApplicationReducer;
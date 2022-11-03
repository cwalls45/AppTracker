import { Action } from "../../types/Action";
import { IChemicalApplicationForm } from "../../types/ApplicationFormDefaultValues";
import { ChemicalApplicationActions } from "../action-types/chemicalApplicationActionTypes";


const initialState: IChemicalApplicationForm = {
    dateOfApplication: '',
    areaOfApplication: [],
    totalAreaOfApp: '',
    totalAreaOfAppUnit: '',
    targetPests: [],
    chemicals: [],
}

const chemicalApplicationReducer = (state: IChemicalApplicationForm = initialState, action: Action) => {
    if (action.type === ChemicalApplicationActions.ADD_AREA_OF_APPLICATION) {
        return { ...state, areaOfApplication: action.payload.data };
    } else if (action.type === ChemicalApplicationActions.UPDATE_TARGET_PESTS) {
        return { ...state, targetPest: action.payload.data };
    } else if (action.type === ChemicalApplicationActions.UPDATE_DATE_OF_APPLICATION) {
        return { ...state, dateOfApplication: action.payload.data }
    } else {
        return state;
    }
};

export default chemicalApplicationReducer;
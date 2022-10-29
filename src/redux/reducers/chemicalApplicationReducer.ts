import { Action } from "../../types/Action";
import { IChemicalApplicationForm } from "../../types/ApplicationFormDefaultValues";
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

const chemicalApplicationReducer = (state: IChemicalApplicationForm = initialState, action: Action) => {
    if (action.type === ChemicalApplicationActions.ADD_AREA_OF_APPLICATION) {
        const newAreasOfApplication = [...state.areaOfApplication, action.payload]
        return { ...state, areaOfApplication: newAreasOfApplication };
    } else if (action.type === ChemicalApplicationActions.REMOVE_AREA_OF_APPLICATION) {
        //Update later when implemting remove
        return state
    } else {
        return state;
    }
};

export default chemicalApplicationReducer;
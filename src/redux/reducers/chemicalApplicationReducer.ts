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
        const newAreasOfApplication = action.payload.data;
        return { ...state, areaOfApplication: newAreasOfApplication };
    } else if (action.type === ChemicalApplicationActions.UPDATE_TARGET_PESTS) {
        const newTargetPests = action.payload.data
        return { ...state, targetPest: newTargetPests };
    } else {
        return state;
    }
};

export default chemicalApplicationReducer;
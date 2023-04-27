import { Dispatch } from 'redux';
import { ChemicalApplicationFormActionTypes, IChemicalsPayload, IStringArrayPayload, IStringPayload } from '../../entities/chemicalApplicationFormActionTypes';
import { ChemicalApplicationActions } from "../action-types/chemicalApplicationActions";

export const addAreaOfApplication = (addAreaOfApplication: IStringArrayPayload) => {
    return (dispatch: Dispatch<ChemicalApplicationFormActionTypes>) => dispatch({
        type: ChemicalApplicationActions.ADD_AREA_OF_APPLICATION,
        payload: addAreaOfApplication
    })
};

export const updateTargetPests = (updateTargetPest: IStringArrayPayload) => {
    return (dispatch: Dispatch<ChemicalApplicationFormActionTypes>) => dispatch({
        type: ChemicalApplicationActions.UPDATE_TARGET_PESTS,
        payload: updateTargetPest
    })
};

export const updateDateOfApplication = (dateOfApplicaion: IStringPayload) => {
    return (dispatch: Dispatch<ChemicalApplicationFormActionTypes>) => dispatch({
        type: ChemicalApplicationActions.UPDATE_DATE_OF_APPLICATION,
        payload: dateOfApplicaion
    })
};

export const updateTotalAreaOfApp = (totalAreaOfApp: IStringPayload) => {
    return (dispatch: Dispatch<ChemicalApplicationFormActionTypes>) => dispatch({
        type: ChemicalApplicationActions.UPDATE_TOTAL_AREA_OF_APP,
        payload: totalAreaOfApp
    })
};

export const updateTotalAreaOfAppUnits = (totalAreaOfAppUnits: IStringPayload) => {
    return (dispatch: Dispatch<ChemicalApplicationFormActionTypes>) => dispatch({
        type: ChemicalApplicationActions.UPDATE_TOTAL_AREA_OF_APP_UNITS,
        payload: totalAreaOfAppUnits
    })
};

export const setChemicalCompany = (chemicalList: IChemicalsPayload) => {
    return (dispatch: Dispatch<ChemicalApplicationFormActionTypes>) => dispatch({
        type: ChemicalApplicationActions.SET_CHEMICAL_COMPANY,
        payload: chemicalList
    })
};

export const setChemicalName = (chemicalList: IChemicalsPayload) => {
    return (dispatch: Dispatch<ChemicalApplicationFormActionTypes>) => dispatch({
        type: ChemicalApplicationActions.SET_CHEMICAL_NAME,
        payload: chemicalList
    })
};

export const setChemicalAmount = (chemicalList: IChemicalsPayload) => {
    return (dispatch: Dispatch<ChemicalApplicationFormActionTypes>) => dispatch({
        type: ChemicalApplicationActions.SET_CHEMICAL_AMOUNT,
        payload: chemicalList
    })
};

export const setChemicalAmountUnits = (chemicalList: IChemicalsPayload) => {
    return (dispatch: Dispatch<ChemicalApplicationFormActionTypes>) => dispatch({
        type: ChemicalApplicationActions.SET_CHEMICAL_AMOUNT_UNITS,
        payload: chemicalList
    })
};

export const addChemical = () => {
    return (dispatch: Dispatch<ChemicalApplicationFormActionTypes>) => dispatch({
        type: ChemicalApplicationActions.ADD_CHEMICAL,
    })
};

export const removeChemical = () => {
    return (dispatch: Dispatch<ChemicalApplicationFormActionTypes>) => dispatch({
        type: ChemicalApplicationActions.REMOVE_CHEMICAL,
    })
};
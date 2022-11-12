import { Dispatch } from 'redux';
import { Action, IChemicalsPayload, IStringPayload } from '../../types/Action';
import { ChemicalApplicationActions } from "../action-types/chemicalApplicationActionTypes"

export const addAreaOfApplication = (addAreaOfApplication: IStringPayload) => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: ChemicalApplicationActions.ADD_AREA_OF_APPLICATION,
        payload: addAreaOfApplication
    })
};

export const updateTargetPests = (updateTargetPest: IStringPayload) => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: ChemicalApplicationActions.UPDATE_TARGET_PESTS,
        payload: updateTargetPest
    })
};

export const updateDateOfApplication = (dateOfApplicaion: IStringPayload) => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: ChemicalApplicationActions.UPDATE_DATE_OF_APPLICATION,
        payload: dateOfApplicaion
    })
};

export const updateTotalAreaOfApp = (totalAreaOfApp: IStringPayload) => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: ChemicalApplicationActions.UPDATE_TOTAL_AREA_OF_APP,
        payload: totalAreaOfApp
    })
};

export const updateTotalAreaOfAppUnits = (totalAreaOfAppUnits: IStringPayload) => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: ChemicalApplicationActions.UPDATE_TOTAL_AREA_OF_APP_UNITS,
        payload: totalAreaOfAppUnits
    })
};

export const setChemicalCompany = (chemicalList: IChemicalsPayload) => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: ChemicalApplicationActions.SET_CHEMICAL_COMPANY,
        payload: chemicalList
    })
};

export const setChemicalName = (chemicalList: IChemicalsPayload) => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: ChemicalApplicationActions.SET_CHEMICAL_NAME,
        payload: chemicalList
    })
};
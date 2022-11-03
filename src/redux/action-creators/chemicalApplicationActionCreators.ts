import { Dispatch } from 'redux';
import { Action, IStringPayload } from '../../types/Action';
import { ChemicalApplicationActions } from "../action-types/chemicalApplicationActionTypes"

export const addAreaOfApplication = (addAreaOfApplication: IStringPayload) => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: ChemicalApplicationActions.ADD_AREA_OF_APPLICATION,
        payload: addAreaOfApplication
    })
}

export const updateTargetPests = (updateTargetPest: IStringPayload) => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: ChemicalApplicationActions.UPDATE_TARGET_PESTS,
        payload: updateTargetPest
    })
}
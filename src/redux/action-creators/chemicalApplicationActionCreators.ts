import { Dispatch } from 'redux';
import { Action } from '../../types/Action';
import { ChemicalApplicationActions } from "../action-types/chemicalApplicationActionTypes"

export const addAreaOfApplication = (addAreaOfApplication: string) => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: ChemicalApplicationActions.ADD_AREA_OF_APPLICATION,
        payload: addAreaOfApplication
    })
}
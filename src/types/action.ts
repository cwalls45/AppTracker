import { ChemicalApplicationActions } from "../redux/action-types/chemicalApplicationActionTypes";

export type Action = IAddAreaOfApplicationAction | IRemoveAreaOfApplicationAction;

export interface IAddAreaOfApplicationAction {
    type: ChemicalApplicationActions.ADD_AREA_OF_APPLICATION;
    payload: string;
};

export interface IRemoveAreaOfApplicationAction {
    type: ChemicalApplicationActions.REMOVE_AREA_OF_APPLICATION;
    payload: string;
}
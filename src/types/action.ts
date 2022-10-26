import { ChemicalApplicationActions } from "../redux/actionTypes";

export type Action = IAddAreaOfApplicationAction | IRemoveAreaOfApplicationAction;

export interface IAddAreaOfApplicationAction {
    type: ChemicalApplicationActions.ADD_AREA_OF_APPLICATION;
    payload: string;
};

export interface IRemoveAreaOfApplicationAction {
    type: ChemicalApplicationActions.REMOVE_AREA_OF_APPLICATION;
    payload: string;
}
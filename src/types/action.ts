import { ChemicalApplicationActions } from "../redux/action-types/chemicalApplicationActionTypes";

export type Action = IAddAreaOfApplicationAction | IUpdateTargetPests;

export interface IAddAreaOfApplicationAction {
    type: ChemicalApplicationActions.ADD_AREA_OF_APPLICATION;
    payload: IStringPayload;
};

export interface IUpdateTargetPests {
    type: ChemicalApplicationActions.UPDATE_TARGET_PESTS;
    payload: IStringPayload;
}

export interface IStringPayload {
    data: string;
    property: string;
}
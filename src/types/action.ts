import { ChemicalApplicationActions } from "../redux/action-types/chemicalApplicationActionTypes";

export type Action = IAddAreaOfApplicationAction
    | IUpdateTargetPests
    | IUpdateDateOfApplication
    | IUpdateTotalAreaOfApp
    | IUpdateTotalAreaOfAppUnits;

export interface IAddAreaOfApplicationAction {
    type: ChemicalApplicationActions.ADD_AREA_OF_APPLICATION;
    payload: IStringPayload;
};

export interface IUpdateTargetPests {
    type: ChemicalApplicationActions.UPDATE_TARGET_PESTS;
    payload: IStringPayload;
};

export interface IUpdateDateOfApplication {
    type: ChemicalApplicationActions.UPDATE_DATE_OF_APPLICATION;
    payload: IStringPayload;
};

export interface IUpdateTotalAreaOfApp {
    type: ChemicalApplicationActions.UPDATE_TOTAL_AREA_OF_APP;
    payload: IStringPayload;
};

export interface IUpdateTotalAreaOfAppUnits {
    type: ChemicalApplicationActions.UPDATE_TOTAL_AREA_OF_APP_UNITS;
    payload: IStringPayload;
}

export interface IStringPayload {
    data: string;
    property: string;
}
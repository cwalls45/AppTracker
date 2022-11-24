import { ChemicalApplicationActions } from "../redux/action-types/chemicalApplicationActionTypes";
import { IChemical } from "./chemicalApplicationFormDefaultValues";

export type ChemicalApplicationFormActions =
    IAddAreaOfApplicationAction
    | IUpdateTargetPests
    | IUpdateDateOfApplication
    | IUpdateTotalAreaOfApp
    | IUpdateTotalAreaOfAppUnits
    | ISetChemicalCompany
    | ISetChemicalName
    | ISetChemicalAmount
    | ISetChemicalAmountUnits
    | IAddChemical
    | IRemoveChemical;

export interface IAddAreaOfApplicationAction {
    type: ChemicalApplicationActions.ADD_AREA_OF_APPLICATION;
    payload: IStringArrayPayload;
};

export interface IUpdateTargetPests {
    type: ChemicalApplicationActions.UPDATE_TARGET_PESTS;
    payload: IStringArrayPayload;
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
};

export interface ISetChemicalCompany {
    type: ChemicalApplicationActions.SET_CHEMICAL_COMPANY;
    payload: IChemicalsPayload;
};

export interface ISetChemicalName {
    type: ChemicalApplicationActions.SET_CHEMICAL_NAME;
    payload: IChemicalsPayload;
};

export interface ISetChemicalAmount {
    type: ChemicalApplicationActions.SET_CHEMICAL_AMOUNT;
    payload: IChemicalsPayload;
};

export interface ISetChemicalAmountUnits {
    type: ChemicalApplicationActions.SET_CHEMICAL_AMOUNT_UNITS;
    payload: IChemicalsPayload;
};

export interface IAddChemical {
    type: ChemicalApplicationActions.ADD_CHEMICAL;
};

export interface IRemoveChemical {
    type: ChemicalApplicationActions.REMOVE_CHEMICAL;
};

export interface IStringArrayPayload {
    data: string[];
    property: string;
};

export interface IStringPayload {
    data: string;
    property: string;
};

export interface IChemicalsPayload {
    data: IChemical[];
    property: string;
};

import { InventoryActionTypes } from "../redux/action-types/inventoryActionTypes";
import { IInventory } from "./inventory";

export type InventoryActions =
    IAddInventory
    | IPostInventory
    | IUpdateAllInventory

export interface IAddInventory {
    type: InventoryActionTypes.ADD_INVENTORY;
    payload: IInventory
}

export interface IPostInventory {
    type: InventoryActionTypes.POST_INVENTORY;
    payload: IInventory
}

export interface IUpdateAllInventory {
    type: InventoryActionTypes.UPDATE_ALL_INVENTORY;
    payload: IInventory[]
}
import { InventoryActions } from "../redux/action-types/inventoryActions";
import { IInventory } from "./inventory";

export type InventoryActionTypes =
    IAddInventory
    | IPostInventory
    | IUpdateAllInventory

export interface IAddInventory {
    type: InventoryActions.ADD_INVENTORY;
    payload: IInventory
}

export interface IPostInventory {
    type: InventoryActions.POST_INVENTORY;
    payload: IInventory
}

export interface IUpdateAllInventory {
    type: InventoryActions.UPDATE_ALL_INVENTORY;
    payload: IInventory[]
}
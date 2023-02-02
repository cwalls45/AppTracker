import { IInventory } from "../../entities/inventory";
import { InventoryActions } from "../../entities/inventoryActions";
import { InventoryActionTypes } from "../action-types/inventoryActionTypes";

const initialState: IInventory[] = [];

const inventoryReducer = (state = initialState, action: InventoryActions): IInventory[] => {
    if (action.type === InventoryActionTypes.ADD_INVENTORY) {
        return [...state, action.payload];
    } else {
        return state;
    }
}

export default inventoryReducer; 
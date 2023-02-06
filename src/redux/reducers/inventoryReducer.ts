import { IInventory } from "../../entities/inventory";
import { InventoryActions } from "../../entities/inventoryActions";
import { removeDuplicateInventory } from "../../utils/removeDuplicateInventory";
import { InventoryActionTypes } from "../action-types/inventoryActionTypes";

const initialState: IInventory[] = [];

const inventoryReducer = (state = initialState, action: InventoryActions): IInventory[] => {
    if (action.type === InventoryActionTypes.ADD_INVENTORY) {
        const inventoryWithoutUpdatedItem = state.filter((inventory) => removeDuplicateInventory(inventory, action.payload));
        return [...inventoryWithoutUpdatedItem, action.payload];
    } else if (action.type === InventoryActionTypes.UPDATE_ALL_INVENTORY) {
        return action.payload
    } else {
        return state;
    }
}

export default inventoryReducer;
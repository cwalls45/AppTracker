import { IInventory } from "../../entities/inventory";
import { InventoryActionTypes } from "../../entities/inventoryActionTypes";
import { removeDuplicateInventory, sortInventoryByCompany } from "../../utils/inventoryUtils";
import { InventoryActions } from "../actions/inventoryActions";

const initialState: IInventory[] = [];

const inventoryReducer = (state = initialState, action: InventoryActionTypes): IInventory[] => {
    if (action.type === InventoryActions.ADD_INVENTORY) {
        const inventoryWithoutUpdatedItem = state.filter((inventory) => removeDuplicateInventory(inventory, action.payload));
        return sortInventoryByCompany([...inventoryWithoutUpdatedItem, action.payload]);
    } else if (action.type === InventoryActions.UPDATE_ALL_INVENTORY) {
        return action.payload
    } else {
        return state;
    }
}

export default inventoryReducer;
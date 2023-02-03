import { IInventory } from "../../entities/inventory";
import { InventoryActions } from "../../entities/inventoryActions";
import { InventoryActionTypes } from "../action-types/inventoryActionTypes";

const initialState: IInventory[] = [];

const inventoryReducer = (state = initialState, action: InventoryActions): IInventory[] => {
    if (action.type === InventoryActionTypes.ADD_INVENTORY) {
        const inventoryWithoutUpdatedItem
            = state.filter((inventory) => inventory.companyName !== action.payload.companyName && inventory.chemicalName !== action.payload.chemicalName)
        return [...inventoryWithoutUpdatedItem, action.payload];
    } else if (action.type === InventoryActionTypes.UPDATE_ALL_INVENTORY) {
        return action.payload
    } else {
        return state;
    }
}

export default inventoryReducer;
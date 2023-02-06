import { IInventory } from "../entities/inventory";

export const removeDuplicateInventory = (inventory: IInventory, inventoryToAdd: IInventory) => {
    return inventory.companyName !== inventoryToAdd.companyName || inventory.chemicalName !== inventoryToAdd.chemicalName;
};
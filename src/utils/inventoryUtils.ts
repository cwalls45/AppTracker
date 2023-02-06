import { IInventory } from "../entities/inventory";
import { sortBy } from "lodash";

export const removeDuplicateInventory = (inventory: IInventory, inventoryToAdd: IInventory) => {
    return inventory.companyName !== inventoryToAdd.companyName || inventory.chemicalName !== inventoryToAdd.chemicalName;
};

export const sortInventoryByCompany = (inventory: IInventory[]) => sortBy(inventory, ['companyName', 'chemicalName']);
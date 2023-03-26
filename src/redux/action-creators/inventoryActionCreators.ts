import axios from "axios";
import { Dispatch } from "redux";
import { IInventory } from "../../entities/inventory";
import { InventoryActions } from "../../entities/inventoryActions";
import { InventoryActionTypes } from "../action-types/inventoryActionTypes";
import { State } from "../reducers";

export const addInventory = (inventory: IInventory) => {
    return (dispatch: Dispatch<InventoryActions>) => dispatch({
        type: InventoryActionTypes.ADD_INVENTORY,
        payload: inventory
    });
}

export const postInventory = (inventory: IInventory) => {
    return async (dispatch: Dispatch<InventoryActions>, getState: () => State) => {
        try {
            const { environment, account } = getState();

            const response = await axios.post(`${environment.apiUrl}/api/addInventory`, { inventory, accountId: account.accountId });
            const formattedInventory: IInventory = response.data;

            dispatch({
                type: InventoryActionTypes.ADD_INVENTORY,
                payload: formattedInventory
            });

        } catch (error) {
            console.log('ERROR creating inventory: ', JSON.stringify(error, null, 2))
        }
    }
}

export const getAllInventory = () => {
    return async (dispatch: Dispatch<InventoryActions>, getState: () => State) => {
        try {
            const { environment, account } = getState();

            const response = await axios.get(`${environment.apiUrl}/api/getAllInventory/${account.accountId}`);
            const formattedInventory: IInventory[] = response.data;

            dispatch({
                type: InventoryActionTypes.UPDATE_ALL_INVENTORY,
                payload: formattedInventory
            });

        } catch (error) {
            console.log('ERROR creating inventory: ', JSON.stringify(error, null, 2))
        }
    }
}

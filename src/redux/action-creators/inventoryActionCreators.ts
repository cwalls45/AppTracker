import axios from "axios";
import { Dispatch } from "redux";
import { IInventory } from "../../entities/inventory";
import { InventoryActionTypes } from "../../entities/inventoryActionTypes";
import { InventoryActions } from "../actions/inventoryActions";
import { State } from "../reducers";
import { apiGet, apiPost } from "../../utils/apiRequests";

export const addInventory = (inventory: IInventory) => {
    return (dispatch: Dispatch<InventoryActionTypes>) => dispatch({
        type: InventoryActions.ADD_INVENTORY,
        payload: inventory
    });
}

export const postInventory = (inventory: IInventory) => {
    return async (dispatch: Dispatch<InventoryActionTypes>, getState: () => State) => {
        try {
            const { environment, account } = getState();

            const response = await apiPost(`${environment.apiUrl}/api/addInventory`, { inventory, accountId: account.accountId });
            const formattedInventory: IInventory = response.data;

            dispatch({
                type: InventoryActions.ADD_INVENTORY,
                payload: formattedInventory
            });

        } catch (error) {
            console.log('ERROR creating inventory: ', JSON.stringify(error, null, 2))
        }
    }
}

export const getAllInventory = () => {
    return async (dispatch: Dispatch<InventoryActionTypes>, getState: () => State) => {
        try {
            const { environment, account } = getState();

            const response = await apiGet(`${environment.apiUrl}/api/getAllInventory/${account.accountId}`);
            const formattedInventory: IInventory[] = response.data;

            dispatch({
                type: InventoryActions.UPDATE_ALL_INVENTORY,
                payload: formattedInventory
            });

        } catch (error) {
            console.log('ERROR creating inventory: ', JSON.stringify(error, null, 2))
        }
    }
}

import { Dispatch } from "redux";
import { AcccountActions } from "../../entities/accountActions";
import { AccountActionTypes } from "../action-types/accountActionTypes";

export const setAccountId = (accountId: string) => {
    return (dispatch: Dispatch<AcccountActions>) => dispatch({
        type: AccountActionTypes.SET_ACCOUNT_ID,
        payload: accountId
    });
}
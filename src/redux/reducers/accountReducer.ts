import { IAccount } from "../../entities/account";
import { AcccountActions } from "../../entities/accountActions";
import { AccountActionTypes } from "../action-types/accountActionTypes";

const initialState: IAccount = {
    accountId: '',
    user: {
        firstName: '',
        lastName: '',
        email: '',
    },
    courseAreas: []
}

const accountReducer = (state = initialState, action: AcccountActions): IAccount => {
    if (action.type === AccountActionTypes.SET_ACCOUNT_ID) {
        return { ...state, accountId: action.payload }
    } else if (action.type === AccountActionTypes.SET_USER) {
        return { ...state, user: action.payload }
    } else {
        return state;
    }
}

export default accountReducer;
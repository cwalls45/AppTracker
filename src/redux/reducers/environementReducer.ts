import { EnvironmentActions } from "../../entities/environmentActions";
import { EnvironmentActionsTypes } from "../action-types/environmentActionTypes";

export interface IEnvironment {
    apiUrl: string;
    accountId: string;
}

const initialState: IEnvironment = {
    apiUrl: '',
    accountId: '',
};

const environmentReducer = (state = initialState, action: EnvironmentActions): IEnvironment => {
    if (action.type === EnvironmentActionsTypes.SET_API_URL) {
        console.log('process', process.env.API_URL)
        //TODO: ensure there is always a url
        return { ...state, apiUrl: process.env.API_URL || 'could not find url' }
    } else if (action.type === EnvironmentActionsTypes.SET_ACCOUNT_ID) {
        return { ...state, accountId: action.payload}
    }
    else {
        return state
    }
}

export default environmentReducer;
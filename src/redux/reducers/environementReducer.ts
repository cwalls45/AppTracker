import { EnvironmentActionTypes } from "../../entities/environmentActionTypes";
import { EnvironmentActions } from "../action-types/environmentActions";

export interface IEnvironment {
    apiUrl: string,
    isLoading: boolean
}

const initialState: IEnvironment = {
    apiUrl: '',
    isLoading: false
};

const environmentReducer = (state = initialState, action: EnvironmentActionTypes): IEnvironment => {
    if (action.type === EnvironmentActions.SET_API_URL) {
        console.log('process', process.env.API_URL)
        //TODO: ensure there is always a url
        return { ...state, apiUrl: process.env.API_URL || 'could not find url' }
    } else if (action.type === EnvironmentActions.IS_LOADING) {
        return { ...state, isLoading: action.payload }
    } else {
        return state
    }
}

export default environmentReducer;
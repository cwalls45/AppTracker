import { EnvironmentActionTypes } from "../../entities/environmentActionTypes";
import { EnvironmentActions } from "../actions/environmentActions";

export interface IEnvironment {
    apiUrl: string,
    isLoading: boolean,
    isError: boolean
}

const initialState: IEnvironment = {
    apiUrl: '',
    isLoading: false,
    isError: false
};

const environmentReducer = (state = initialState, action: EnvironmentActionTypes): IEnvironment => {
    if (action.type === EnvironmentActions.SET_API_URL) {
        console.log('process', process.env.API_URL)
        //TODO: ensure there is always a url
        return { ...state, apiUrl: process.env.API_URL || 'could not find url' }
    } else if (action.type === EnvironmentActions.IS_LOADING) {
        return { ...state, isLoading: action.payload }
    } else if (action.type === EnvironmentActions.SET_ERROR) {
        return { ...state, isError: action.payload }
    } else {
        return state
    }
}

export default environmentReducer;
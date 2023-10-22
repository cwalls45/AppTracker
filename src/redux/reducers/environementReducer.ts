import { EnvironmentActionTypes } from "../../entities/environmentActionTypes";
import { EnvironmentActions } from "../actions/environmentActions";
import { apiUrls } from "../../constants/apiUrl";

export interface IEnvironment {
    apiUrl: string,
    isLoading: boolean,
    isError: {
        isError: boolean;
        message: string;
    }

}

const initialState: IEnvironment = {
    apiUrl: '',
    isLoading: false,
    isError: {
        isError: false,
        message: ''
    }
};

const environmentReducer = (state = initialState, action: EnvironmentActionTypes): IEnvironment => {
    if (action.type === EnvironmentActions.SET_API_URL) {
        return { ...state, apiUrl: apiUrls[`${process.env.NODE_ENV}`] || apiUrls['development'] }
    } else if (action.type === EnvironmentActions.IS_LOADING) {
        return { ...state, isLoading: action.payload }
    } else if (action.type === EnvironmentActions.SET_ERROR) {
        return { ...state, isError: action.payload }
    } else {
        return state
    }
}

export default environmentReducer;
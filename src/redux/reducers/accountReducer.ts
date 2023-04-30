import { IAccount } from "../../entities/account";
import { AcccountActionTypes } from "../../entities/accountActions";
import { AccountActions } from "../actions/accountActions";

const initialState: IAccount = {
    accountId: '',
    user: {
        firstName: '',
        lastName: '',
        email: '',
    },
    courseInfo: {
        courseName: '',
        address1: '',
        address2: '',
        city: '',
        zipCode: '',
        state: ''
    },
    courseAreas: []
}

const accountReducer = (state = initialState, action: AcccountActionTypes): IAccount => {
    if (action.type === AccountActions.SET_ACCOUNT_ID) {
        return { ...state, accountId: action.payload }
    } else if (action.type === AccountActions.SET_USER) {
        return { ...state, user: action.payload }
    } else if (action.type === AccountActions.SET_COURSE_INFO) {
        return { ...state, courseInfo: action.payload }
    } else if (action.type === AccountActions.SET_COURSE_AREAS) {
        return { ...state, courseAreas: action.payload }
    } else {
        return state;
    }
}

export default accountReducer;
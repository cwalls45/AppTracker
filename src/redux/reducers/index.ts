import { combineReducers } from 'redux';
import applicationsReducer from './applicationsReducer';
import chemicalApplicationReducer from './chemicalApplicationReducer';

const reducers = combineReducers({
    chemicalApplication: chemicalApplicationReducer,
    applications: applicationsReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
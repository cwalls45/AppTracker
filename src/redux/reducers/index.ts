import { combineReducers } from 'redux';
import chemicalApplicationReducer from './chemicalApplicationReducer';

const reducers = combineReducers({
    chemicalApplication: chemicalApplicationReducer
});

export default reducers;
import { combineReducers } from 'redux';
import applicationsReducer from './applicationsReducer';
import chemicalApplicationReducer from './chemicalApplicationReducer';
import environmentReducer from './environementReducer';

const reducers = combineReducers({
    environment: environmentReducer,
    chemicalApplication: chemicalApplicationReducer,
    applications: applicationsReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
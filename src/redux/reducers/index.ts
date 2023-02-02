import { combineReducers } from 'redux';
import applicationsReducer from './applicationsReducer';
import chemicalApplicationReducer from './chemicalApplicationReducer';
import environmentReducer from './environementReducer';
import inventoryReducer from './inventoryReducer';

const reducers = combineReducers({
    environment: environmentReducer,
    chemicalApplication: chemicalApplicationReducer,
    applications: applicationsReducer,
    inventory: inventoryReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
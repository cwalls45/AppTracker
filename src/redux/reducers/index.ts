import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import applicationsReducer from './applicationsReducer';
import chemicalApplicationReducer from './chemicalApplicationReducer';
import environmentReducer from './environementReducer';
import inventoryReducer from './inventoryReducer';

const reducers = combineReducers({
    environment: environmentReducer,
    chemicalApplication: chemicalApplicationReducer,
    applications: applicationsReducer,
    inventory: inventoryReducer,
    account: accountReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import applicationSummaryReducer from './applicationSummaryReducer';
import chemicalApplicationReducer from './chemicalApplicationReducer';
import environmentReducer from './environementReducer';
import inventoryReducer from './inventoryReducer';
import applicationsReducer from './applicationsReducer';

const reducers = combineReducers({
    environment: environmentReducer,
    chemicalApplication: chemicalApplicationReducer,
    applicationSummaries: applicationSummaryReducer,
    inventory: inventoryReducer,
    account: accountReducer,
    applications: applicationsReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
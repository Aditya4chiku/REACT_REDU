import { combineReducers } from 'redux';
import alert from './alert'
import auth from './auth'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    alert,
    auth,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default persistedReducer;
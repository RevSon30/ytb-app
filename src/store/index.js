import {combineReducers,configureStore} from '@reduxjs/toolkit'
import LoginReducer from './reducers'
import thunk from 'redux-thunk'
import { persistStore, persistReducer, } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
    login:LoginReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
   };

const pReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({reducer:pReducer,middleware:[thunk]})

export const persistor = persistStore(store);
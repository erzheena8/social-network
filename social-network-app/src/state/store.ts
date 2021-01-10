import {combineReducers, createStore} from 'redux';
import {dialogsReducers} from './reducers/dialogsReducers/dialogsReducers';
import {profileReducers} from './reducers/profileReducers/profileReducers';

const reducers = combineReducers({
    profilePage: profileReducers,
    dialogsPage: dialogsReducers
})

export type RootStateType = ReturnType<typeof reducers>
export const store = createStore(reducers)
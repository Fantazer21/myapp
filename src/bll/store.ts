import {combineReducers, createStore} from "redux";
import {setLanguageReducer} from "./reducers/setLanguageReducer";
import {setActiveMenuReducer} from "./reducers/setActiveMenuReducer";
import {setDelayReducer} from "./reducers/setDelayStatusReducer";




const rootReducer = combineReducers({
    setLanguage: setLanguageReducer,
    setActiveMenu: setActiveMenuReducer,
    setDelay: setDelayReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
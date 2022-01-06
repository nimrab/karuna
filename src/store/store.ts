import {combineReducers, createStore} from "redux";
import {surveyReducer} from "./surveyReducer";



export type rootReducerType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({

    survey: surveyReducer

})


export const store = createStore(rootReducer)

//@ts-ignore
window.store=store
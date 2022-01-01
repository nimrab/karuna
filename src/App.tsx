import React from 'react'
import css from './App.module.scss'
import {StartScreen} from "./components/StartScreen/StartScreen";
import {SurveyScreen} from "./components/SurveyScreen/SurveyScreen";

export function App() {
    return (
        <div className={css.app}>

            <StartScreen/>
            <SurveyScreen/>


        </div>
    )
}



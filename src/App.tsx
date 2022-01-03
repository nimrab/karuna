import React from 'react'
import css from './App.module.scss'
import {StartScreen} from "./components/StartScreen/StartScreen";
import {SurveyScreen} from "./components/SurveyScreen/SurveyScreen";
import {ResultScreen} from "./components/ResultScreen/ResultScreen";

export function App() {
    return (
        <div className={css.app}>

            <StartScreen/>
            <SurveyScreen/>
            <ResultScreen/>


        </div>
    )
}



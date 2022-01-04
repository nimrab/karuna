import React from 'react'
import css from './App.module.scss'
import {StartScreen} from "./components/StartScreen/StartScreen";
import {SurveyScreen} from "./components/SurveyScreen/SurveyScreen";
import {ResultScreen} from "./components/ResultScreen/ResultScreen";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./store/store";
import {InitialStateType} from "./store/surveyReducer";

export function App() {

    const state = useSelector<rootReducerType, InitialStateType>(state => state.survey)
    const dispatch = useDispatch()



    const currentItemCount = () => {
        if (state.currentSurveyItem === 0) {
            return <StartScreen/>
        }

        if (state.currentSurveyItem > state.surveyQuestions.length) {
            return <ResultScreen/>
        }

        return  <SurveyScreen/>

    }

    const screenToRender = currentItemCount()

    return (
        <div className={css.app}>

            {screenToRender}

        </div>
    )
}



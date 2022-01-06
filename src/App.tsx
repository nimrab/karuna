import React from 'react'
import css from './App.module.scss'
import {StartScreen} from "./components/StartScreen/StartScreen";
import {SurveyScreen} from "./components/SurveyScreen/SurveyScreen";
import {ResultScreen} from "./components/ResultScreen/ResultScreen";
import {useSelector} from "react-redux";
import {rootReducerType} from "./store/store";
import {InitialStateType} from "./store/surveyReducer";
import img_result_1 from './assets/img/result_1.png'
import img_result_2 from './assets/img/result_2.png'
import img_result_3 from './assets/img/result_3.png'


export function App() {

    const state = useSelector<rootReducerType, InitialStateType>(state => state.survey)

    const currentItemCount = () => {
        if (state.currentSurveyItem === 0) {
            return <StartScreen/>
        }

        if (state.currentSurveyItem > state.surveyQuestions.length) {

            const resultArr = state.resultData.map(el => el.expectedResult)
            const userResult = state.correctAnswerCount
            const imgArr = [img_result_1,img_result_2,img_result_3]

            for (let i = 0; i < resultArr.length; i++) {
                if (userResult <= resultArr[i]) {
                    return (
                        <ResultScreen
                            userResult={userResult}
                            questionQty={state.surveyQuestions.length}
                            headerText={state.resultData[i].headerText}
                            r_sub_1={state.resultData[i].r_sub_1}
                            r_sub_2={state.resultData[i].r_sub_2}
                            r_sub_3={state.resultData[i].r_sub_3}
                            imgPath={imgArr[i]}
                        />
                    )
                }
            }
        }
        return <SurveyScreen/>
    }

    const screenToRender = currentItemCount()

    return (
        <div className={css.app}>
            {screenToRender}
        </div>
    )
}



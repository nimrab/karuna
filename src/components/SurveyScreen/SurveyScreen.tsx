import React, {KeyboardEvent, useEffect} from 'react';
import css from './SurveyScreen.module.scss'
import {NextButton} from "../NextButton/NextButton";
import {LikeButton} from "../LikeButton/LikeButton";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";
import {
    AnswerItemType, changeCorrectAnswerCount,
    changeIsChosenAnswer,
    changeSurveyItem,
    InitialStateType,
    switchSetAnswer
} from "../../store/surveyReducer";
import {OptionBox} from "./OptionBox/OptionBox";
import {HeaderQuestion} from "./HeaderQuestion/HeaderQuestion";
import {Figure} from "./Figure/Figure";


export const SurveyScreen = () => {

    const state = useSelector<rootReducerType, InitialStateType>(state => state.survey)
    const dispatch = useDispatch()


    const question = state.surveyQuestions.find(el => el.id === state.currentSurveyItem)
    const answersObj = state.surveyAnswers.find(el => el.id === state.currentSurveyItem)
    const answersArr = answersObj!.answers


    const nextScreenSwitch = () => {
        dispatch(changeSurveyItem(state.currentSurveyItem + 1))
        dispatch(switchSetAnswer(false))
    }
    const chooseOption = (el: AnswerItemType) => {
        if (state.answerIsSet) {
            return
        } else {
            dispatch(switchSetAnswer(true))
            dispatch(changeIsChosenAnswer(answersObj!.id, el.id, true))

            if (el.isCorrect) {
                dispatch(changeCorrectAnswerCount(state.correctAnswerCount + 1))
            }

        }
    }
/*
    const onKeyPressHandler = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log('Enter!')
        }
    }
    useEffect(() => {
        document.addEventListener('keypress', onKeyPressHandler)
    },[])


*/


    return (
        <section className={css.survey_box}>

            <Figure figureNumber={state.currentSurveyItem}/>

            <span className={css.survey_counter}>{state.currentSurveyItem}/{state.surveyQuestions.length}</span>

            {question ? <HeaderQuestion question={question} /> : null}


            <div className={css.choose_option_box}>
                {answersArr.map(el => {
                    return (

                        <OptionBox
                            key={el.id}
                            el={el}
                            answerIsSet={state.answerIsSet}
                            chooseOption={chooseOption}
                        />
                    )
                })}
            </div>

            <div className={css.button_wrapper}>
                <NextButton
                    text={'Next'}
                    width={'218px'}
                    buttonCallback={!state.answerIsSet ? () => {} : nextScreenSwitch}
                    isDisabled={!state.answerIsSet}
                />
            </div>

            <div className={css.like_wrapper}>
                <LikeButton/>
            </div>

        </section>
    )
}


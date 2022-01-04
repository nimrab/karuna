import React from 'react';
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


    return (
        <section className={css.survey_box}>


            <figure className={css.survey_css_img}>
                <div className={css.triangle_top}></div>
                <div className={css.triangle_middle}></div>
                <div className={css.triangle_bottom}></div>
            </figure>


            <span className={css.survey_counter}>{state.currentSurveyItem}/{state.surveyQuestions.length}</span>
            <h1 className={css.header_question}>
                {question!.question_sub_1}
                <span className={css.header_color_text}>{question!.question_color}</span>
                {question!.question_sub_2}
            </h1>

            <div className={css.choose_option_box}>
                {answersArr.map(el => {
                    return (
                        <span
                            key={el.id}
                            className={`
                               ${css.choose_option} 
                               ${el.isChosen ? css.choose_bg : ''} 
                               ${state.answerIsSet && el.isCorrect ? css.choose_bd_green : ''} 
                               ${el.isChosen && !el.isCorrect ? css.choose_bd_red : ''}`
                            }
                            onClick={() => chooseOption(el)}
                        >{el.answer}</span>
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


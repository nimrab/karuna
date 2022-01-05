import React from 'react';
import css from './HeaderQuestion.module.scss';
import {SurveyQuestionsItemType} from "../../../store/surveyReducer";

type HeaderQuestionPropsType = {
    question: SurveyQuestionsItemType | null
}

export const HeaderQuestion = (props: HeaderQuestionPropsType) => {

    const {question} = props

    if (question === null) {
        return (
            <h1 className={css.header_question}>
                No Data
            </h1>
        )
    } else

        {
            return (
                <h1 className={css.header_question}>
                    {question.q_sub_1}
                    <span className={css.header_color_text}>{question.q_sub_2}</span>
                    {question.q_sub_3}
                    <span className={css.header_color_text}>{question.q_sub_4}</span>
                    {question.q_sub_5}
                </h1>

            )
        }
    }



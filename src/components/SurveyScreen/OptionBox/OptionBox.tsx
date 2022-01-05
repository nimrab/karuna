import React from 'react';
import css from "./OptionBox.module.scss";
import {AnswerItemType} from "../../../store/surveyReducer";

type OptionBoxPropsType = {
    el: AnswerItemType
    answerIsSet: boolean
    chooseOption: (el: AnswerItemType) => void
}

export const OptionBox = (props: OptionBoxPropsType) => {

    const {el, answerIsSet} = props


    return (
        <span className={
            `
              ${css.choose_option} 
              ${el.isChosen ? css.choose_bg : ''} 
              ${answerIsSet && el.isCorrect ? css.choose_bd_green : ''} 
              ${el.isChosen && !el.isCorrect ? css.choose_bd_red : ''}
            `
        }
              onClick={() => props.chooseOption(el)}
        >
            {el.answer}
        </span>
    )
}


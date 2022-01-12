import React from 'react';
import css from './NextButton.module.scss'
import arrow_img from '../../assets/img/big_arrow_right.png'
import arrow_img_disabled from '../../assets/img/arrow_disabled.png'

type NextButtonPropsType = {
    text: string
    width: string
    buttonCallback: () => void
    isDisabled: boolean
}

export const NextButton = (props: NextButtonPropsType) => {


    const width = {width: `${props.width}`}

    const onClickHandler = () => {
        props.buttonCallback()
    }


    return (
        <div
            className={props.isDisabled ? css.button_disabled : css.button}
            style={width}
            onClick={onClickHandler}
        >
            <span className={props.isDisabled ? css.button_text_disabled : css.button_text}>{props.text}</span>
            <img className={css.arrow_img} src={props.isDisabled ? arrow_img_disabled : arrow_img} alt='arrow'/>
        </div>
    )
}


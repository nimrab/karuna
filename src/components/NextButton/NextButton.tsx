import React from 'react';
import css from './NextButton.module.scss'
import arrow_img from '../../assets/img/big_arrow_right.png'

type NextButtonPropsType = {
    text: string
    width: string
}

export const NextButton = (props: NextButtonPropsType) => {

    const width = {width: `${props.width}`}

    return (
        <div className={css.button} style={width}>
            <span className={css.button_text}>{props.text}</span>
            <img className={css.arrow_img} src={arrow_img} alt='arrow'/>
        </div>
    )
}


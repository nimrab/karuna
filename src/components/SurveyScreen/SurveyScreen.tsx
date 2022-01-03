import React from 'react';
import css from './SurveyScreen.module.scss'
import {NextButton} from "../NextButton/NextButton";
import {LikeButton} from "../LikeButton/LikeButton";


export const SurveyScreen = () => {
    return (
        <section className={css.survey_box}>


            <figure className={css.survey_css_img}>

                <div className={css.triangle_top}></div>
                <div className={css.triangle_middle}></div>
                <div className={css.triangle_bottom}></div>

            </figure>


            <span className={css.survey_counter}>1/8</span>
            <h1 className={css.header_question}>
                What is the
                <span className={css.header_color_text}> recommended amount of one trade</span>
                , according to the basic rule of money management?


            </h1>
            <div className={css.choose_option_box}>
                <span className={css.choose_option}>3%</span>
                <span className={css.choose_option}>5%</span>
                <span className={css.choose_option}>10%</span>
            </div>

            <div className={css.button_wrapper}>
                <NextButton text={'Next'} width={'218px'}/>
            </div>

            <div className={css.like_wrapper}>
                <LikeButton/>
            </div>


        </section>
    )
}


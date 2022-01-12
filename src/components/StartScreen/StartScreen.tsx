import React from 'react'
import css from './StartScreen.module.scss'
import startLogoImg from '../../assets/img/init_logo.png'
import {NextButton} from '../NextButton/NextButton'
import {LikeButton} from '../LikeButton/LikeButton'
import {useDispatch, useSelector} from "react-redux";
import {changeSurveyItem, InitialStateType} from "../../store/surveyReducer";
import {rootReducerType} from "../../store/store";

export const StartScreen = () => {

    const state = useSelector<rootReducerType, InitialStateType>(state => state.survey)
    const dispatch = useDispatch()

    const changeItem = () => {
        dispatch(changeSurveyItem(state.currentSurveyItem + 1))
    }


    return (
        <section className={css.main_box}>

            <section className={css.left_box}>

                <span className={css.info_link}>useful info</span>
                <h1 className={css.header_text}>It’s tricky, and it’s all about trading</h1>
                <p className={css.text_level_1}>Pass this test to define your basic financial knowledge.</p>
                <p className={css.text_level_2}>Knowledge is like a muscle: the more you learn, the easier it goes.
                    It’s also a pleasure to know how far you’ve got from the beginning. This test is dedicated to
                    defining the volume of trading knowledge. Do you want to learn your level?</p>
                <p className={css.text_level_3}>Let’s go!</p>
                <div className={css.button_wrapper}>
                    <NextButton
                        text={'Let’s go!'}
                        width={'256px'}
                        buttonCallback={changeItem}
                        isDisabled={false}
                    />
                </div>

                <div className={css.like_wrapper}>
                    <LikeButton/>
                </div>

            </section>

            <figure className={css.right_box}>
                <img src={startLogoImg} className={css.img} alt='LogoImage'/>
            </figure>

        </section>
    )
}


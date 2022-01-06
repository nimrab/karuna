import React from 'react';
import css from './Figure.module.scss'

type FigurePropsType = {
    figureNumber: number
}


export const Figure = (props: FigurePropsType) => {


    switch (props.figureNumber) {
        case 1:
            return (
                <figure className={css.survey_css_img_1}>
                    <div className={css.tree_1}></div>
                    <div className={css.tree_2}></div>
                    <div className={css.tree_3}></div>
                </figure>
            )
        case 2:
            return (
                <figure className={css.survey_css_img_2}>
                    <div className={css.snow_1}></div>
                    <div className={css.snow_2}></div>
                    <div className={css.snow_3}></div>
                    <div className={css.snow_4}></div>
                </figure>
            )
        case 3:
            return (
                <figure className={css.survey_css_img_3}>
                    <div className={css.toy_1}></div>
                    <div className={css.toy_2}></div>
                    <div className={css.toy_3}></div>
                </figure>
            )
        case 4:
            return (
                <figure className={css.survey_css_img_4}>
                    <div className={css.boot_1}></div>
                    <div className={css.boot_2}></div>
                </figure>
            )
        case 5:
            return (
                <figure className={css.survey_css_img_5}>
                    <div className={css.candy_1}></div>
                    <div className={css.candy_2}></div>
                    <div className={css.candy_3}></div>
                </figure>
            )
        case 6:
            return (
                <figure className={css.survey_css_img_6}>
                    <div className={css.star_1}></div>
                    <div className={css.star_2}></div>
                    <div className={css.star_3}></div>
                </figure>
            )
        case 7:
            return (
                <figure className={css.survey_css_img_7}>

                    <div className={css.present_5}>
                        <div className={css.present_1}></div>
                        <div className={css.present_2}></div>
                        <div className={css.present_3}></div>
                        <div className={css.present_4}></div>
                    </div>
                    <div className={css.present_6}></div>
                </figure>
            )
        case 8:
            return (
                <figure className={css.survey_css_img_8}>
                    <div className={css.glove_1}></div>
                    <div className={css.glove_2}>
                        <div className={css.glove_3}></div>
                    </div>
                </figure>
            )
        default:
            return (
                <figure className={css.survey_css_img_1}>
                    <div className={css.triangle_top}></div>
                    <div className={css.triangle_middle}></div>
                    <div className={css.triangle_bottom}></div>
                </figure>
            )
    }
}

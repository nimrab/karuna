import React from 'react';
import css from './ResultScreen.module.scss'
import {LikeButton} from "../LikeButton/LikeButton";


type ResultScreenPropsType = {
    userResult:number
    questionQty: number
    headerText: string
    r_sub_1:string
    r_sub_2:string
    r_sub_3:string
    imgPath:string
}


export const ResultScreen = (props: ResultScreenPropsType) => {

    const {userResult, questionQty, headerText, r_sub_1, r_sub_2, r_sub_3, imgPath} = props


    return (

    <section className={css.result_box}>

        <div className={css.left_box}>

            <article className={css.left_box_text}>
                <h1 className={css.result_header_text}>
                    {userResult}/{questionQty} {headerText}
                </h1>
                <p className={css.text_level_1}>{r_sub_1}</p>
                <p className={css.text_level_2}>{r_sub_2}</p>
                <p className={css.text_level_3}>{r_sub_3}</p>
            </article>

            <div className={css.like_wrapper}>
                <LikeButton/>
            </div>

        </div>

        <figure className={css.right_box}>
            <img src={imgPath} className={css.img} alt='Result Image'/>

        </figure>


    </section>
)

};


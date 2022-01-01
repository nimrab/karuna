import React from 'react'
import css from './LikeButton.module.scss'
import like_img from '../../assets/img/icon_like.png'

export const LikeButton = () => {
    return (
        <div className={css.like_box}>
            <img src={like_img} alt='Like'/>
            <span className={css.like_text}>Like</span>
        </div>
    )
}


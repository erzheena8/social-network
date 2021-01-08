import React from 'react'
import classes from './Post.module.css'
import user from '../../../../access/icons/user.png'
import like from '../../../../access/icons/like.png'

type PostPropsType = {
    message: string
    like: number
}

export const Post = React.memo((props:PostPropsType) => {
    return (
        <div className={classes.posts}>
            <div className={classes.itemUser}>
                <img src={user}/>
                <span>Name Surname</span>
            </div>
            <div className={classes.itemPost}>
                {props.message}
            </div>
            <div className={classes.itemLike}>
                <span>{props.like}</span>
                <img src={like}/>
            </div>
        </div>

    )
})
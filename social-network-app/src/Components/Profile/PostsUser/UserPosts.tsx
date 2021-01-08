import React, {useState} from 'react'
import classes from './UserPosts.module.css'
import {Post} from "./Post/Post";

export const UserPosts = React.memo(() => {
    const [focus, setFocus] = useState<boolean>(false)
    return (
        <div className={classes.userPosts}>
            <div className={classes.userPostsWrapper}>
                <div className={focus ? classes.newPostFocus : classes.newPost}>
                    <textarea placeholder='Что у вас нового?'
                              onFocus={() => {
                                  setFocus(true)
                              }}
                              onBlur={() => {
                                  setFocus(false)
                              }}/>
                    {focus && <div className={classes.addPost}>
                        <button>Отправить</button>
                    </div>}
                </div>
                <Post message='Привет я очень голодный' like={0}/>
                <Post message='Привет купил собаку' like={10}/>
                <Post message='Привет дурачки' like={3}/>
            </div>
        </div>
    )
})
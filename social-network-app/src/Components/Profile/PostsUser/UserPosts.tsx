import React, {useState} from 'react'
import classes from './UserPosts.module.css'
import {Post} from './Post/Post';
import {InitialStateProfileType, PostType} from '../../../state/reducers/profileReducers/profileReducers';

type UserPostsPropsType = {
    profilePage: InitialStateProfileType
    changeValue: (value: string) => void
    addPost:(userId: number)=>void
}

export const UserPosts = React.memo((props: UserPostsPropsType) => {
    const [focus, setFocus] = useState<boolean>(false)
    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.changeValue(e.currentTarget.value)
    }
    const addPost = () => {
        props.addPost(4)
    }
    return (
        <div className={classes.userPosts}>
            <div className={classes.userPostsWrapper}>
                <div className={focus ? classes.newPostFocus : classes.newPost}>
                    <textarea value={props.profilePage.newPostText}
                              placeholder='Что у вас нового?'
                              onChange={changeText}
                              onFocus={() => {
                                  setFocus(true)
                              }}
                              // onBlur={() => {
                              //     setFocus(false)
                              // }}
                    />
                    {focus && <div className={classes.addPost}>
                        <button onClick={addPost}>Отправить</button>
                    </div>}
                </div>
                {
                    props.profilePage.posts.map(p=> {
                        return <Post key={p.id} message={p.message} like={p.likeCount}/>
                    })
                }

            </div>
        </div>
    )
})
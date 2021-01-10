import React from 'react'
import classes from './Profile.module.css'
import {UserHeader} from './HeaderUser/UserHeader';
import {UserPosts} from './PostsUser/UserPosts';
import {FriendUser} from './FriendUser/FriendUser';
import {InitialStateProfileType} from "../../state/reducers/profileReducers/profileReducers";

type ProfilePropsType = {
    profilePage: InitialStateProfileType
    changeValue: (value: string) => void
    addPost:(userId: number)=>void
}

export const Profile = React.memo((props:ProfilePropsType) => {
    return (
        <div className={classes.profile}>
               <UserHeader/>
               <div className={classes.profileInner}>
                   <FriendUser/>
                   <UserPosts profilePage={props.profilePage} changeValue={props.changeValue} addPost={props.addPost}/>
               </div>
        </div>
    )
})
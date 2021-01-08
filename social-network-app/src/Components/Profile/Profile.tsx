import React from 'react'
import classes from './Profile.module.css'
import {UserHeader} from "./HeaderUser/UserHeader";
import {UserPosts} from "./PostsUser/UserPosts";
import {FriendUser} from "./FriendUser/FriendUser";

export const Profile = React.memo(() => {
    return (
        <div className={classes.profile}>
               <UserHeader/>
               <div className={classes.profileInner}>
                   <FriendUser/>
                   <UserPosts/>
               </div>
        </div>
    )
})
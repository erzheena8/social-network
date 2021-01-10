import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './UserDialog.module.css'

type UserDialogPropsType = {
    name: string
    userId: number
}

export const UserDialog = React.memo((props: UserDialogPropsType) => {
    return (
        <div className={classes.itemUser}>
            <NavLink to={`/dialogs/${props.userId}`} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
})
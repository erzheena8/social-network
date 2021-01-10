import React from 'react'
import classes from './Message.module.css'

type MessagePropsType = {
    user: boolean
    message: string
}

export const Message = React.memo((props: MessagePropsType) => {
    return (
        <div className={props.user ? classes.messageUser : classes.messageOtherUser}>
            {props.message}
        </div>
    )
})
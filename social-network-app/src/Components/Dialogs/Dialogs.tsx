import React from 'react'
import classes from './Dialogs.module.css'
import {UserDialog} from "./UserDialog/UserDialog";
import {Message} from "./Message/Message";
import {InitialStateDialogsType} from "../../state/reducers/dialogsReducers/dialogsReducers";

type DialogsPropsType = {
    dialogsPage: InitialStateDialogsType
    changeMessage: (message:string)=>void
    addMessage: () => void
}

export const Dialogs = React.memo((props:DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.usersBlock}>
                <div className={classes.usersTitle}>
                    <h1>Чаты</h1>
                </div>
                <div className={classes.usersItems}>
                    {
                        props.dialogsPage.dialogs.map(u=> {
                        return <UserDialog key={u.id} name={u.name} userId={u.id}/>})
                    }
                </div>
            </div>
            <div className={classes.messageBlock}>
                {
                    props.dialogsPage.messages.map(m=> {
                        return <Message key={m.id} user={m.user} message={m.message}/>})
                }
            </div>
            <div className={classes.addMessage}>
                <input value={props.dialogsPage.newMessage} onChange={(e)=>{props.changeMessage(e.currentTarget.value)}}/>
                <button onClick={()=>props.addMessage()}>Отправить</button>
            </div>
        </div>
    )
})
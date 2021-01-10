import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Sidebar.module.css'

export const Sidebar = React.memo(() => {
    return (
                <div className={classes.nav}>
                       <NavLink to='/profile' activeClassName={classes.active}>Профиль</NavLink>
                       <NavLink to='/dialogs' activeClassName={classes.active}>Диалоги</NavLink>
                       <a href='#'>Новости</a>
                       <a href='#'>Музыка</a>
                       <a href='#'>Настройки</a>
                </div>
    )
})
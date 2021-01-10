import React from 'react'
import classes from './Header.module.css'
import logo from '../../access/logo/logo.png'
import login from '../../access/icons/login.png'
import {Sidebar} from './Sidebar/Sidebar';

export const Header = React.memo(() => {
    return (
        <div className={classes.header}>
            <div className='container'>
                <div className={classes.headerInner}>
                    <div className={classes.logo}>
                        <img src={logo}/>
                    </div>
                    <div className={classes.sidebar}>
                        <Sidebar/>
                    </div>
                    <div className={classes.login}>
                            <img src={login}/>
                    </div>
                </div>
            </div>
        </div>
    )
})
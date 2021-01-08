import React from 'react'
import classes from './Sidebar.module.css'

export const Sidebar = React.memo(() => {
    return (
                <div className={classes.nav}>
                       <a>links1</a>
                       <a>links2</a>
                       <a>links3</a>
                       <a>links4</a>
                </div>
    )
})
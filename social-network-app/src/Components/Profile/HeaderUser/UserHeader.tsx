import React from 'react'
import classes from './UserHeader.module.css'

export const UserHeader = React.memo(() => {
    return (
        <div className={classes.userHeader}>
            <div className={classes.imageItems}>
                <div className={classes.imageItem}>
                    <div className={classes.name}>Name Surname</div>
                </div>
                <div className={classes.photoItem}></div>
            </div>
            <div className={classes.descriptionItem}>
                description
            </div>
        </div>
    )
})

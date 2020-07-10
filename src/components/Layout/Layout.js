import React from 'react'
import classes from './Layout.module.css'

const layout = ( props ) => (

  <div>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </div>
)

export default layout

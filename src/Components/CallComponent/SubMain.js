import React from 'react'
import { Typography,AppBar } from  '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Sidebar from './component/Sidebar'
import Notifications from './component/Notifications'
import VideoPlaye from './component/VideoPlayer'


const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      border: '2px solid black',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));

const SubMain = () => {

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position='static' color="inherit">
                <Typography variant="h2" align="center">
                    Video Chat
                </Typography>
            </AppBar>
            <VideoPlaye/>
            <Sidebar>
                <Notifications/>
            </Sidebar>
        </div>
    )
}

export default SubMain

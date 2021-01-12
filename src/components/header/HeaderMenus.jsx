import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import ChatIcon from '@material-ui/icons/Chat';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  icon: {
    fontSize: "130%"
  }
})

const HeaderMenus = (props) => {
  const classes = useStyles();

  return(
    <>
      <IconButton >
        <InsertChartIcon fontSize="inherit" className={classes.icon}/>
      </IconButton>
      <IconButton>
        <ChatIcon fontSize="inherit" className={classes.icon} />
      </IconButton>
      <IconButton onClick={(e) => props.handleDrawerToggle(e)}>
        <MenuIcon fontSize="inherit" className={classes.icon}/>
      </IconButton>
    </>
  )
}

export default HeaderMenus;
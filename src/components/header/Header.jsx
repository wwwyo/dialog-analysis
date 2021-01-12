import React from 'react';
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import {useDispatch, useSelector} from 'react-redux';
import {getIsSignedIn} from '../../reducks/users/selectors';
import {push} from 'connected-react-router';
import {default as logo} from '../../assets/images/logo__dialog-analysis.png';
import {HeaderMenus} from './index';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#fff",
    color: "#000",
  },
  toolBar: {
    margin: "0 auto",
    maxWidth: 1024,
    width: "100%"
  },
})

const Header = (props) => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);
  const dispatch = useDispatch();

  return(
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar} >
        <Toolbar className={classes.toolBar}>
          <img src={logo} alt="DialogAnalysis" className="header__logo" onClick={() => dispatch(push("/"))} />
          {isSignedIn && (
            <div className="header__menus">
              <HeaderMenus />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>

  )
}

export default Header;
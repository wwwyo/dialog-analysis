import React, { useCallback, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { TextInput } from '../UIkit/index';

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
      width: 256
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width:256
  }
}));

const ClosableDrawer = (props) => {
  const classes = useStyles(); 
  const {container} = props;

  const [searchKeyword, setSearchKeyword] = useState("")

  const inputSearchKeyword = useCallback((e) => {
    setSearchKeyword(e)
  }, [setSearchKeyword])

  return(
    <nav className={classes.drawer}>
      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={props.open}
        onClose={(e => props.onClose(e))}
        classes={{paper: classes.drawerPaper}}
        ModalProps={{keepMounted: true}}
      >
        <div className="header__search-field">
          <TextInput 
            fullWidth={true} label="キーワードを入力" multiline={false}
            onChange={inputSearchKeyword} required={false} value={searchKeyword} type="text"
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="logout">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
              <ListItemText primary={"ログアウト"} />
          </ListItem>
        </List>
      </Drawer>
    </nav>
  )
}

export default ClosableDrawer;
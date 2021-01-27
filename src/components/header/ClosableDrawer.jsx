import React, { useCallback, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import HelpIcon from '@material-ui/icons/Help';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { TextInput } from '../UIkit/index';
import {useDispatch} from 'react-redux';
import { push } from 'connected-react-router';
import { signOut } from '../../reducks/users/operations';

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
    width: 256
  },
  drawerPaper: {
    width:256
  }
}));

const ClosableDrawer = (props) => {
  const classes = useStyles(); 
  const dispatch = useDispatch();
  const {container} = props;

  const [searchKeyword, setSearchKeyword] = useState("")

  const inputSearchKeyword = useCallback((e) => {
    setSearchKeyword(e)
  }, [setSearchKeyword])

  const selectMenu = (event, path) => {
    dispatch(push(path));
    props.onClose(event)
  }

  const menus = [
    {func: selectMenu, label: "プロフィール", icon: <PersonIcon />, id: "profile", value: "/user/mypage"},
    {func: selectMenu, label: "共有", icon: <ShareIcon />, id: "share", value: "/user/share"},
    {func: selectMenu, label: "問い合わせ", icon: <HelpIcon />, id: "help", value: "help" }
  ]

  return(
    <nav className={classes.drawer}>
      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={props.open}
        onClose={e => props.onClose(e)}
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
          {menus.map(menu => (
            <ListItem button key={menu.id} onClick={(e) => menu.func(e, menu.value)} >
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.label}/>
            </ListItem>
          ))}
          <ListItem button key="logout" onClick={() => dispatch(signOut())}>
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
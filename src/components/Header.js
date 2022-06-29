import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css";
export default function Header() {
  return <div>
   {/* <div className= "head"> Recipe KING
   </div> */}
   <div>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start"  color="inherit" aria-label="menu">
           
          </IconButton> */}
          <LocalPizzaIcon className="pizza"/>
          <Typography variant="h6" >
              Recipe King
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>

  </div>;
}

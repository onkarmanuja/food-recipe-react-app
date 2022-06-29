import React,{useEffect,useState} from 'react';
import "./Rightbar.css";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";


export default function Rightbar() {
  
  
 

  
  // {console.log(categories)}
  return (<div className="categories">
    <List component="nav"  aria-label="mailbox folders">
    <ListItem  >
      <Link to="/Surprise-Dish">
      <Button className="listitem" variant="contained" color="secondary" disableElevation>
     Surprise Dish 
    </Button>
    </Link>
    
       
      </ListItem>
      
      <Divider light /> 
      <ListItem  >
      <Link to="/Categories">
      <Button className="listitem" variant="contained" color="secondary" disableElevation>
     Categories 
    </Button>
    </Link>
    
       
      </ListItem>
    </List>
 
     
    
   

  </div>
  );
}

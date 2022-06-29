import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Ingredients(props) {
  return <div>
     <List component="nav" aria-label="contacts">
      <ListItem >
        <ListItemText primary={props.items} />
      </ListItem>
    </List>
  </div>;
}

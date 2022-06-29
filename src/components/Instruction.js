import React from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import "./Instruction.css";

export default function Instruction(props) {
  return( <div>
   <Card className= "Outer">
      <CardContent>
        <Typography className=" " color="textSecondary" gutterBottom>
          Instructions
        </Typography>
        
        
        <Typography variant="body2" component="p">
          {props.text}
          <br />
         
        </Typography>
      </CardContent>
     
    </Card>
 
  </div>
  );
}

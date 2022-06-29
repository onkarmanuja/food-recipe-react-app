import React,{useEffect,useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Instruction from './Instruction';

import "./Surprise.css"

export default function Surprise() {
const[random,fillrandom] = useState([])
useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php').
    then(response => {return response.json()}).then(data=>{fillrandom(data.meals)})
   },([]))
    console.log(random);

    return (
        <div className="outer">
        {random.map((item)=>{
            return(
                
            <div><Card className="Main">
            <CardActionArea>
              <CardMedia className="photo"
              component="img"
              alt="image not found"
                className="content"
                image={item.strMealThumb}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 Category : { item.strCategory}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Name : {item.strMeal}
                </Typography>
              </CardContent>
            </CardActionArea>
           
          </Card>
        
            <Instruction text={item.strInstructions} ></Instruction>
          
         
          
        
          
          </div>
         
          
         
          )})}


        
          </div>
        
    );
}

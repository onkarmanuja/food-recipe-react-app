import React,{useEffect,useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Category.css";

export default function Category() {
    const [category,setCategory] = useState([]);
 
   useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php').
    then(response => {return response.json()}).then(data=>{setCategory(data.categories)})
   },([]))
   
    return (
        <div className="outer">
        {category.map((item)=>{
            return(
                
            (<Card className="Main">
            <CardActionArea>
              <CardMedia
              component="img"
              alt="image not found"
                className="content"
                image={item.strCategoryThumb}
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.strCategory}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.strCategoryDescription.substr(0,250)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>))})}
        
          </div>
        
    )
     
    }


import Postimage from '../../../image/image2.jpg'
import avatarimage from '../../../image/Logo.jpg'
import { Favorite, FavoriteBorder, MoreVert, Comment } from "@mui/icons-material";
import { Grid,Paper, TextField, Button, Link } from '@material-ui/core'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const CardStyle = { margin: '5' }
const paperStyle={padding :40,height:'auto' , width:650, margin:"40px auto" ,
background : "linear-gradient(to right  ,#f0ffff, #e0ffff)" ,border : '2px solid' , borderRadius : '25px',
shadowColor : '#545454' ,shadowOpacity: 0.8, shadowRadius: 2 }


const Post = () => {
  return (
    // <Paper  >
    
   <Grid  container  justifyContent = "center" >
    <Card  style = {{border : '1px solid' , borderRadius : '25px',
    shadowColor : '#545454' ,shadowOpacity: 0.8, shadowRadius: 2 ,width : '80%' , height : '50%'}}>
      <CardHeader style ={{background : 'linear-gradient(to right  ,#f0ffff, #e0ffff)'}}
        avatar=
        {
          <Avatar sx={{ bgcolor: "#add8e6"  , fontFamily : 'cursive' }} aria-label="recipe">
            <img src = {avatarimage} />
          </Avatar>
        }
        action=
        {
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }

        title="Sham Dawwa" 
        subheader="September 14, 2022"
        titleTypographyProps = {{fontFamily : 'cursive' ,color : '#006400'}}
        subheaderTypographyProps = {{fontFamily : 'cursive'}}
      />
      <CardMedia
        component="img"
        height="20%"
        width = "20%"
        image= {Postimage}
        alt="StudentPost"
      />
      <CardContent style={{background : 'linear-gradient(to right  ,#f0ffff, #e0ffff)'}}>
        <Typography variant="body2" color="text.secondary" fontFamily = 'cursive' margin='4px' >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing style={{background : 'linear-gradient(to right  ,#f0ffff, #e0ffff)'}}>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="comment">
          <Comment />
        </IconButton>
      </CardActions>
    </Card>
     </Grid>
  );
};

export default Post;
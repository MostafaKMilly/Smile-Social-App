import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import BackG from '../../../image/BackGround.jpg'
import {useState} from 'react';



const Login=()=>
{
    const [details, setdetails] = useState({name:""  ,password : ""})
    const handleSubmit=(event)=>
    {
        
        event.preventDefault();
    }
    
    const paperContainer =  {backgroundImage: `url(${BackG}) ` }
    const paperStyle={padding :40,height:'75vh',width:450, margin:"40px auto" ,
    background : "linear-gradient(to right  ,#f0ffff, #e0ffff)" ,border : '2px solid' , borderRadius : '25px',
    shadowColor : '#545454' ,shadowOpacity: 0.8, shadowRadius: 2   }
    const avatarStyle={backgroundColor :'Green'}
    return(
        <Grid container  justifyContent = "flex-end"  style={paperContainer}    >
            {/* <Typography align = 'left' > */}
            <Paper   elevation={10} style={paperStyle } >
                <Grid align='center' >
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        
                    <h2 style ={{fontFamily:'cursive'}}>Sign In</h2>
                </Grid>
               {/* <Grid container justifyContent = "flex-end"> */}
                <form  onSubmit={handleSubmit} >
                        
                    <TextField label='Username' placeholder='Enter username' 
                    onChange = {e=>setdetails({...details , name :e.target.value})} value={details.name}
                    fullWidth required style = {{margin : '10px 0'}} InputLabelProps={{style : {fontFamily : 'cursive'}}}/>

                    <TextField label='Password' placeholder='Enter password' type='password' 
                    onChange = {e=>setdetails({...details , password :e.target.value})} value={details.password}
                    fullWidth required InputLabelProps={{style : {fontFamily : 'cursive'}}}/>
                 
                    <FormControlLabel
                        control=
                        {

                            <Checkbox
                            name="checkedB"
                            color="primary"
                              />
                        }
                        label={<Typography style ={{margin :'20px auto' , fontFamily : 'cursive' }}>Remember me</Typography>}
                 />
                 </form>
                 {/* </Grid> */}
                 
                <Button type='submit' color='primary' variant="contained" style={{margin:'30px auto' , fontFamily : 'cursive' }}  fullWidth>Sign in</Button>
                <Typography >
                     <Link 
                      href="#" style = {{fontFamily : 'cursive'}} >
                        Forgot password ?

                </Link>
                </Typography>
                <Typography  style = {{margin : '10px auto' , fontFamily : 'cursive'}}> Do you have an account ?
                     <Link href="#" style = {{fontFamily : 'cursive'}}>
                        Sign Up 
                </Link>
                </Typography>
               
            </Paper>
            {/* </Typography> */}
        </Grid>

    )
}

export default Login



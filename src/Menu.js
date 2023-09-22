import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, FormGroup } from '@mui/material';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import menuData from './data';
import { red } from '@mui/material/colors';
import CallIcon from '@mui/icons-material/Call';
import TextsmsIcon from '@mui/icons-material/Textsms'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function Menu() {

    const [category,setCategory] = useState('')

    const filterData = menuData.filter(item => {
        if(category === 'Veg Starters' && item.category === 'Veg Starters'){
            return true;
        }
        else if(category === 'Non-Veg Starters' && item.category === 'Non-Veg Starters'){
            return true;
        }
        else if(category === 'Biryani' && item.category === 'Biryani'){
            return true;
        }
        else if(category === 'Fried Rice' && item.category === 'Fried Rice'){
            return true;
        }
        else if(category === '')
        {
            return true;
        }
  
            return false;
        
    })
   

  return (
    <Container style={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center' }}>
      <img src='./assets/biryani.png' alt='' style={{height: 'auto', marginTop: '1.5rem', width: '100%', maxWidth: '100px', borderRadius: '50%'}}/>
      
     
     
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '1rem' }}>
        <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          TAKE AWAY & HOME DELIVERY
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CallIcon style={{ color: 'white', fontSize: '1rem', marginRight: '0.5rem' }} />
          <Typography variant="body1" style={{ color: 'white', fontSize: '1rem' }}>
            Place your order now:
          </Typography>
          <a href="tel:9885461510">
            <Typography variant="body1" style={{ color: 'white', fontSize: '1rem', fontWeight: 'bold', marginLeft: '0.2rem' }}>
              9885461510
            </Typography>
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.2rem' }}>
          <TextsmsIcon style={{ color: 'white', fontSize: '1rem', marginRight: '0.5rem' }} />
          <Typography variant="body1" style={{ color: 'white', fontSize: '1rem' }}>
            WhatsApp:
          </Typography>
          <a href="https://wa.me/918454078061" target="_blank" rel="noopener noreferrer">
            <Typography variant="body1" style={{ color: 'white', fontSize: '1rem', fontWeight: 'bold', marginLeft: '0.2rem' }}>
              8454078061
            </Typography>
          </a>
        </div>
      </div>



        <FormGroup style={{flexDirection: 'row'}}>
      <FormControlLabel control={<Switch checked= {category === ''} onChange={() => setCategory('')} />} label="All" style={{color: 'white'}}/>
      <FormControlLabel control={<Switch checked= {category === 'Veg Starters'} onChange={() => setCategory('Veg Starters')}/>} label="Veg Starters" style={{color: 'white' , fontSize: '1rem'}} />
      <FormControlLabel control={<Switch checked= {category === 'Non-Veg Starters'} onChange={() => setCategory('Non-Veg Starters')} />} label="Non-Veg Starters"  style={{color: 'white', fontSize: '1rem'}}/>
      <FormControlLabel control={<Switch checked= {category === 'Biryani'} onChange={() => setCategory('Biryani')} />} label="Biryani's"  style={{color: 'white', fontSize: '1rem'}}/>
      <FormControlLabel control={<Switch checked= {category === 'Fried Rice'} onChange={() => setCategory('Fried Rice')} />} label="Fried Rice"  style={{color: 'white', fontSize: '1rem'}}/>
     
      </FormGroup>
      
      <Grid container spacing={2}>
        {filterData.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{fontSize:' 1rem', display: 'flex',  alignItems: 'center', justifyContent: 'center'}}>
                  {item.title} {item.type === 'veg' ? (< RadioButtonCheckedRoundedIcon fontSize="small" color="success" style={{marginLeft: '0.2rem'}} />)
                    :
                    (
                        <RadioButtonCheckedRoundedIcon fontSize="small" sx={{ color: red[500] }}  style={{marginLeft: '0.2rem'}} />
                    )  
                }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
                <Typography variant="h6" sx={{ marginTop: 2 ,fontWeight: 'bold'}}>
                  Price: {'\u20B9'}{item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Menu;

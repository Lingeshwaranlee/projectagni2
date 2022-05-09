import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {BiRupee} from "react-icons/bi";
export function Cardprofile() {
  const theme = useTheme();
  return (
    <div className="box0">  

      <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h6">
        CRISPY CHICKEN BURGER
        </Typography>
        <br></br>
        <Typography variant="subtitle1" color="text.secondary" component="div">
           Crispy Chicken Patty Burger<br></br> Our Best Seller
          </Typography>
          <br></br>
          <Typography component="div" variant="h5">
         <BiRupee/> 80/-
          </Typography>
      </CardContent>
     
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20201203112052742554_262x360jpg"
      alt="Live from space album cover"
    />
  </Card>
  <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h6">
          CRISPY VEG BURGER
        </Typography>
        <br></br>
        <Typography variant="subtitle1" color="text.secondary" component="div">
        Our Best-Selling Burger With Crispy<br></br> Veg,Patty,fresh Onion
           </Typography>
           <br></br>
          <Typography component="div" variant="h5">
         <BiRupee/> 55/-
          </Typography>
      </CardContent>
     
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20211129155934290360_262x360jpg"
      alt="Live from space album cover"
    />
  </Card>
  <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h6">
      BK CLASSIC CHICKEN
        </Typography>
        <br></br>
        <Typography variant="subtitle1" color="text.secondary" component="div">
        Our Tribute To Classic American<br></br> Taste.Bk Chicken Party
          </Typography>
          <br></br>
          <Typography component="div" variant="h5">
         <BiRupee/> 109/-
          </Typography>
      </CardContent>
     
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20201117115027242926_262x360jpg"
      alt="Live from space album cover"
    />
    
  </Card>
  <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h6">
        BK CLASSIC VEG
        </Typography>
        <br></br>
        <Typography variant="subtitle1" color="text.secondary" component="div">
           Our Tribute To Classic American<br></br> Taste.Bk Veg Party
          </Typography>
          <br></br>
          <Typography component="div" variant="h5">
         <BiRupee/> 109/-
          </Typography>
      </CardContent>
     
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314070746205836_262x360jpg"
      alt="Live from space album cover"
    />
    
  </Card>
  <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h6">
        VEG  FRIES(KING)
        </Typography>
        <br></br>
        <Typography variant="subtitle1" color="text.secondary" component="div">
           The Perfect Crispy Burger
          </Typography>
          <br></br>
          <Typography component="div" variant="h5">
         <BiRupee/> 109/-
          </Typography>
      </CardContent>
     
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20210430065825460098_262x360jpg"
      alt="Live from space album cover"
    />
    
  </Card>
  
  </div>
  );
}

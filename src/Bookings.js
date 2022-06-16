import './Booking.css';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {SiGooglepay,SiPaytm,SiRazorpay,SiPhonepe} from "react-icons/si";
import {FaPaypal,FaRupeeSign} from "react-icons/fa";

//Booking page component
export function Bookings() {
  const history =useHistory(); 
  return (
    <div>
   <img className="img" src="https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20220329055416176375_1440x300jpg"></img>
     
      <div>
      <h2>Personal Details</h2>
      <Box
      sx={{
        width: "40%",
        height: "100%",
        backgroundColor: 'white',
        marginTop:'3%',
        marginLeft:"30%",
        borderRadius:"12px",
        overflow: "hidden",
        boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
        position:"static",
       
      }}
    >
      <h5>To Place Your Order Now,Log In To Your Account   <Button style={{marginLeft:"10%",backgroundColor:"crimson",color:"white",borderRadius:"12PX"}} onClick={() => history.push("/login")} >Login to Place order</Button></h5>   </Box>
      <br></br>
      <TextField id="outlined-basic" label="Delivery Address" variant="outlined" style={{width: "40%",height: "100%",}} />
      <br></br>
      <br></br>
     
       </div>
       <Box
      sx={{
        width: "40%",
        height: "100%",
        backgroundColor: 'white',
        marginTop:'3%',
        marginLeft:"30%",
        borderRadius:"12px",
        overflow: "hidden",
        boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
        position:"static",
       backgroundColor:"crimson"
      }}
    >
      <h3>Enjoy Your Pizza!!! </h3>   </Box>
       <Box
      sx={{
        width: "35%",
        height: "100%",
        backgroundColor: 'white',
        marginTop:'3%',
        marginLeft:"30%",
        borderRadius:"12px",
        overflow: "hidden",
        boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
        position:"static",
        padding:"3%"
       
      }}
    >
      <h3>PAYMENT MODE</h3>
       <div className='button' >
      <a href='https://pay.google.com/' target="_blank" style={{ background: 'crimson' ,color:"white",padding:"20px","text-decoration" : "none","borderRadius":"40px"}}><SiGooglepay style={{fontSize:"40px"}}/></a>
      <a href='https://paytm.com/' target="_blank" style={{ background: 'crimson' ,color:"white",padding:"20px","text-decoration" : "none","borderRadius":"40px"}}><SiPaytm style={{fontSize:"40px"}}/></a>
      <a href='https://razorpay.com/' target="_blank" style={{ background: 'crimson' ,color:"white",padding:"20px","text-decoration" : "none","borderRadius":"40px"}}><SiRazorpay style={{fontSize:"40px"}}/></a>
      <a href='https://www.paypal.com/in/home' target="_blank" style={{ background: 'crimson' ,color:"white",padding:"20px","text-decoration" : "none","borderRadius":"40px"}}><FaPaypal style={{fontSize:"40px"}}/></a>
     <a href='https://www.phonepe.com/' target="_blank" style={{ background: 'crimson' ,color:"white",padding:"20px","text-decoration" : "none","borderRadius":"40px"}}><SiPhonepe style={{fontSize:"40px"}}/></a>
     
     
      </div>
    </Box>
      </div>
  );
}
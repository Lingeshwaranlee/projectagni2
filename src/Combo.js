import { BiRupee } from "react-icons/bi";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import {HiShoppingCart} from "react-icons/hi";
import "./img.css";
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Modal from '@mui/material/Modal';

//Combo page component

export function Combo() {
  const history = useHistory();
  const combo=[{
    poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20211221080015951943_482x264jpg",
    header:"2 VEG WHOFFER + 2 FIERY VEG BURGER",
    content:" 2 Piece chicken burger + 1 fiery hell dip + 1 cheese dip + pepsi",
    price:'1150'
 }, 
 {
   poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20211221100415482080_482x264jpg",
   header:"2 CHICKEN WHOFFER + 2 FIERY CHICKEN BURGER",
   content:" 2 Piece veg burger + 1 fiery hell dip + 1 cheese dip + pepsi  ",
   price:'968'
  },
  {
    poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210927055713147998_482x264jpg",
    header:"2 CHICKEN WHOFFER + CHOCO CUPS + FRIES",
    content:" 2 Piece veg burger + 2 chocolate cake + 1 cheese fries + pepsi ",
    price:'903'
 }, 
 {
   poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220222084918642643_482x264jpg",
   header:"2 CHICKEN WHOFFER + 1 FIERY CHICKEN BURGER",
   content:" Lite whoofer jr veg + Lite whoofer jr veg  ",
   price:'597'
  },
  {
    poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210919154353624176_482x264jpg",
    header:"SUPER OVER COMBO",
    content:" Crispy veg double patty + Crispy veg double patty",
    price:'850'
 }, 
 {
   poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210919154614730565_482x264jpg",
   header:" WHOOFER PARTNERSHIP COMBO(CHICKEN)",
   content:" Lite whoofer jr veg + Lite whoofer jr veg  ",
   price:'738'
  },
  ]
  return (
    <div>
      <img
        className="img0"
        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20220329054207612319_1440x300jpg"
        alt="profile"
      ></img>
      
      <div className="box4">
        <div style={{ boderRadius: "12px" }}>
       
          <img
            className="img4"
            src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20211108081220012278_482x264jpg"
            alt="poster"
          ></img>
          <h4>COMBO FOR ALL</h4>
          <p className="para">
           14 Piece boneless chicken + 1 fiery hell dip<br></br> + 1 cheese dip + pepsi
           
          </p>
          <h3>
            
            <BiRupee /> 795/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
            
          >
            Offers
          </Button>
        </div>
        <div>
         
          <img
            className="img4"
            src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20211108080748412996_482x264jpg"
            alt="poster"
          ></img>
          <h4>COMBO FOR ME </h4>
          <p className="para">
          4 Piece boneless chicken + 1 fiery hell dip<br></br> + 1 cheese dip + pepsi
          </p>
          <h3>
            
            <BiRupee /> 248/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
           
          >
            Offers
          </Button>
        </div>
        <div>
         
          <img
            className="img4"
            src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220222085008171122_482x264jpg"
            alt="poster"
          ></img>
          <h4>COMBO FOR ME </h4>
          <p className="para">
          4 Piece boneless chicken + 1 fiery hell dip<br></br> + 1 cheese dip + pepsi
          </p>
          <h3>
            
            <BiRupee /> 248/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
            
          >
            Offers
          </Button>
        </div>
      </div>
      <h2>FRIENDS & FAMILY COMBO</h2>
      <div className='recipe-list-container1'>
    {combo.map((user)=><Family poster={user.poster} header={user.header} content={user.content} price={user.price}/>)}
    </div>
    </div>
  );
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 530,
  height:570,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Family({poster,header,content,price}){
  const history =useHistory(); 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return(
    <div  >
      <div  >
      <img  src={poster} alt="profile"></img>
      <h4 >{header}</h4>
      <p > {content}</p> 
      <h3> <BiRupee/> {price}</h3>
      <Button onClick={handleOpen} style={{backgroundColor:'crimson',borderRadius:"12px",color:"white"}}><HiShoppingCart/> ADD TO CART</Button>
    </div>
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <IconButton  style={{color:"crimson"}} color="primary" aria-label="add to shopping cart" onClick={handleClose} >
        <AiOutlineArrowLeft/>
        </IconButton>
         
          <div style={{display:"flex",padding:"2%",gap:"2%"}}>
        <img  src={poster} style={{width:"40%"}} alt="profile"></img>
        <h3>{header}-</h3>
        <h3 style={{color:"crimson"}}>{price}</h3>
        </div>
        <hr></hr>
        <h3>MAKE IT A MEAL</h3>
        <ul>
          <li><h4> Medium Fries + Medium Pepsi + Choco Lava(25% OFF) -<span style={{color:'crimson'}}>219</span> <input type="radio"></input></h4></li>
          
          <li><h4> Medium Fries + Medium Pepsi(24% OFF) -<span style={{color:'crimson'}}>179</span> <input type="radio"></input></h4></li>
          
          <li><h4> Kings Fries + Kings Pepsi(24% OFF) -<span style={{color:'crimson'}}>169</span> <input type="radio"></input></h4></li>
          
           </ul>
           <h3>ADD-Ons</h3>
           <div style={{padding:"3%"}}>
           <img src='https://burgerking-image.s3.amazonaws.com/products/AE/web/1x_web_20220314071857381981_158x79jpg'></img>
           <img src='https://burgerking-image.s3.amazonaws.com/products/AE/web/1x_web_20211007050031160391_158x79jpg'></img>
           <img src='https://burgerking-image.s3.amazonaws.com/products/AE/web/1x_web_20210922070306315300_158x79jpg'></img>
         
           </div>
           <Button variant="contained" style={{backgroundColor:'crimson',borderRadius:"12px",marginLeft:"33%",}}  onClick={() => history.push("/book")}><HiShoppingCart/> ADD TO CART</Button>
        </Box>
      </Modal>
    </div>
    </div>
  )
}
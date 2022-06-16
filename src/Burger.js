import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import {BiRupee} from "react-icons/bi";
import {HiShoppingCart} from "react-icons/hi";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import "./img.css";
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal'
import {useCart} from 'react-use-cart'

//Burger page component
export function Burger() {
  const burger=[
    {
     poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220314053636443064_482x264jpg",
     header:"CRISPY VEG DOUBLE PATTY",
     content:" Crispy veg double patty + Crispy veg double patty",
     price:'150'
  }, 
  {
    poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220314062022794965_482x264jpg",
    header:"LITE WHOOFER JR VEG",
    content:" Lite whoofer jr veg + Lite whoofer jr veg  ",
    price:'238'
   }, 
  {
   poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220314062135891100_482x264jpg",
   header:"CRISPY CHICKEN DOUBLE PATTY",
   content:" Crispy Chicken Patty Burger Our Best Seller",
   price:'238'
   },
   {
    poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220314062231210370_482x264jpg",
    header:"CHICKEN WHOOFER",
    content:" Crispy Chicken Whoofer Burger Our Best Seller",
    price:'398'
    },
    {
      poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210510125011309115_482x264jpg",
      header:"2 CRISPY CHICKEN DOUBLE PATTY",
      content:" Crispy veg double patty + Crispy veg double patty ",
      price:'446'
      },
      {
        poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210510124443333882_482x264jpg",
        header:"2 LITE WHOFFER JR CHICKEN",
        content:"Lite whoofer jr veg + Lite whoofer jr veg ",
        price:'320'
        },
        {
          poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220314070554598878_482x264jpg",
          header:" CRISPY VEG DOUBLE PATTY",
          content:" Our Best-Selling Burger With Crispy Veg,Patty,fresh Onion",
          price:'80'
          },
          {
            poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220314071510819567_482x264jpg",
            header:" CRISPY CHICKEN DOUBLE PATTY",
            content:" Crispy Chicken Patty Burger Our Best Seller",
            price:'120'
            },
            {
              poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210623061825022985_482x264jpg",
              header:" LITE WHOFFER JR VEG WITH CHEESE",
              content:"  Our Best-Selling Burger With Crispy Veg,Patty,fresh Onion",
              price:'100'
              },
              {
                poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210623061950363466_482x264jpg",
                header:"LITE WHOFFER JR CHICKEN WITH CHEESE",
                content:" Crispy Chicken Patty Burger Our Best Seller",
                price:'150'
                },
                {
                  poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20211208052135852070_482x264jpg",
                  header:"CHEESE FIRES",
                  content:" Crispy french fries loaded with cheese and Ymmm",
                  price:'109'
                  },
                  {
                    poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20211214071325238343_482x264jpg",
                    header:"HASHBROWN",
                    content:" Crispy hashbrown Our Best Seller",
                    price:'39'
                    },   ]
  return (
    <div>
     
     <img className="img" src="https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20220329051647458976_1440x300jpg"></img>
    <h2 style={{fontSize: "150%",backgroundColor: "crimson",color:"white",paddingRight: "85%",}}>TOP PICKS</h2>
    <div className='recipe-list-container1'>
    {burger.map((user)=><Dessert poster={user.poster} header={user.header} content={user.content} price={user.price}item={user.item}/>)}
    </div>
    <div>
        <img
          className="img0"
          src="https://www.subway.com/-/media/India/Promotions/Marquees/Desktop/Home/Fusion-Digital_R_12-Nov_Website-Banner_1000px-x-300px.jpg"
          alt="profile"
        ></img>
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

function Dessert({poster,header,content,price}){
  const history =useHistory(); 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {addItem}=useCart();
  return(
    <div>
      <div>
      <img  src={poster} alt="profile"></img>
      <h4>{header}</h4>
      <p> {content}</p> 
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
        <h3>{price}</h3>
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
           <img src='https://burgerking-image.s3.amazonaws.com/products/AE/web/1x_web_20210922065559943706_158x79jpg'></img>
         
           </div>
           <Button variant="contained" style={{backgroundColor:'crimson',borderRadius:"12px",marginLeft:"33%",}}  onClick={() => history.push("/book")}><HiShoppingCart/> ADD TO CART</Button>
        </Box>
      </Modal>
    </div>
    </div>
  )
}
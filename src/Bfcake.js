import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import {BiRupee} from "react-icons/bi";
import {HiShoppingCart} from "react-icons/hi";
import "./img.css";
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Modal from '@mui/material/Modal';

//BFcake page component
export function Bfcake() {
  const history =useHistory(); 
  const cake=[
    {
     poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210427150101361310_482x264jpg",
     header:"CHOCOLATE THICK SHAKE",
     content:"Our Signature Chocolate thick shake",
     price:'149'
  }, 
  {
    poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210430090901610159_482x264jpg",
    header:"MANGO THICK SHAKE",
    content:" Our Signature mango thick shake ",
    price:'149'
   }, 
 
    {
     poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210708085737670059_482x264jpg",
     header:" BERRY BLAST THICK SHAKE",
     content:"  Our Signature Berry thick shake",
     price:'149'
     },
     {
       poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_LiptonIceTea_ProductList_482x264.jpg",
       header:" LIPTON ICE TEA",
       content:"TEA AT ITS BEST",
       price:'70'
       },
       {
         poster:"https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20211229095632145669_482x264jpg",
         header:"PEPSI(KING)",
         content:"  Our Best-Selling Burger With Crispy Veg,Patty,fresh Onion",
         price:'99'
         },
      ]
  return (
    <div>
      <img className="img" src="https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20220330141241822628_1440x300jpg" alt="profile"></img>
     
      <div className="box5" >
        <div style={{ boderRadius: "12px" }}>
         
          <img
            className="img5"
            src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220124131158223848_482x264jpg"
            alt="poster"
          ></img>
          <h4>CHOCOLATE MOUSSE CUP</h4>
          <p className="para">
           
            Airy and creamy chocolate mouse<br></br>topped with chocolate ganache     </p>{" "}
          <h3>
            
            <BiRupee /> 109/-
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
            className="img5"
            src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220330140833283827_482x264jpg"
            alt="poster"
          ></img>
          <h4>CHOCO LAVA CUP </h4>
          <p className="para">
            Melty Chocolate filled in cup cake.<br></br> with chocolate ganache
          </p>
          <h3>
         
            <BiRupee /> 109/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
          
          >
            Offers
          </Button>
        </div>
        
        </div>

        <div className="boxo">
        <img
          className="img1"
          src="https://burgerking-image.s3.amazonaws.com/16442491061x1119x540jpg"
          alt="poster"
        ></img>
        <img
          className="img1"
          src="https://burgerking-image.s3.amazonaws.com/16481887511x1119x540jpg"
          alt="poster"
        ></img>
      </div>
        <h2 style={{padding:"20px"}}>BEVERAGES</h2>
    <div className='recipe-list-container1'>
    {cake.map((user)=><Browncake poster={user.poster} header={user.header} content={user.content} price={user.price}/>)}
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
function Browncake({poster,header,content,price}){
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
           <img src='https://burgerking-image.s3.amazonaws.com/products/AE/web/1x_web_20210922070306315300_158x79jpg'></img>
         
           </div>
           <Button variant="contained" style={{backgroundColor:'crimson',borderRadius:"12px",marginLeft:"33%",}}  onClick={() => history.push("/book")}><HiShoppingCart/> ADD TO CART</Button>
        </Box>
      </Modal>
    </div>
    </div>
  )
}
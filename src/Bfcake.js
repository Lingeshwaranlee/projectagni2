import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import {BiRupee} from "react-icons/bi";
import {HiShoppingCart} from "react-icons/hi";
import "./img.css";
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
            onClick={() => history.push("/book")}
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
            onClick={() => history.push("/book")}
          >
            Offers
          </Button>
        </div>
        
        </div>

        <div className="box1">
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
    <div className='recipe-list-container'>
    {cake.map((user)=><Browncake poster={user.poster} header={user.header} content={user.content} price={user.price}/>)}
    </div>
    </div>
  );
}

function Browncake({poster,header,content,price}){
  const history =useHistory(); 
  return(
  
    <div  >
      <div className='list-container' >
      <img  src={poster} alt="profile"></img>
      <h4 >{header}</h4>
      <p > {content}</p> 
      <h3> <BiRupee/> {price}</h3>
      <Button variant="contained" style={{backgroundColor:'crimson'}}  onClick={() => history.push("/book")}><HiShoppingCart/>ADD TO CART</Button>
    </div>
    </div>
  )
}
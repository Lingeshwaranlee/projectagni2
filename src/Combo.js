import { BiRupee } from "react-icons/bi";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import {HiShoppingCart} from "react-icons/hi";



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
      
      <div className="box4" style={{ padding: "20px", paddingLeft: "15%" }}>
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
            onClick={() => history.push("/book")}
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
            onClick={() => history.push("/book")}
          >
            Offers
          </Button>
        </div>
        
      </div>
      <h2>FRIENDS & FAMILY COMBO</h2>
      <div className='recipe-list-container'>
    {combo.map((user)=><Family poster={user.poster} header={user.header} content={user.content} price={user.price}/>)}
    </div>
    </div>
  );
}

function Family({poster,header,content,price}){
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
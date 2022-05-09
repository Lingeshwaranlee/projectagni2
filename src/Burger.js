import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import {BiRupee} from "react-icons/bi";
import {HiShoppingCart} from "react-icons/hi";
import "./img.css";
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
    <div className='recipe-list-container'>
    {burger.map((user)=><Dessert poster={user.poster} header={user.header} content={user.content} price={user.price}/>)}
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

function Dessert({poster,header,content,price}){
  const history =useHistory(); 
  return(
    <div  >
      <div className='list-container' >
      <img  src={poster} alt="profile"></img>
      <h4>{header}</h4>
      <p> {content}</p> 
      <h3> <BiRupee/> {price}</h3>
      <Button variant="contained" style={{backgroundColor:'crimson',borderRadius:"12px"}}  onClick={() => history.push("/book")}><HiShoppingCart/> ADD TO CART</Button>
    </div>
    </div>
  )
}
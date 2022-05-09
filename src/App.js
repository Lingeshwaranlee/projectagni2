import "./App.css";
import "./img.css";
import { Route, Switch, Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { BiRupee } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Burger } from "./Burger";
import { Bfcake } from "./Bfcake";
import { Cardprofile } from "./Cardprofile";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { Bookings } from "./Bookings";
import { Combo } from "./Combo";
import { Login } from "./Login";
import { Sign } from "./Sign";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/burger">
          <Burger />
        </Route>
        <Route path="/bfcake">
          <Bfcake />
        </Route>
        <Route path="/book">
          <Bookings />
        </Route>
        <Route path="/combo">
          <Combo />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign">
          <Sign />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  const history = useHistory();
  return (
    <div>
 <img
        className="img"
        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20220221051506134895_1440x300jpg"
      ></img>
 <h1 style={{fontSize: "150%",backgroundColor: "crimson",color:"white",paddingRight: "85%",}}>FAVOURITE</h1>
 <div className="box2" style={{marginLeft:"2%"}}>
        <div >
        
          <img
            className="img2"
            src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20210820040218173964_262x360jpg"
            alt="poster"
          ></img>
          <h4>VEG PERI PI WHOOFER</h4>
          <p className="para">
          
            Crispy Chicken Patty Burger<br></br> Our Best Seller
          </p>
          <h3>
           
            <BiRupee /> 130/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
            onClick={() => history.push("/burger")}
          >
            Offers
          </Button>
        </div>
        <div>
         
          <img
            className="img2"
            src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20210510125010726570_262x360jpg"
            alt="poster"
          ></img>
          <h4>2 CHRISPY CHICKEN </h4>
          <p className="para">
            Our Tribute To Classic American<br></br> Taste.Bk Chicken Party
          </p>
          <h3>
            <BiRupee /> 308/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
            onClick={() => history.push("/burger")}
          >
            Offers
          </Button>
        </div>
        <div>
       
          <img
            className="img2"
            src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314064846898495_262x360jpg"
            alt="poster"
          ></img>
          <h4>CHICKEN WHOOFER</h4>
          <p className="para">
            Crispy Chicken Patty Burger<br></br> Our Best Seller
          </p>
          <h3>
          
            <BiRupee /> 199/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
            onClick={() => history.push("/burger")}
          >
            Offers
          </Button>
        </div>
        <div>
      
          <img
            className="img2"
            src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314062201549185_262x360jpg"
            alt="poster"
          ></img>
          <h4>VEG WHOOFER</h4>
          <p className="para">
            Our Tribute To Classic American<br></br> Taste.Bk Veg Party
          </p>
          <h3>
           
            <BiRupee /> 120/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
            onClick={() => history.push("/burger")}
          >
            Offers
          </Button>
        </div>
        <div>
       
          <img
            className="img2"
            src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20211129155934290360_262x360jpg"
            alt="poster"
          ></img>
          <h4>CRISPY VEG BURGER</h4>
          <p className="para">
           
            Our Best-Selling Burger With Crispy<br></br> Veg,Patty,fresh Onion
          </p>
          <h3>
            
            <BiRupee /> 110/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
            onClick={() => history.push("/burger")}
          >
            Offers
          </Button>
        </div>
      </div>
      <h2
        style={{
          fontSize: "150%",
          backgroundColor: "crimson",
          color:"white",
          paddingRight: "85%",
        }}
      >
        MENU
        <GiHamburgerMenu style={{ fontSize: "80%" }} />
      </h2>
      <div className="box3" style={{ backgroundColor: "crimson" }}>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20211130081552936653_114x101png"
            alt="profile"
          ></img>
          <h3>Bf Cake</h3>
        </div>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20201214092757042942_114x101png"
            alt="profile"
          ></img>
          <h3>Top Picks</h3>
        </div>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220221045917058620_114x101png"
            alt="profile"
          ></img>
          <h3>
            New Kings<br></br> Collection
          </h3>
        </div>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210919155700560846_114x101png"
            alt="profile"
          ></img>
          <h3>
            Cricket Mania <br></br>Combo
          </h3>
        </div>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220217154844702799_114x101png"
            alt="profile"
          ></img>
          <h3>Burger</h3>
        </div>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20201214094752825353_114x101png"
            alt="profile"
          ></img>
          <h3>Whoofer</h3>
        </div>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20220217155013788571_114x101png"
            alt="profile"
          ></img>
          <h3>
            Stunner Menu<br></br>at 50/70
          </h3>
        </div>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427111853745473_114x101png"
            alt="profile"
          ></img>
          <h3>
            Friends <br></br> Family Combo
          </h3>
        </div>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427112037534695_114x101png"
            alt="profile"
          ></img>
          <h3>Sides</h3>
        </div>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427112221790841_114x101png"
            alt="profile"
          ></img>
          <h3>Chicken Wings</h3>
        </div>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210427112353788469_114x101png"
            alt="profile"
          ></img>
          <h3>Beverages</h3>
        </div>
        <div>
          <img
            className="img3"
            src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20210813044722998596_114x101png"
            alt="profile"
          ></img>
          <h3>Desserts</h3>
        </div>
      </div>
      <div>
        <img
          className="img0"
        
          src="https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20210427105418426638_1440x300jpg"
          alt="profile"
        ></img>
      </div>
      <h2 style={{fontSize: "150%",backgroundColor: "crimson",color:"white",paddingRight: "85%",}}>
        BK SPECIALS

      </h2>
      <div>
        <Cardprofile />
      </div>
      <div>
        <img
          className="imgs"
          src="https://burgerking-image.s3.amazonaws.com/1620912375homesectionadK8eLokjpeg"
          alt="profile"
        ></img>
      </div>
      <div className="box4">
        <div style={{ boderRadius: "12px" }}>
          {" "}
          <img
            className="img4"
            src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_ChickenWingsFriedGrilled482x264.jpg"
            alt="poster"
          ></img>
          <h4>VEG PERI PI WHOOFER</h4>
          <p className="para">
            {" "}
            Crispy Chicken Patty Burger<br></br> Our Best Seller
          </p>{" "}
          <h3>
            {" "}
            <BiRupee /> 130/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
            onClick={() => history.push("/burger")}
          >
            Offers
          </Button>
        </div>
        <div>
          {" "}
          <img
            className="img4"
            src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220314071655943160_482x264jpg"
            alt="poster"
          ></img>
          <h4>2 CHRISPY CHICKEN </h4>
          <p className="para">
            Our Tribute To Classic American<br></br> Taste.Bk Chicken Party
          </p>
          <h3>
            {" "}
            <BiRupee /> 308/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
            onClick={() => history.push("/burger")}
          >
            Offers
          </Button>
        </div>
        <div>
          {" "}
          <img
            className="img4"
            src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_ChickenWingsFried482x264.jpg"
            alt="poster"
          ></img>
          <h4>2 CHRISPY CHICKEN </h4>
          <p className="para">
            Our Tribute To Classic American<br></br> Taste.Bk Chicken Party
          </p>
          <h3>
            {" "}
            <BiRupee /> 308/-
          </h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "crimson" }}
            onClick={() => history.push("/burger")}
          >
            Offers
          </Button>
        </div>
      </div>
      <div className="box1">
        <img
          className="img1"
          src="https://burgerking-image.s3.amazonaws.com/16431025961x870x420jpg"
          alt="poster"
        ></img>
        <img
          className="img1"
          src="https://burgerking-image.s3.amazonaws.com/16190735051x1119x540jpg"
          alt="poster"
        ></img>
      </div>

      <div>
        <img
          className="img0"
          src="https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20211006080239254637_1440x300jpg"
          alt="profile"
        ></img>
      </div>
    </div>
  )}
import "./App.css";
import "./img.css";
import { Route, Switch, Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Burger } from "./Burger";
import { Bfcake } from "./Bfcake";
import { Bookings } from "./Bookings";
import { Combo } from "./Combo";
import { Login } from "./Login";
import { Sign } from "./Sign";
import { Home } from "./Home";

//router components
export default function App() {
  return (
   
  //Defining Routes for all the components and pages
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

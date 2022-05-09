import AppBar from '@mui/material/AppBar';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import {GiFireBowl,GiHamburger} from "react-icons/gi";
export function Navbar() {
  const history =useHistory(); 
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{ background: "crimson" ,color:"white"}}>
        <Toolbar>
        <Button color="inherit"  onClick={() => history.push("/")} style={{fontSize:"150%"}} >BUGGII<GiHamburger style={{color:"black"}} /></Button>
          <Button color="inherit"  onClick={() => history.push("/burger")}>BURGER</Button>
          <Button color="inherit"  onClick={() => history.push("/bfcake")}>BFCAKE</Button>
          <Button color="inherit"  onClick={() => history.push("/combo")}>COMBO</Button>
          <Button color="inherit"  onClick={() => history.push("/login")}  >LOGIN</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

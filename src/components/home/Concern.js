import React from "react";
import Button from "@mui/material/Button";
  
const Concern = () => {

return (
    <>
    <center>
          <div>
            <label className="Eme-btn" style={{fontWeight:'bolder'}}>Do you have any concern?</label>
          </div>
          <div>
                <Button variant="contained" color="success" size="small" style={{color: 'white'}}> Talk to HHT </Button>
          </div>
          <div>
                <label style={{fontSize:'15px'}}> Our live chat support is available from Monday to Saturday from 8AM to 6PM </label>
                <label style={{fontSize:'15px'}}> You can reach our HHT thru the following hotlines 1111-111 from Monday to Saturday from 8AM to 6PM</label>
          </div>
    </center>
    </>
);
}  

export default Concern;
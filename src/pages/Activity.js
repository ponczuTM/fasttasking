import React from "react";
import { Box, Button, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Navbar from "../components/Navbar/index";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Activity = () => {

return (
<React.Fragment>
<Navbar />
<Box
component="div"
sx={{
display: "flex",
minHeight: "90vh",
justifyContent: "center",
alignItems: "center",
flexDirection: "column",
}}
>
<Typography sx={{ marginTop: "150px" }}></Typography> <Link to="/">
<HomeIcon sx={{ color: "#02a12c", fontSize: 50}} />
</Link>
<Typography sx={{ marginTop: "30px" }}></Typography>
<hr width="17%" color="02a12c"></hr>
<Typography sx={{ marginTop: "30px" }}></Typography>
<div className="circle">
<CheckCircleIcon className="circle-icon" />
</div>
<Typography variant="h5" component="h5" color="white">
W tym panelu możesz dodać
</Typography>
<Typography variant="h5" component="h5" color="white">
zrealizowane zadania.
</Typography>
<Typography sx={{ marginTop: "30px" }}></Typography>
<FormControl
className="Form"
sx={{
justifyContent: "center",
alignItems: "center",
display: "flex",
flexDirection: "column",
minWidth: { md: 400, xs: 350 },
}}
>
<p style={{ color: '#333' }}>Lider i firma:</p>
<Select
size="small"
variant="outlined"
inputProps={{ style: { textAlign: 'center', color: 'white' } }}
sx={{ margin:'10px', "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#02a12c" }, }, minWidth:"150px" }}
>
<MenuItem value="" disabled selected>Wybierz opcję</MenuItem>
</Select>
<Typography sx={{ marginTop: "30px" }}></Typography>
<p style={{ color: '#333', margin:'10px'}}>Data i godzina:</p>
<Select
  size="small"
  variant="outlined"
  width="100px"
  inputProps={{ style: { textAlign: 'center', color: 'white' } }}
  sx={{ "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#02a12c" }, }, minWidth:"150px" }}
>
</Select>
<Typography sx={{ marginTop: "50px" }}></Typography>
<Button
  type="submit"
  className="submit_button"
  sx={{ color: "#ffffff" }}
 
>
  Dodaj zadania
</Button>
<Typography sx={{ marginTop: "50px" }}></Typography> 
</FormControl>
</Box>
</React.Fragment>
);
};

export default Activity;


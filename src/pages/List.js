import React from "react";
import { Box, FormControl, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Navbar from "../components/Navbar/index";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const List = () => {
 
  return (
    <React.Fragment>
      <Navbar />
      <Box
        component="div"
        noValidate
        sx={{
          display: "flex",
          minHeight: "90vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
      <Typography sx={{ marginTop: "150px" }}></Typography>
        <Link to="/">
          <HomeIcon sx={{ color: "#02a12c", fontSize: 50}} />
        </Link>
        <Typography sx={{ marginTop: "30px" }}></Typography>
        <hr width="17%" color="02a12c"></hr>
        <Typography sx={{ marginTop: "30px" }}></Typography>
        <div className="circle">
          <CalendarMonthIcon className="circle-icon" />
        </div>
        <Typography variant="h5" component="h5" color="white">
          W tym panelu możesz przejrzeć 
        </Typography>
        <Typography variant="h5" component="h5" color="white">
          zrealizowane zadania.
        </Typography>
        <Typography sx={{ marginTop: "30px" }}></Typography>

        <FormControl
          component="form"
          noValidate
          className="Form"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            minWidth: { md: 400, xs: 350 },
          }}
        >
        </FormControl>

        <Box className="CrudTable">
         
        </Box>
        
      </Box>
    </React.Fragment>
  );
};

export default List;

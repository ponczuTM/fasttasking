import React from "react";
import { Box, Typography, FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from '@mui/icons-material/Business';
import Navbar from "../components/Navbar";

const Department = () => {
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
        <Link to="/">
          <HomeIcon sx={{ color: "#02a12c", fontSize: 50, marginTop: 10 }} />
        </Link>
        <Typography sx={{ marginTop: "30px" }}></Typography>
        <hr width="17%" color="02a12c"></hr>
        <Typography sx={{ marginTop: "30px" }}></Typography>
        <div className="circle">
                <BusinessIcon className="circle-icon" />
                </div>
                <Typography variant="h5" component="h5" color="white">
                W tym panelu możesz przejrzeć listę instytucji
                </Typography>
                <Typography variant="h5" component="h5" color="white">
                i dodać nowe pozycje
                </Typography>
                <Typography sx={{ marginTop: "30px" }}></Typography>
            </Box>
        </React.Fragment>
    );
};

export default Department;

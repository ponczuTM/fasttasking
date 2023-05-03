import React from "react";
import { TextField, Box, Button, Typography, FormControl, Alert, Menu, Select, MenuItem } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Register = () => {
    return (
        <React.Fragment>
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
                <Typography sx={{ marginTop: "30px" }}></Typography>
                <Link to="/">
                    <HomeIcon sx={{ color: "#02a12c", fontSize: 50 }} />
                </Link>
                <Typography sx={{ marginTop: "30px" }}></Typography>
                <hr width="17%" color="02a12c"></hr>
                <Typography sx={{ marginTop: "30px" }}></Typography>
                <div className="circle">
                    <LockOpenIcon className="circle-icon" />
                </div>

                <Typography variant="h5" component="h5" color="white">
                    Rejestracja
                </Typography>
                <FormControl
                    component="form"
                    noValidate
                    className="form-login"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        minWidth: { md: 400, xs: 350 },
                    }}
                >
                    <Typography sx={{ marginTop: "30px" }}></Typography>
                    <p>Imię</p>
                    <TextField  size="small" id="outlined-login" variant="outlined" inputProps={{ style: { textAlign: 'center', color: 'white'} }} sx={{ "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#02a12c"}, },}} />
                    <Typography sx={{ marginTop: "30px" }}></Typography>
                    <p>Nazwisko</p>
                    <TextField  size="small" id="outlined-password" 
                    variant="outlined" inputProps={{ style: { textAlign: 'center', color: 'white' } }} 
                    sx={{ "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#02a12c" }, }, border: '10'}} />
                    <Typography sx={{ marginTop: "30px" }}></Typography>
                    <p>Płeć</p>
                    <Select  size="small" id="outlined-password" 
                    variant="outlined" inputProps={{ style: { textAlign: 'center', color: 'white' } }} 
                    sx={{ "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#02a12c" }, }, width:"220px", backgroundColor: '#6b6b6b',}}>
                        <MenuItem value={1}>Mężczyzna</MenuItem>
                        <MenuItem value={2}>Kobieta</MenuItem>
                        <MenuItem value={3}>Inna</MenuItem>
                    </Select>
                    <Typography sx={{ marginTop: "30px" }}></Typography>
                    <p>Nazwa firmy</p>
                    <TextField size="small" id="outlined-login" variant="outlined" inputProps={{ style: { textAlign: 'center', color: 'white' } }} sx={{ "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#02a12c" }, }, }} />
                    <Typography sx={{ marginTop: "30px" }}></Typography>
                    <p>Adres firmy</p>
                    <TextField size="small" id="outlined-password" variant="outlined" inputProps={{ style: { textAlign: 'center', color: 'white' } }} sx={{ "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#02a12c" }, }, }} />
                    <Typography sx={{ marginTop: "30px" }}></Typography>
                    <p>Adres e-mail</p>
                    <TextField size="small" id="outlined-login" variant="outlined" inputProps={{ style: { textAlign: 'center', color: 'white' } }} sx={{ "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#02a12c" }, }, }} />
                    <Typography sx={{ marginTop: "30px" }}></Typography>
                    <p>Hasło</p>
                    <TextField type="password" size="small" id="outlined-password" variant="outlined" inputProps={{ style: { textAlign: 'center', color: 'white' } }} sx={{ "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#02a12c" }, }, }} />
                    <Typography sx={{ marginTop: "30px" }}></Typography>
                    <Button type="submit" className="submit_button" sx={{ color: '#ffffff' }}>Zarejestruj</Button>
                </FormControl>
                <Box
                    component="div"
                    sx={{
                        marginTop: "10px",
                        display: "flex",
                        flexDirection: "row",
                        gap: "10pt",
                        justifyContent: "space-between",
                    }}
                >
                    <Link to="/login">Masz już konto? Zaloguj się!</Link>
                </Box>
                <Typography sx={{ marginTop: "30px" }}></Typography>
                <Typography sx={{ marginTop: "30px" }}></Typography>
                <Typography sx={{ marginTop: "30px" }}></Typography>
                <Typography sx={{ marginTop: "30px" }}></Typography>
            </Box>
        </React.Fragment>
    );
};

export default Register;

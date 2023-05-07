import React, { useEffect, useState } from "react";
import { Alert, Box, Button, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Navbar from "../components/Navbar/index";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const tasks = [
  "1. Testowanie oprogramowania - polega na weryfikowaniu, czy dany program działa zgodnie z oczekiwaniami i nie powoduje błędów lub awarii. Pracownik IT może zostać poproszony o wykonanie testów manualnych lub automatycznych, a następnie o raportowanie wyników.",
  "‎",
  "2. Rozwijanie oprogramowania - praca nad rozwijaniem nowych funkcjonalności lub ulepszaniem już istniejących. Pracownik IT może zostać poproszony o napisanie nowego kodu, poprawienie błędów lub optymalizację już istniejącego kodu.",
  "‎",
  "3. Konfiguracja i utrzymywanie systemów - polega na zapewnieniu, że serwery, sieci i inne systemy funkcjonują prawidłowo. Pracownik IT może zostać poproszony o konfigurowanie nowych systemów lub aktualizowanie już istniejących, a także o śledzenie ich działania i usuwanie błędów.",
  "‎",
  "4. Wsparcie techniczne - pracownik IT może zostać poproszony o pomaganie użytkownikom w rozwiązywaniu problemów związanych z oprogramowaniem lub sprzętem. Wsparcie może być udzielane za pomocą telefonu, e-maila lub systemu ticketowego.",
  "‎",
  "5. Zarządzanie projektami - pracownik IT może zostać poproszony o zarządzanie projektem informatycznym, takim jak wdrożenie nowego systemu. Praca ta obejmuje koordynowanie działań innych pracowników, zapewnianie terminowości i jakości realizacji projektu oraz raportowanie postępów.",
];

const TaskList = () => (
  <Box
    sx={{
      width: 400,
      margin: "0 auto",
      textAlign: "justify",
      border: "1px solid black",
      padding: "10px",
    }}
  >
    {tasks.map((task) => (
      <Typography key={task} variant="body1" component="p">
        {task}
      </Typography>
    ))}
  </Box>
);

const Activity = () => {
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
      <Typography sx={{ marginTop: "150px" }}></Typography>  <Link to="/">
          <HomeIcon sx={{ color: "#02a12c", fontSize: 50}} />
        </Link>
        <Typography sx={{ marginTop: "30px" }}></Typography>
        <hr width="17%" color="02a12c"></hr>
        <Typography sx={{ marginTop: "30px" }}></Typography>
        <div className="circle">
          <CheckCircleIcon className="circle-icon" />
        </div>
        <Typography variant="h5" component="h5" color="white">
          W tym panelu znajduje się lista wszystkich zadań do wykonania
        </Typography>
        <Typography variant="h5" component="h5" color="white">
          wraz z informacją o kierowniku i godzinie realizacji
        </Typography>
        <Typography sx={{ marginTop: "30px" }}><TaskList /></Typography>
      </Box>
        <Typography sx={{ marginTop: "120px" }}></Typography>
    </React.Fragment>
  );
};

export default Activity;
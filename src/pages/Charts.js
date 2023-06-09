import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import ChartItem from "../components/ChartItem";



function Charts() {
  const header =
    <React.Fragment>
      <Navbar />
      <Box
        component="div"
        noValidate
        sx={{
          display: "flex",
          minHeight: "70vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Link to="/">
          <HomeIcon sx={{ color: "#02a12c", fontSize: 50 }} />
        </Link>
        <Typography sx={{ marginTop: "30px" }}></Typography>
        <hr width="17%" color="02a12c"></hr>
        <Typography sx={{ marginTop: "30px" }}></Typography>
        <div className="circle">
          <DataSaverOffIcon className="circle-icon" />
        </div>
        <Typography variant="h5" component="h5" color="white">
          Statystyki w postaci wykresów kołowych
        </Typography>
      </Box>
    </React.Fragment>;

  return (
    <>
      {header}
      <center>
        <div style={{ backgroundColor: 'white' }}>
          <ChartItem title="Liczba osób z podziałem na role w firmie" query={`
          SELECT r.name AS "Rola", COUNT(*) AS "Liczba osób"
          FROM user u
          INNER JOIN role r ON r.id = u.roleId
          WHERE u.departmentId = ${localStorage.getItem("departmentId")}
          GROUP BY r.name        
        `} />
        </div>
        <Typography sx={{ marginTop: "40px" }}></Typography>
        <div style={{ backgroundColor: 'white' }}>
          <ChartItem title="Płci znajdujące się w korporacji" query={`
          SELECT s.name AS "Płeć", COUNT(*) AS "Ile" 
          FROM user u
          INNER JOIN sex s ON s.id = u.sexId
          WHERE u.departmentId = ${localStorage.getItem("departmentId")}
          GROUP BY s.name
        `} />
        </div>
        <Typography sx={{ marginTop: "40px" }}></Typography>
        <div style={{ backgroundColor: 'white' }}>
          <ChartItem title="Liczba tasków zleconych przez kierowników" query={`
          SELECT lastName || ' ' || firstName AS "Prowadzący", COUNT(*) AS "Liczba zajęć"
          FROM user u
          INNER JOIN schedule s ON s.leaderUserId = u.id
          WHERE u.departmentId = ${localStorage.getItem("departmentId")}
          GROUP BY 1
          ORDER BY 2 DESC
        `} />
        </div>
        <Typography sx={{ marginTop: "40px" }}></Typography>
        <div style={{ backgroundColor: 'white' }}>
          <ChartItem title="Ilość tasków, które wykonali pracownicy" query={`
          SELECT firstName || ' ' || lastName AS "Nazwisko", COUNT(*) AS "Liczba zajęć"
          FROM user u
          INNER JOIN role r ON r.id = u.roleId
          INNER JOIN activity a ON a.userId = u.id
          WHERE r.key = 'common'
          AND u.departmentId = ${localStorage.getItem("departmentId")}
          GROUP BY a.userId, firstName, lastName
          ORDER BY COUNT(*) DESC
`} /> 
        </div>
        <Typography sx={{ marginTop: "40px" }}></Typography>
        <div style={{ backgroundColor: 'white' }}>
          <ChartItem title="Ilość osób, które wykonały różne zadania od kierowników" query={`
          SELECT firstName || ' ' || lastName AS "Nazwisko", COUNT(a.userId) AS "Liczba osób"
          FROM user u
          INNER JOIN role r ON r.id = u.roleId
          INNER JOIN schedule s ON s.leaderUserId = u.id
          LEFT OUTER JOIN activity a ON a.scheduleId = s.id
          WHERE r.key = 'leader'
          AND u.departmentId = ${localStorage.getItem("departmentId")}
          GROUP BY a.userId, firstName, lastName
          ORDER BY COUNT(a.userId) DESC
`} />
        </div>
        <Typography sx={{ marginTop: "40px" }}></Typography>
        <div style={{ backgroundColor: 'white' }}>
          <ChartItem title="Najbardziej zleceniobiorcze firmy" query={`
          SELECT t.name || ' ' || t.location AS "Obiekt", COUNT(*) AS "Liczba odwiedzin"
          FROM target t
          INNER JOIN schedule s ON s.targetId = t.id
          INNER JOIN activity a ON a.scheduleId = s.id
          INNER JOIN user u ON u.id = a.userId
          WHERE u.departmentId = ${localStorage.getItem("departmentId")}
          GROUP BY t.name, t.location
          ORDER BY COUNT(*) DESC;
        `} />
        </div>
        <Typography sx={{ marginTop: "200px" }}></Typography>
      </center>
    </>
  );
}
export default Charts;
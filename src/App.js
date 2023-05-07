import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import React from "react";
import User from "./pages/User";
import Role from "./pages/Role";
import Sex from "./pages/Sex";
import Target from "./pages/Target";
import Department from "./pages/Department";
import ChangePassword from "./pages/ChangePassword";
import Schedule  from "./pages/Schedule";
import Activity from "./pages/Activity";
import List from "./pages/List";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route exact path="/user" element={<User/>} />
				<Route exact path="/role" element={<Role/>} />
				<Route exact path="/login" element={<Login/>} />
				<Route exact path="/logout" element={<Logout/>} />
				<Route exact path="/sex" element={<Sex/>} />
				<Route exact path="/target" element={<Target/>} />
				<Route exact path="/department" element={<Department/>} />
				<Route exact path="/change-password" element={<ChangePassword/>} />
				<Route exact path="/schedule" element={<Schedule/>} />
				<Route exact path="/activity" element={<Activity/>} />
				<Route exact path="/list" element={<List/>} />
				<Route exact path="/register" element={<Register/>} />
				<Route exact path="/tasks" element={<Tasks/>} />
			</Routes>
		</Router>
	);
}

export default App;
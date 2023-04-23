import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import React from "react";
import User from "./pages/User";
import Role from "./pages/Role";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route exact path="/user" element={<User/>} />
				<Route exact path="/role" element={<Role/>} />
			</Routes>
		</Router>
	);
}

export default App;
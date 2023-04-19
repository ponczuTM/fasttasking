import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { state } = useLocation();
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Navbar isHomePage="true" toggle={toggle}  style={{ marginTop: '50px' }}/>
			<div style={{ marginTop: '400px' }}>

			</div>
			<center>
			<h1>strona testowa dla navbara</h1>
			</center>
		</>
	);
};

export default Home;

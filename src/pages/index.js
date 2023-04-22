import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/InfoSection/Data";
import Footer from "../components/Footer";
import SnackBarSuccess from "../components/SnackBar/SnackBarSuccess";
import { useLocation } from "react-router-dom";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { state } = useLocation();
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			{state && state.isJustLoggedIn && <SnackBarSuccess message="Zalogowano poprawnie! Miłego korzystania z aplikacji." />}
			<Navbar isHomePage="true" toggle={toggle} />
			<HeroSection /> 
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			
			<InfoSection {...homeObjThree} />
			<Footer />
		</>
	);
};

export default Home;

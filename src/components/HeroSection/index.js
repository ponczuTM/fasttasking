import React from "react";
import Video from "../../videos/video.mp4";
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP
} from "./HeroElements";

const HeroSection = () => {
	return (
		<>
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
			</HeroBg>

			<HeroContent>
				<HeroH1>Zarządzanie zadaniami nigdy nie było tak proste!<br></br><br></br>✅</HeroH1>
				<HeroP>
				Fasttasking to aplikacja do zarządzania podziałem zadań w firmach oraz korporacjach.
				Przejrzysta struktura aplikacji pozwala uporząkować pracę nad projektami.
				</HeroP>
			</HeroContent>
		</HeroContainer>
		</>
	);
};

export default HeroSection;

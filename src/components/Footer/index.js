import React from "react";
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
} from "./FooterElements";

import { animateScroll as scroll } from "react-scroll";
const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
						
					
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							fasttasking {new Date().getFullYear()}
						</SocialLogo>
						
					</SocialMediaWrap>
				</SocialMedia><FooterLinksWrapper>
						<FooterLinkItems>
					
							<FooterLinkTitle>Twórcy</FooterLinkTitle>
									Oliwer Mroczkowski
									Karol Józefkowicz
									Damian Burak
							
							
						</FooterLinkItems>
						
					</FooterLinksWrapper>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
import React, { useState } from "react";
import "../styles/mainPage.scss";
import { Intro } from "../Components/MainPage/Intro/Intro";
import { Topbar } from "../Components/MainPage/Topbar/Topbar";
import { WorksPage } from "../Components/MainPage/HowItWorks/WorksPage";
import { Testimonials } from "../Components/MainPage/Testimonials/Testimonials";
import Why from "../Components/MainPage/WhyKalaCoat/Why";
import { Services } from "../Components/MainPage/Services/Services";
import { Faq } from "../Components/MainPage/FAQ/Faq";
import { Soon } from "../Components/MainPage/Soon/Soon";
import More from "../Components/MainPage/More/More";
import { Footer } from "../Components/MainPage/Footer/Footer";
import Copyright from "../Components/MainPage/Copyrights/Copyright";
import Menu from "../Components/MainPage/Topbar/Menu/Menu";
const MainPage = () => {
	const [colorChange, setColorchange] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 60) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener("scroll", changeNavbarColor);
	return (
		<div>
			<div className={"topbarOverlay " + (colorChange && "white")}>
				<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<Topbar
					colorChange={colorChange}
					setMenuOpen={setMenuOpen}
					menuOpen={menuOpen}
				/>
			</div>
			<div className="introOverlay">
				<Intro />
				<WorksPage />
				<Testimonials />
				<Why />
				<Services />
				<Faq />
				<Soon />
				<More />
				<Footer />
				<Copyright />
			</div>
		</div>
	);
};
export default MainPage;

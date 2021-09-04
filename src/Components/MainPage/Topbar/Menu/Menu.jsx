import "./Menu.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className={"menu " + (menuOpen && "active")}>
			<ul>
				<li onClick={() => setMenuOpen(!menuOpen)}>
					<Link
						onClick={() => setMenuOpen(!menuOpen)}
						to="works"
						smooth={true}
						delay={100}
						offset={-50}
					>
						How it works
					</Link>
				</li>
				<li onClick={() => setMenuOpen(!menuOpen)}>
					<Link
						onClick={() => setMenuOpen(!menuOpen)}
						to="testimonials"
						smooth={true}
						delay={100}
						offset={-45}
					>
						Testimonials
					</Link>
				</li>
				<li onClick={() => setMenuOpen(!menuOpen)}>
					<Link
						onClick={() => setMenuOpen(!menuOpen)}
						to="whyus"
						smooth={true}
						delay={100}
						offset={-50}
					>
						Why us
					</Link>
				</li>
				<li onClick={() => setMenuOpen(!menuOpen)}>
					<Link
						onClick={() => setMenuOpen(!menuOpen)}
						to="services"
						smooth={true}
						delay={100}
						offset={-50}
					>
						Services
					</Link>
				</li>
				<li onClick={() => setMenuOpen(!menuOpen)}>
					<Link
						onClick={() => setMenuOpen(!menuOpen)}
						to="faq"
						smooth={true}
						delay={100}
						offset={-50}
					>
						Faq
					</Link>
				</li>
				<li onClick={() => setMenuOpen(!menuOpen)}>
					<Link
						onClick={() => setMenuOpen(!menuOpen)}
						to="soon"
						smooth={true}
						delay={100}
						offset={-50}
					>
						Coming soon
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;

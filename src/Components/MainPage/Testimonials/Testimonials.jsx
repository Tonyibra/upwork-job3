import React from "react";
import Slider from "react-slick";
import "./Testimonials.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./TestimonialsData/TestimonialsData";
import { TestimonialsCard } from "./TestimonialsCard/TestimonialsCard";
export const Testimonials = () => {
	const settings = {
		slidesToShow: 2,
		slidesToScroll: 3,
		dots: true,
		infinite: true,
		cssEase: "linear",
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="testWrapper" id="testimonials">
			<div className="overlay">
				<div className="content"></div>
			</div>
			<div className="testContent">
				<div className="testHeader">
					<div className="testTitle">
						<span>HOW IT WORKS</span>
					</div>
					<div className="testSubtitle">
						<span>Just 3 Simple Steps</span>
					</div>
				</div>
				<div className="carousel">
					<Slider {...settings} className="slider">
						{data?.map(({ id, rating, name, image, comment }) => (
							<TestimonialsCard
								key={id}
								rating={rating}
								name={name}
								image={image}
								comment={comment}
							/>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

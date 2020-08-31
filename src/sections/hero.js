import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderimage_1 from "../assets/images/Hero_Image_1.jpg";
import sliderimage_2 from "../assets/images/Hero_Image_2.jpg";

export default function SectionHero() {
	const hero_settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="row">
			<div className="container-fluid hero">
				<Slider {...hero_settings}>
					<div>
						<div
							className="hero-slider-wrap"
							style={{
								backgroundImage: "url(" + sliderimage_1 + ")",
								backgroundPosition: "right",
							}}
						>
							<div className="hero-slider-inner container">
								<h1 className="slider-title color-white">Title Goes Here</h1>
								<h4 className="slider-subtitle color-white">
									Tagline will go right here.
								</h4>
								<button className="button slider-btn color-white bg-black mt-2">
									SHOP NOW
								</button>
							</div>
						</div>
					</div>

					<div>
						<div
							className="hero-slider-wrap"
							style={{ backgroundImage: "url(" + sliderimage_2 + ")" }}
						>
							<div className="hero-slider-inner container">
								<h1 className="slider-title color-white">Title Goes Here</h1>
								<h4 className="slider-subtitle color-white">
									Tagline will go right here.
								</h4>
								<button className="button slider-btn color-white bg-black mt-2">
									SHOP NOW
								</button>
							</div>
						</div>
					</div>

					<div>
						<div
							className="hero-slider-wrap"
							style={{
								backgroundImage: "url(" + sliderimage_1 + ")",
								backgroundPosition: "right",
							}}
						>
							<div className="hero-slider-inner container">
								<h1 className="slider-title color-white">Title Goes Here</h1>
								<h4 className="slider-subtitle color-white">
									Tagline will go right here.
								</h4>
								<button className="button slider-btn color-white bg-black mt-2">
									SHOP NOW
								</button>
							</div>
						</div>
					</div>

					<div>
						<div
							className="hero-slider-wrap"
							style={{ backgroundImage: "url(" + sliderimage_2 + ")" }}
						>
							<div className="hero-slider-inner container">
								<h1 className="slider-title color-white">Title Goes Here</h1>
								<h4 className="slider-subtitle color-white">
									Tagline will go right here.
								</h4>
								<button className="button slider-btn color-white bg-black mt-2">
									SHOP NOW
								</button>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
}

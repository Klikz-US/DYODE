import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import insta_img_1 from "../assets/images/Social_1.jpg";
import insta_img_2 from "../assets/images/Social_2.jpg";
import insta_img_3 from "../assets/images/Social_3.jpg";
import insta_img_4 from "../assets/images/Social_4.jpg";
import insta_img_5 from "../assets/images/Social_5.jpg";

export default function SectionInsta() {
	const insta_settings = {
		dots: false,
		draggable: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	};

	return (
		<div className="row">
			<div className="container instagram">
				<h2 className="instagram-title color-black text-center">
					Follow us on Instagram!
				</h2>
				<Slider {...insta_settings}>
					<div>
						<div className="instagram-inner">
							<img
								src={insta_img_1}
								width="100%"
								height="auto"
								alt="Instagram"
							/>
						</div>
					</div>
					<div>
						<div className="instagram-inner">
							<img
								src={insta_img_2}
								width="100%"
								height="auto"
								alt="Instagram"
							/>
						</div>
					</div>
					<div>
						<div className="instagram-inner">
							<img
								src={insta_img_3}
								width="100%"
								height="auto"
								alt="Instagram"
							/>
						</div>
					</div>
					<div>
						<div className="instagram-inner">
							<img
								src={insta_img_4}
								width="100%"
								height="auto"
								alt="Instagram"
							/>
						</div>
					</div>
					<div>
						<div className="instagram-inner">
							<img
								src={insta_img_5}
								width="100%"
								height="auto"
								alt="Instagram"
							/>
						</div>
					</div>
					<div>
						<div className="instagram-inner">
							<img
								src={insta_img_1}
								width="100%"
								height="auto"
								alt="Instagram"
							/>
						</div>
					</div>
					<div>
						<div className="instagram-inner">
							<img
								src={insta_img_2}
								width="100%"
								height="auto"
								alt="Instagram"
							/>
						</div>
					</div>
					<div>
						<div className="instagram-inner">
							<img
								src={insta_img_3}
								width="100%"
								height="auto"
								alt="Instagram"
							/>
						</div>
					</div>
					<div>
						<div className="instagram-inner">
							<img
								src={insta_img_4}
								width="100%"
								height="auto"
								alt="Instagram"
							/>
						</div>
					</div>
					<div>
						<div className="instagram-inner">
							<img
								src={insta_img_5}
								width="100%"
								height="auto"
								alt="Instagram"
							/>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
}

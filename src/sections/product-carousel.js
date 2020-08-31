import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import product_img from "../assets/images/Product_Image_1.jpg";

export default function SectionHero() {
	const carousel_settings = {
		dots: false,
		draggable: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	return (
		<div className="row">
			<div className="container">
				<div className="product-carousel">
					<Slider {...carousel_settings}>
						<div>
							<div className="product-carousel-wrap">
								<div className="product-carousel-inner">
									<div className="product-image">
										<img
											src={product_img}
											width="100%"
											height="auto"
											alt="Women's T-Shirt"
										/>
									</div>
									<p className="product-title color-black text-bold text-center m-0 mt-2">
										Product Title
									</p>
									<p className="product-desc color-black text-center m-0">
										Women's T-Shirt
									</p>
									<h6 className="text-center color-main">$19.99</h6>
								</div>
							</div>
						</div>

						<div>
							<div className="product-carousel-wrap">
								<div className="product-carousel-inner">
									<div className="product-image">
										<img
											src={product_img}
											width="100%"
											height="auto"
											alt="Women's T-Shirt"
										/>
									</div>
									<p className="product-title color-black text-bold text-center m-0 mt-2">
										Product Title
									</p>
									<p className="product-desc color-black text-center m-0">
										Women's T-Shirt
									</p>
									<h6 className="text-center color-main">$19.99</h6>
								</div>
							</div>
						</div>

						<div>
							<div className="product-carousel-wrap">
								<div className="product-carousel-inner">
									<div className="product-image">
										<img
											src={product_img}
											width="100%"
											height="auto"
											alt="Women's T-Shirt"
										/>
									</div>
									<p className="product-title color-black text-bold text-center m-0 mt-2">
										Product Title
									</p>
									<p className="product-desc color-black text-center m-0">
										Women's T-Shirt
									</p>
									<h6 className="text-center color-main">$19.99</h6>
								</div>
							</div>
						</div>

						<div>
							<div className="product-carousel-wrap">
								<div className="product-carousel-inner">
									<div className="product-image">
										<img
											src={product_img}
											width="100%"
											height="auto"
											alt="Women's T-Shirt"
										/>
									</div>
									<p className="product-title color-black text-bold text-center m-0 mt-2">
										Product Title
									</p>
									<p className="product-desc color-black text-center m-0">
										Women's T-Shirt
									</p>
									<h6 className="text-center color-main">$19.99</h6>
								</div>
							</div>
						</div>

						<div>
							<div className="product-carousel-wrap">
								<div className="product-carousel-inner">
									<div className="product-image">
										<img
											src={product_img}
											width="100%"
											height="auto"
											alt="Women's T-Shirt"
										/>
									</div>
									<p className="product-title color-black text-bold text-center m-0 mt-2">
										Product Title
									</p>
									<p className="product-desc color-black text-center m-0">
										Women's T-Shirt
									</p>
									<h6 className="text-center color-main">$19.99</h6>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
}

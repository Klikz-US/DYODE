import React, { useState } from "react";

import facebook_icon from "../assets/icons/facebook.png";
import instagram_icon from "../assets/icons/instagram.png";
import twitter_icon from "../assets/icons/twitter.png";

export default function Footer() {
	const [expanded1, setExpanded1] = useState(false);
	const [expanded2, setExpanded2] = useState(false);

	const handleAccordion1Click = () => {
		setExpanded1(!expanded1);
	};

	const handleAccordion2Click = () => {
		setExpanded2(!expanded2);
	};

	return (
		<footer>
			<div className="row bg-black">
				<div className="container footer-container">
					<div className="wrapper">
						<div className="footer-menu-wrap">
							<div className="footer-menu">
								<a
									className="footer-menu-accordion color-white md-hide"
									onClick={handleAccordion1Click}
								>
									{expanded1 ? "-" : "+"}
								</a>
								<h3 className="color-white">Customer Service</h3>
								<ul className={`color-grey ${expanded1 ? "expanded" : ""}`}>
									<li>
										<a href="#">Accessibility</a>
									</li>
									<li>
										<a href="#">Contact Us</a>
									</li>
									<li>
										<a href="#">Return Policy</a>
									</li>
									<li>
										<a href="#">FAQ</a>
									</li>
									<li>
										<a href="#">Gift Certification</a>
									</li>
									<li>
										<a href="#">Wishlist</a>
									</li>
								</ul>
							</div>
							<div className="footer-menu">
								<a
									className="footer-menu-accordion color-white md-hide"
									onClick={handleAccordion2Click}
								>
									{expanded2 ? "-" : "+"}
								</a>
								<h3 className="color-white">Company</h3>
								<ul className={`color-grey ${expanded2 ? "expanded" : ""}`}>
									<li>
										<a href="#">About Us</a>
									</li>
									<li>
										<a href="#">Careers</a>
									</li>
									<li>
										<a href="#">Press</a>
									</li>
									<li>
										<a href="#">Affiliates</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="footer-follow-wrap">
							<h3 className="color-white">Follow Us</h3>
							<div className="social-share-wrap">
								<div className="social-share">
									<a href="https://facebook.com">
										<img
											src={facebook_icon}
											height="26"
											width="auto"
											alt="facebook"
										/>
									</a>
								</div>
								<div className="social-share">
									<a href="https://instagram.com">
										<img
											src={instagram_icon}
											height="26"
											width="auto"
											alt="instagram"
										/>
									</a>
								</div>
								<div className="social-share">
									<a href="https://twitter.com">
										<img
											src={twitter_icon}
											height="26"
											width="auto"
											alt="twitter"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

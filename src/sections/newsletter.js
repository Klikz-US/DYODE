import React from "react";

export default function SectionInsta() {
	return (
		<div className="row bg-main">
			<div className="container newsletter">
				<h2 className="newsletter-title mb-3 color-white text-center">
					Sign up & Stay Connected
				</h2>
				<div className="wrapper">
					<div className="newsletter-text color-white">
						<p>
							Sign up for the newsletter and get 20% off! Gain access to
							exclusive offers and be the first to know when new stuff drops!
						</p>
					</div>
					<div className="newsletter-form">
						<input
							type="email"
							name="email"
							placeholder="Your Email Address"
							className="newsletter-email"
						/>
						<button
							type="submit"
							name="submit"
							className="newsletter-submit button color-white bg-main"
						>
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

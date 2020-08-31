import React from "react";

import newsletter_icon from "../assets/icons/envelop.png";

export default function SectionInsta() {
	return (
		<div className="row bg-main">
			<div className="container newsletter">
				<div className="newsletter-title color-white wrapper f-center">
					<div className="newletter-image">
						<img src={newsletter_icon} width="auto" height="36" alt="Email" />
					</div>
					<h2>Sign up & Stay Connected</h2>
				</div>
				<div className="wrapper">
					<div className="newsletter-text color-white">
						<p>
							Sign up for the newsletter and get 20% off! Gain access to
							exclusive offers and be the first to know when new stuff drops!
						</p>
					</div>
					<form className="newsletter-form" action="/">
						<input
							type="email"
							name="email"
							placeholder="Your Email Address"
							className="newsletter-email"
							required
						/>
						<button
							type="submit"
							name="submit"
							className="newsletter-submit button color-white bg-main"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

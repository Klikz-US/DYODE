import React from "react";

import insta_img_1 from "../assets/images/Social_1.jpg";
import insta_img_2 from "../assets/images/Social_2.jpg";
import insta_img_3 from "../assets/images/Social_3.jpg";
import insta_img_4 from "../assets/images/Social_4.jpg";
import insta_img_5 from "../assets/images/Social_5.jpg";

export default function SectionInsta() {
	return (
		<div className="row">
			<div className="container instagram">
				<h2 className="instagram-title color-black text-center">
					Follow us on Instagram!
				</h2>
				<div className="instagram-wrapper">
					<div className="instagram-inner">
						<img src={insta_img_1} width="100%" height="auto" alt="Instagram" />
					</div>
					<div className="instagram-inner">
						<img src={insta_img_2} width="100%" height="auto" alt="Instagram" />
					</div>
					<div className="instagram-inner">
						<img src={insta_img_3} width="100%" height="auto" alt="Instagram" />
					</div>
					<div className="instagram-inner">
						<img src={insta_img_4} width="100%" height="auto" alt="Instagram" />
					</div>
					<div className="instagram-inner">
						<img src={insta_img_5} width="100%" height="auto" alt="Instagram" />
					</div>
				</div>
			</div>
		</div>
	);
}

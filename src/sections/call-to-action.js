import React from "react";

import cta_bg from "../assets/images/Hero_Image_2.jpg";

export default function SectionCalltoAction() {
	return (
		<div
			className="row"
			style={{
				backgroundImage: "url(" + cta_bg + ")",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="container cta">
				<div className="wrapper f-end">
					<div className="cta-inner">
						<h1 className="cta-title color-white">Title Goes Here</h1>
						<h4 className="cta-subtitle color-white">
							Tagline will go right here.
						</h4>
						<button className="button cta-action bg-main color-white mt-2">
							SHOP NOW
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

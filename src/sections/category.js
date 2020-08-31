import React from "react";

import category_women from "../assets/images/Womens_Image.jpg";
import category_men from "../assets/images/Mens_Image.jpg";
import category_accessories from "../assets/images/Accessories_Image.jpg";

export default function SectionCategory() {
	return (
		<div className="row">
			<div className="container category">
				<div className="category-inner">
					<div className="category-wrapper">
						<div className="category-image">
							<img
								src={category_women}
								width="100%"
								height="auto"
								alt="Women"
							/>
						</div>
						<div className="category-title bg-main color-white text-center">
							<h2>Women</h2>
						</div>
					</div>
				</div>
				<div className="category-inner">
					<div className="category-wrapper">
						<div className="category-image">
							<img src={category_men} width="100%" height="auto" alt="Men" />
						</div>
						<div className="category-title bg-main color-white text-center">
							<h2>Men</h2>
						</div>
					</div>
				</div>
				<div className="category-inner">
					<div className="category-wrapper">
						<div className="category-image">
							<img
								src={category_accessories}
								width="100%"
								height="auto"
								alt="Accessories"
							/>
						</div>
						<div className="category-title bg-main color-white text-center">
							<h2>Accessories</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

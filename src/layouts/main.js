import React from "react";

import SectionHero from "../sections/hero";
import SectionCategory from "../sections/category";
import SectionProductCarousel from "../sections/product-carousel";
import SectionCalltoAction from "../sections/call-to-action";
import SectionInsta from "../sections/instagram";
import SectionNewsletter from "../sections/newsletter";

export default function Main() {
	return (
		<main>
			<SectionHero />
			<SectionCategory />
			<SectionProductCarousel />
			<SectionCalltoAction />
			<SectionInsta />
			<SectionNewsletter />
		</main>
	);
}

import React from "react";
import BoostingComp from "./HomeScreen/Boosting/BoostingComp";
import DownPutComps from "./HomeScreen/DownPut/DownPutComps";
import Footer from "./HomeScreen/Footer/Footer";
import HeroComp from "./HomeScreen/HeroComp";
import LastComp from "./HomeScreen/LastComp";
import Testimonial from "./HomeScreen/Testimonial";
import TrustedByComp from "./HomeScreen/TrustedByComp";

const HomeScreen: React.FC = () => {
	return (
		<div style={{ overflow: "hidden" }}>
			<HeroComp />
			<TrustedByComp />
			<BoostingComp />
			<DownPutComps />
			<Testimonial />
			<LastComp />
			<Footer />
		</div>
	);
};

export default HomeScreen;

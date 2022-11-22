import React from "react";
import BoostingComp from "./HomeScreen/Boosting/BoostingComp";
import DownPutComps from "./HomeScreen/DownPut/DownPutComps";
import HeroComp from "./HomeScreen/HeroComp";
import Testimonial from "./HomeScreen/Testimonial";
import TrustedByComp from "./HomeScreen/TrustedByComp";

const HomeScreen = () => {
	return (
		<div style={{ overflow: "hidden" }}>
			<HeroComp />
			<TrustedByComp />
			<BoostingComp />
			<DownPutComps />
			<Testimonial />
		</div>
	);
};

export default HomeScreen;

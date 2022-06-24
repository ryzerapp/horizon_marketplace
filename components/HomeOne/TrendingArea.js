import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import Link from "next/link";
import NftCardWithoutTime from "../Common/NftCardWithoutTime";

const options = {
	loop: true,
	margin: 0,
	nav: true,
	mouseDrag: false,
	dots: false,
	autoplay: true,
	smartSpeed: 500,
	navText: [
		"<i className='ri-arrow-left-s-line'></i>",
		"<i className='ri-arrow-right-s-line'></i>",
	],

	responsive: {
		0: {
			items: 1,
		},
		576: {
			items: 2,
		},
		1000: {
			items: 3,
		},
		1200: {
			items: 4,
		},
	},
};

const TrendingArea = ({ data }) => {
	const [display, setDisplay] = useState(false);
	const [isMounted, setisMounted] = useState(false);

	useEffect(() => {
		setisMounted(true);
		setDisplay(true);
	}, []);

	return (
		<>
			<div className="trending-area pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-7">
							<div className="section-title">
								<h2>Trending Artwork</h2>
							</div>
						</div>

						<div className="col-lg-4 col-md-5">
							<div className="trending-btn text-end">
								<Link href="#">
									<a className="default-btn border-radius-5">
										Explore More
									</a>
								</Link>
							</div>
						</div>
					</div>

					<div className="trending-slider  pt-45">
						{display ? (
							<OwlCarousel {...options}>
								{data.map((nft) => {
									return (
										<NftCardWithoutTime
											data={nft}
											key={nft.id}
										/>
									);
								})}
							</OwlCarousel>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default TrendingArea;

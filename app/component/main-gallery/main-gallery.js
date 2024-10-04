'use client'
import React, { useState } from 'react'
import { Tabs, Tab, TabScreen } from 'react-tabs-scrollable'
import 'react-tabs-scrollable/dist/rts.css'

const images = [
	{ src: 'assets/img/img-1.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-2.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-3.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-4.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-5.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-6.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-7.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-8.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-9.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-10.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-11.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-12.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-13.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-14.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-15.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-16.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-17.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-18.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-19.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-20.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-21.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-22.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-23.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-24.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-25.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-26.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-27.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-28.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-29.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-30.png', slug: 'skull.with.hair' },
	{ src: 'assets/img/img-31.png', slug: 'skull.with.hair' },
]
function MainGallery() {
	const [imageDetail, setImageDetail] = useState(true)
	const [activeTab, setActiveTab] = React.useState(1)
	const onTabClick = (e, index) => {
		setActiveTab(index)
	}
	return (
		<main>
			{imageDetail ? (
				<div className="gallery-grid-wrapper">
					<div className="gallery-wrapper">
						{images.map((item) => (
							<div className="gallery-item position-relative" key={item.id} onClick={() => setImageDetail(false)}>
								<img src={item.src} />
								<div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
									<p>{item.slug}</p>
								</div>
							</div>
						))}
					</div>
					<div className="text-center see-more-images">
						<hr width="130" className="border-2 m-auto mb-2" />
						<h6>log in to see more</h6>
					</div>
				</div>
			) : (
				<div className="image-detail-wrapper">
					<div className="detail-left-container">
						<div className="image-wrapper">
							{images.map((item, index) => (
								<TabScreen key={index} index={index} activeTab={activeTab}>
									<div className="img-container">
										<img src={item.src} />
									</div>
								</TabScreen>
							))}
						</div>
					</div>
					<div className="detail-right-container">
						{images.map((item, index) => (
							<TabScreen key={index} index={index} activeTab={activeTab}>
								<div className="img-data">
									<p>{item.slug} 17h</p>
									<p className="my-3">
										black cat sitting on an open book, surrounded by candles and spell books, in the background is grey
										wallpaper, fantasy art style painting
									</p>
									<ul className="list-unstyled d-flex flex-wrap gap-2 p-0 m-0">
										<li>
											<span className="white-space-nowrap rounded py-1 px-2">chaos 50</span>
										</li>
										<li>
											<span className="white-space-nowrap rounded py-1 px-2">ar 5:7</span>
										</li>
										<li>
											<span className="white-space-nowrap rounded py-1 px-2">style raw</span>
										</li>
										<li>
											<span className="white-space-nowrap rounded py-1 px-2">v 6.1</span>
										</li>
										<li>
											<span className="white-space-nowrap rounded py-1 px-2">stylize 1000</span>
										</li>
										<li>
											<span className="white-space-nowrap rounded py-1 px-2">personalize ap4xwe8</span>
										</li>
									</ul>
								</div>
							</TabScreen>
						))}
						<Tabs activeTab={activeTab} onTabClick={onTabClick}>
							{images.map((item, index) => (
								<Tab key={index}>
									<div className="tab-img">
										<img src={item.src} />
									</div>
								</Tab>
							))}
						</Tabs>
					</div>
				</div>
			)}
		</main>
	)
}
export default MainGallery

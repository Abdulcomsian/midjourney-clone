'use client'
import React, { useState } from 'react'
import DetailImage from './gallery-image-detail/detail-image'
import BottomNav from '../bottom-nav/bottom-nav'
import {Tab, Tabs, Accordion} from 'react-bootstrap';

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
	
	return (
		<>
		<main>
			{imageDetail ? (
				<div className='filter-bar'>
					<Tabs defaultActiveKey="Random" id="justify-tab-example" className="mb-3 packages-tab" justify>
						<Tab eventKey="Random" title="Random" className='border-0'>
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
						</Tab>
						<Tab eventKey="Hot" title="Hot"  className='border-0'>
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
						</Tab>
						<Tab eventKey="Today" title="Today"  className='border-0'>
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
						</Tab>
						<Tab eventKey="Likes" title="Likes"  className='border-0'>
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
						</Tab>
					</Tabs>
				</div>
			) : (
				<DetailImage/>
			)}
		</main>
		  
		</>
	)
}
export default MainGallery

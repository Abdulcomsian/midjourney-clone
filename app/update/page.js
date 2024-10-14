import React from "react";
import BootamNav from '../component/bottom-nav/bottom-nav'

function Update (){
    return(
        <>
        <div className="content-wrapper">
            <div className="update-wrapper m-auto">
                <h1 className="text-center fw-bold">Latest Updates</h1>
                <div className="tab-panel">
                <div className="tab-content pt-5" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="d-flex gap-5 m-auto position-relative main-panel">
                            <div className="border line h-100"></div>
                            <div className="shape"></div>
                            <div className="left-update-panel">
                                <div className="date-time py-4">
                                    <span className="d-block">September 07, 2024</span>
                                    <span className="time">4:46 AM</span>
                                    <div className="announcement d-flex align-item-center gap-2">
                                        <span>
                                            <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="size-4 opacity-80"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                        </span>
                                        <span className="text-success">Announcement</span>
                                    </div>
                                </div>
                            </div>
                            <div className="right-update-panel p-4">
                                <h3 className="mb-4">Personalization for Niji</h3>
                                <p>Hi everyone, personalization for the Niji (anime) model is available today!</p>
                                <p>If you rate at least 200 images on <a>midjourney.com/rank-niji</a> and then add --p after your --niji prompt, you can have personalized Niji model results. This personalization doesn't only change the style, but changes all elements of the images to suit your tastes. If you're a Niji model user you should try this out. We're sure you'll love it!</p>
                                <figure>
                                    <img src="assets/img/update-img.png" className="img-fluid"/>
                                </figure>
                                <p>If you're not a Niji model user, you can personalize your Midjourney model at any time by rating at least 200 images at <a>https://www.midjourney.com/rank</a> and then adding --p after your prompt.</p>
                                <p>Don't be afraid to rank! It only takes about 5 minutes for 200 images.</p>
                                <p>Have fun! Learn more about Niji personalization on the the niji・blog</p>
                            </div>
                        </div>
                        
                        <div className="d-flex gap-5 m-auto position-relative main-panel">
                            <div className="border line h-100"></div>
                            <div className="shape"></div>
                            <div className="left-update-panel">
                            <div className="date-time py-4">
                                    <span className="d-block">September 07, 2024</span>
                                    <span className="time">4:46 AM</span>
                                    <div className="announcement d-flex align-item-center gap-2">
                                        <span>
                                            <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="size-4 opacity-80"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                        </span>
                                        <span className="text-success">Announcement</span>
                                    </div>
                                </div>
                            </div>
                            <div className="right-update-panel p-4">
                                <h3>The web is open to all!</h3>
                                <p>We've opened up our web platform to everyone! Now you can explore and create in a custom-built experience. Check out an overview of how to use the site.</p>
                                <figure>
                                    <img src="assets/img/update-img.png" className="img-fluid"/>
                                </figure>
                                <p>A few notes on signing in to the site:</p>
                                <ul className="ml-4">
                                    <li>
                                        <span>Sign in with your discord account on the website if you want to have history of your images made on discord</span>
                                    </li>
                                    <li>
                                        <span>You can merge discord and Google accounts under <a>your 'account' tab</a> if you haven't generated images under one of the accounts already.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex gap-5 m-auto position-relative main-panel">
                            <div className="border line h-100"></div>
                            <div className="shape"></div>
                            <div className="left-update-panel">
                            <div className="date-time py-4">
                                    <span className="d-block">September 07, 2024</span>
                                    <span className="time">4:46 AM</span>
                                    <div className="announcement d-flex align-item-center gap-2">
                                        <span>
                                            <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="size-4 opacity-80"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                        </span>
                                        <span className="text-success">Announcement</span>
                                    </div>
                                </div>
                            </div>
                            <div className="right-update-panel p-4">
                                <h3>Image Editor and More</h3>
                                <p>Hi everyone, we have a few updates for you today:</p>
                                <p>
                                    <strong>We're releasing a new web editor today! </strong>
                                </p>
                                <p>
                                    This combines reframe / repaint / vary region / pan / zoom into a single unified interface. We think this makes editing your MJ images way more seamless than before and is a huge step forward. 
                                    <br></br>
                                    <br></br>
                                    Here's a video showing how the editor works
                                </p>
                                <figure>
                                    <img src="assets/img/update-img.png" className="img-fluid"/>
                                </figure>
                                <p>
                                    <strong>Room Syncing</strong>
                                </p>
                                <p>We're now syncing images and messages between Rooms on the web and channels on the Discord server. This means that messages and images in certain rooms/channels are reflected back onto Discord and vice-versa.</p>
                                <p>Channels and Rooms with message mirroring are: ⁠</p>
                                <ul>
                                    <li>
                                        <p>
                                            <a>#daily-theme</a>
                                            &nbsp;&lt;-&gt;&nbsp;
                                            <a>Daily Theme</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a>#prompt-craft</a>
                                            &nbsp;&lt;-&gt;&nbsp;
                                            <a>Prompt Craft</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a>#⁠general-1</a>
                                            &nbsp;&lt;-&gt;&nbsp;
                                            <a>General Chaos</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a>#superusers-create</a>
                                            &nbsp;&lt;-&gt;&nbsp;
                                            <a>Superusers</a>
                                            <span>&nbsp;(for people with at least 1000 images)</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                </div>
            </div>
            </div>
        </div>
        <BootamNav/>
        </>
    )
}
export default Update;
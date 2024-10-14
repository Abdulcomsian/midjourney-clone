import React from 'react';
import TopSearch from '../top-search/top-search';
import MainGallery from '../main-gallery/main-gallery';
import BottomNav from '../../component/bottom-nav/bottom-nav';

function MainWrapper(params) {
    return(
        <div className='content-wrapper p-4 position-relative'>
            <TopSearch/>
            <MainGallery/>
            <BottomNav />
        </div>
    )
}
export default MainWrapper;
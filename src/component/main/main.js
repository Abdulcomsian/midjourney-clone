import React from 'react';
import TopSearch from '../top-search/top-search';
import MainGallery from '../main-gallery/main-gallery';

function MainWrapper(params) {
    return(
        <div className='content-wrapper p-4 position-relative'>
            <TopSearch/>
            <MainGallery/>
        </div>
    )
}
export default MainWrapper;
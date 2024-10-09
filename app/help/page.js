import React from 'react';

function Help () {

    const resourcesArray = [
        {resourceName: 'Getting Started', sulg:'A quick how-to guide to get you started making images as fast as possible'},
        {resourceName: 'In-Depth Documentation', sulg:'A quick how-to guide to get you started making images as fast as possible'},
        {resourceName: 'Create with Newcomers', sulg:'A quick how-to guide to get you started making images as fast as possible'},
        {resourceName: 'Video Tutorials', sulg:'A quick how-to guide to get you started making images as fast as possible'},
        {resourceName: 'Prompt Crafting Chatroom', sulg:'A quick how-to guide to get you started making images as fast as possible'},
        {resourceName: 'Billing Support', sulg:'A quick how-to guide to get you started making images as fast as possible'}
    ]
    return(
        <div className='content-wrapper'>
            <div className='help-section common-section'>
                <div className='left-panel'>
                    <div className="text-center">
                        <h1 className="main-heading mb-3">Help</h1>
                        <h3 className="sub-heading">Find help resources, documentation and system updates</h3>
                    </div>
                    <div className='resources pt-5'>
                        <h5 className='fw-600'>Resources</h5>

                        <div className='multiple-resources mt-3'>
                            {resourcesArray.map((item,index)=>{
                                return(
                                <div className='resource-card p-3 rounded-3 cursor-pointer' key={index}>
                                    <a>
                                        <div className='card-header d-flex align-items-center gap-2'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" width={20} height={20} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"></path></svg></span>
                                            <span className='fs-16 fw-600'>{item.resourceName}</span>
                                            <span className='d-block ms-auto'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="18" class="ml-auto transition-transform"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></span>
                                        </div>
                                        <p className='fs-14'>{item.sulg}</p>
                                    </a>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='help-common-box'>
                                    <h6>Report an Issue</h6>
                                    <p>If you've run into a bug or a issue on our service please report it here. It's the best way to let us know something is broken. These messages go directly to a special engineering channel and will not receive a response.</p>
                                    <textarea className='w-100 border rounded-2' rows={5}/>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className='right-panel'></div>
            </div>
        </div>
    )
}   
export default Help;
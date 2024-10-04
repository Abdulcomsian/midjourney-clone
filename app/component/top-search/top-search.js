import React from "react";

function TopSearch(params) {
    return(
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="search-bar py-3 px-4">
                            <form>
                                <div className="upload-file d-flex justify-content-between align-items-center position-relative gap-3">
                                    <input type="file"/>
                                    <span className="icon opacity-25">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </span>
                                    <input className="w-100 border-0 opacity-50" placeholder="Subscribe to start creating..."/>
                                    <span className="icon opacity-25">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="rotate-90" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default TopSearch;
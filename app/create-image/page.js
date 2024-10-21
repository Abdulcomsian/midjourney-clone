import React from 'react';

const CreateImage = () => {
    return(
       <div className='content-wrapper pt-4 px-4 create-image'>
        <h4 className='fw-600 mb-3'>What you will create?</h4>
            <div className="create-image-panel border rounded-3 h-90-vh">
                <div className="create-image-left-panel h-100 position-relative">
                    <input className='w-100 border-0 p-3 m-1' placeholder='Describe what you want to see'></input>
                    <span className='end-0 position-absolute top-0 p-3'>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="25px" height="25px" viewBox="0 0 50.000000 50.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M162 337 c-72 -73 -132 -139 -132 -147 0 -19 140 -160 160 -160 20 0 280 260 280 280 0 20 -141 160 -160 160 -9 0 -75 -60 -148 -133z m206 30 c23 -23 42 -49 42 -57 0 -16 -59 -80 -74 -80 -13 0 -106 91 -106 104 0 16 63 76 80 76 9 0 35 -19 58 -43z m-113 -117 l70 -70 -68 -67 -67 -68 -72 72 -73 73 65 65 c35 36 67 65 70 65 3 0 37 -32 75 -70z"/> </g> </svg> 
                    </span>
                    <div className='multiple-options position-absolute bottom-0 start-0 p-3'>
                        <ul className='list-unstyled d-flex align-items-center gap-1 flex-wrap'>
                            <li>
                                <button className='py-2 rounded-2 bg-transparent border'>Auto</button>
                            </li>
                            <li>
                                <button className='py-2 rounded-2 bg-transparent border'>Genral</button>
                            </li>
                            <li>
                                <button className='py-2 rounded-2 bg-transparent border'>Realistic</button>
                            </li>
                            <li>
                                <button className='py-2 rounded-2 bg-transparent border'>Design</button>
                            </li>
                            <li>
                                <button className='py-2 rounded-2 bg-transparent border'>3D</button>
                            </li>
                            <li>
                                <button className='py-2 rounded-2 bg-transparent border'>Anime</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="create-image-right-panel h-100 border-start position-relative p-3 m-1">
                    <div className='header-right-panel'>
                        <ul className='list-unstyled d-flex justify-content-between'>
                            <li>
                                <span>
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" viewBox="0 0 64.000000 64.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M415 556 c-19 -14 -19 -15 -1 -34 26 -30 10 -49 -18 -23 l-23 21 -114 -130 c-63 -72 -120 -148 -127 -168 -7 -20 -16 -39 -20 -42 -7 -5 -14 -110 -7 -110 2 0 24 9 50 20 40 17 45 22 35 39 -5 11 -19 23 -30 26 -11 3 -20 9 -20 13 0 36 35 90 127 196 93 108 110 123 122 111 12 -12 -1 -31 -93 -134 l-107 -121 35 -35 c20 -19 37 -35 40 -35 7 0 217 243 223 257 3 7 -8 23 -23 37 -25 21 -27 26 -14 41 13 15 12 19 -8 35 -18 15 -19 19 -6 24 35 13 88 -41 78 -81 -7 -28 12 -31 21 -3 9 29 -2 56 -36 85 -35 28 -57 31 -84 11z m30 -124 l23 -19 -89 -104 c-125 -144 -113 -135 -138 -110 l-21 21 92 106 c51 58 95 109 96 115 5 13 11 11 37 -9z m-275 -307 c0 -2 -9 -9 -20 -15 -18 -9 -20 -8 -20 15 0 23 2 24 20 15 11 -6 20 -13 20 -15z"/> </g> </svg> 
                                </span>
                                <sapn className='ms-2'>
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" viewBox="0 0 26.000000 26.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,26.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M70 205 c-43 -44 -44 -45 -18 -45 25 0 27 -3 30 -52 l3 -53 45 0 45 0 3 53 c3 49 5 52 30 52 26 0 25 1 -18 45 -24 25 -51 45 -60 45 -9 0 -36 -20 -60 -45z m74 -14 c8 -12 -4 -71 -14 -71 -10 0 -22 59 -14 71 3 5 9 9 14 9 5 0 11 -4 14 -9z"/> <path d="M0 47 c0 -13 5 -28 12 -35 16 -16 220 -16 236 0 15 15 16 58 2 58 -5 0 -10 -11 -10 -25 l0 -25 -110 0 -110 0 0 25 c0 14 -4 25 -10 25 -5 0 -10 -10 -10 -23z"/> </g> </svg> 
                                </sapn>
                            </li>
                            <li>
                                <span>
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="25px" height="25px" viewBox="0 0 50.000000 50.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M137 363 c-12 -12 -7 -21 37 -64 l51 -49 -51 -49 c-44 -43 -49 -52 -37 -64 12 -12 21 -7 63 37 l49 51 50 -49 c42 -41 52 -47 65 -37 13 11 8 20 -37 62 l-52 49 52 49 c45 42 50 51 37 62 -13 10 -23 4 -65 -37 l-50 -49 -49 51 c-42 44 -51 49 -63 37z"/> </g> </svg> 
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='mid-content my-3'>
                        <div className='form-div'>
                            <form>
                                <div className='label-with-options d-flex'>
                                    <label className='flex-1'>Magic Prompt <span> <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="12px" height="12px" viewBox="0 0 50.000000 50.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M170 467 c-49 -16 -123 -93 -138 -143 -27 -91 -8 -169 58 -234 93 -94 227 -94 320 0 94 93 94 227 0 320 -65 65 -150 85 -240 57z m144 -19 c87 -26 157 -136 143 -224 -20 -123 -140 -206 -255 -176 -159 43 -213 232 -97 347 59 60 127 77 209 53z"/> <path d="M224 376 c-10 -26 4 -48 28 -44 33 4 33 52 0 56 -13 2 -25 -3 -28 -12z"/> <path d="M210 280 c0 -5 5 -10 10 -10 6 0 10 -28 10 -65 0 -37 -4 -65 -10 -65 -5 0 -10 -4 -10 -10 0 -5 18 -10 40 -10 22 0 40 5 40 10 0 6 -4 10 -10 10 -6 0 -10 32 -10 75 l0 75 -30 0 c-16 0 -30 -4 -30 -10z"/> </g> </svg> </span></label>
                                    <div className='btn-group flex-1 border'>
                                        <button className='border-0 bg-transparent px-1 py-2 w-100'>Auto</button>
                                        <button className='border-0 bg-transparent px-1 py-2 active w-100'>On</button>
                                        <button className='border-0 bg-transparent px-1 py-2 w-100'>Off</button>
                                    </div>
                                </div>
                                <div className='label-with-options d-flex my-2'>
                                    <label className='flex-1'>Aspect Ratio</label>
                                    <div className='btn-group flex-1 border'>
                                        <button className='border-0 bg-transparent px-1 py-2 w-100'>9:16</button>
                                        <button className='border-0 bg-transparent px-1 py-2 active w-100'>1:1</button>
                                        <select className='border-0 bg-transparent px-1 py-2 w-100 text-center'>
                                            <option>16:9</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='label-with-options d-flex mb-2'>
                                    <label className='flex-1'>Visibility</label>
                                    <div className='btn-group flex-1 border'>
                                        <button className='border-0 bg-transparent px-1 py-2 w-100'>Public</button>
                                        <button className='border-0 bg-transparent px-1 py-2 active w-100'>Private</button>
                                    </div>
                                </div>
                                <div className='label-with-options d-flex mb-2'>
                                    <label className='flex-1'>Model</label>
                                    <div className='btn-group flex-1 border'>
                                        <select className='border-0 bg-transparent px-1 py-2 w-100 text-center'>
                                            <option>2.0</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='label-with-options d-flex my-2'>
                                    <label className='flex-1'>Color Palette</label>
                                    <div className='btn-group flex-1 border'>
                                        <button className='border-0 bg-transparent px-1 py-2 w-100'>Auto</button>
                                    </div>
                                </div>
                                <div className='label-with-options d-flex my-2'>
                                    <label className='flex-1'>Rendering</label>
                                    <div className='btn-group flex-1 border'>
                                        <button className='border-0 bg-transparent px-1 py-2 w-100 active'>Trubo</button>
                                        <button className='border-0 bg-transparent px-1 py-2 w-100'>Default</button>
                                        <button className='border-0 bg-transparent px-1 py-2 w-100'>Quality</button>
                                    </div>
                                </div>
                                <div className='label-with-options d-flex my-2'>
                                    <label className='flex-1'>Seed Number</label>
                                    <div className='btn-group flex-1 border'>
                                        <button className='border-0 bg-transparent px-1 py-2 w-100'>Auto</button>
                                    </div>
                                </div>
                                <div className='label-with-options d-flex my-2'>
                                    <label className='flex-1'>Negative Prompt</label>
                                    <div className='btn-group flex-1 border'>
                                        <button className='border-0 bg-transparent px-1 py-2 w-100'>Thing to Avoid</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='footer-bottom position-absolute bottom-0 start-0 p-3 w-100'>
                        <div className='btn-group d-flex'>
                            <button className='border-0 bg-transparent px-1 py-2 flex-1'>Uses 2 Credits <span> <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="12px" height="12px" viewBox="0 0 50.000000 50.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M170 467 c-49 -16 -123 -93 -138 -143 -27 -91 -8 -169 58 -234 93 -94 227 -94 320 0 94 93 94 227 0 320 -65 65 -150 85 -240 57z m144 -19 c87 -26 157 -136 143 -224 -20 -123 -140 -206 -255 -176 -159 43 -213 232 -97 347 59 60 127 77 209 53z"/> <path d="M224 376 c-10 -26 4 -48 28 -44 33 4 33 52 0 56 -13 2 -25 -3 -28 -12z"/> <path d="M210 280 c0 -5 5 -10 10 -10 6 0 10 -28 10 -65 0 -37 -4 -65 -10 -65 -5 0 -10 -4 -10 -10 0 -5 18 -10 40 -10 22 0 40 5 40 10 0 6 -4 10 -10 10 -6 0 -10 32 -10 75 l0 75 -30 0 c-16 0 -30 -4 -30 -10z"/> </g> </svg> </span></button>
                            <button className='border-0 bg-btn-primary px-1 py-2 flex-1 text-clr-primary rounded'>Generate</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default CreateImage;
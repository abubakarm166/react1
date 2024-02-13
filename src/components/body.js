import React from 'react'
function Body() {
    const backgroundImageStyle = {
        backgroundImage: `url("jesman-fabio-1zwJqd5cNys-unsplash.png")`,
        // Other CSS properties for background size, position, repeat, etc. can be added here
    };
    return (
        <>
            <div style={backgroundImageStyle}>
                <div className="digital p-5 w-100">
                    <div className='p-5'>

                        <div className='text text-white'>Smart</div><br />
                        <div className='text text-white text-end'> Digital</div><br />
                        <div className='text textt'>Distribution</div>
                        <div className="btn">
                            <button type="button" className="join btn btn-light px-5 py-3">Join VerseOne</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mare">
                {/* <marquee behavior="" className="w-100" scrollamount="30">
                    <div className="d-flex">
                        <div className="containerr">
                            <h1>
                                Spotify
                            </h1>
                        </div>
                    </div>
                </marquee> */}


                <div className="marquee">
                    <div className="d-flex">
                        <div className="containerr w-100">
                            <div className=" abc d-flex text-center p-3">

                                <h1 className='text-white'>
                                    <i className="bi bi-spotify"></i>   Spotify
                                </h1>
                            </div>
                            <div className=" abc d-flex text-center p-3">

                                <h1 className='text-white'>
                                    <i className="bi bi-align-top"></i>   TIDAL
                                </h1>
                            </div>
                            <div className=" abc d-flex text-center p-3">

                                <h1 className='text-white'>
                                    <i className="bi bi-youtube"></i>   YOUTUBE
                                </h1>
                            </div>
                            <div className=" abc d-flex text-center p-3">

                                <h1 className='text-white'>
                                    <i className="bi bi-apple"></i>   MUSIC
                                </h1>
                            </div>
                            <div className=" abc d-flex text-center p-3">

                                <h1 className='text-white'>
                                    <i className="bi bi-tiktok"></i>   Tik Tok
                                </h1>
                            </div>
                            <div className=" abc d-flex text-center p-3">

                                <h1 className='text-white'>
                                    <i className="bi bi-soundwave"></i>   deezer
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="marqueee">
                    <div className="d-flex">
                        <div className="containerr w-100">
                            <div className=" ac d-flex text-center p-3">

                                <h1 className='text-white'>
                                    <i className="bi bi-tiktok"></i>   Tik Tok
                                </h1>
                            </div>
                            <div className=" ac d-flex text-center p-3">

                                <h1 className='text-white'>
                                    <i className="bi bi-youtube"></i>   YOUTUBE
                                </h1>
                            </div>
                            <div className=" ac d-flex text-center p-3">

                                <h1 className='text-white'>
                                    <i className="bi bi-soundwave"></i>   deezer
                                </h1>
                            </div>
                            <div className=" ac d-flex text-center p-3">

                                <h1 className='text-white'>
                                    <i className="bi bi-align-top"></i>   TIDAL
                                </h1>
                            </div>
                            <div className=" ac d-flex text-center p-3">

                                <h1 className='text-white'>
                                    <i className="bi bi-apple"></i>   MUSIC
                                </h1>
                            </div>
                            <div className=" ac d-flex text-center p-3">

                                <h1 className='text-white'>
                                    More DSP
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Body;
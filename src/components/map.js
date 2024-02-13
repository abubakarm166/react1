import React from 'react';

const GoogleMapComponent = () => {
    return (
        <div className="ourservices my-5">
            <div className="main text-center">
                <h1 className='services'>Our Services</h1>
                <p className='fames'>Fames sed amet agmet egmet amet pretium</p>
            </div>
            <div className="container d-flex justify-content-between">
                <div className="item text-center my-5">
                    <h1>

                        <i className="bi bi-boombox"></i>
                    </h1>
                    <p>Music Distribution</p>
                </div>
                <div className="item text-center my-5">
                    <h1>

                        <i className="bi bi-graph-up-arrow"></i>
                    </h1>
                    <p>Analytics</p>
                </div>
                <div className="item text-center my-5">
                    <h1>

                        <i className="bi bi-currency-yen"></i>
                    </h1>
                    <p>Publishing</p>
                </div>
                <div className="item text-center my-5">
                    <h1>

                        <i className="bi bi-globe-americas"></i>
                    </h1>
                    <p>Go Asia</p>
                </div>
            </div>
            <div className="container">
                <h2 className='earn text-center my-5'>
                    Earn money while we protect your rights and royalties
                </h2>
                <div className="container">
                    <div className="row">
                        <div className="col-6"><p><b>Digital Music Distribution + Content ID </b> allows us to generate and collect your Master Generated Royalties: Our partnership with over digital music stores ensures you get royalties </p></div>
                        <div className="col-6 text-start mt-5">
                            <img src="Vector.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-end mt-5">
                            <img src="Vector1.png" alt="" />
                        </div>
                        <div className="col-6 text-start">
                        <p><b>Music Publishing Administration service</b> allows us to collect your Publishing Royalties: Our partnership with ASCAP, BMI and Soundexchange allows Record Labels and artistes</p>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-6"><p><b>Sync:</b> We help Labels and artistes register their songs on digital music libraries, which allow their work to be made available for commercial use. To register for sync </p></div>
                        <div className="col-6 text-start mt-5">
                            <img src="Vector2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-6 text-start">
                        </div>
                        <div className="col-6">
                        <p><b>Digital Music Distribution + Content ID</b> allows us to generate and collect your Master Generated Royalties: Our partnership with over digital music stores ensures you get royalties </p>
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoogleMapComponent;

import React from 'react'
function Footer() {
    return (
        <div className="container-fluid p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-start">
                        <div>
                            <img src="Group.png" alt="" />
                        </div>
                        <div className='social d-flex my-3 text-center'>
                            <span>
                                <h4>
                                    <i className="bi bi-telegram icons"></i>
                                </h4>
                            </span>
                            <span>
                                <h4>
                                    <i className="bi bi-instagram icons"></i>
                                </h4>
                            </span>
                            <span>
                                <h4>
                                    <i className="bi bi-facebook icons"></i>
                                </h4>
                            </span>
                            <span>
                                <h4>
                                    <i className="bi bi-tiktok icons"></i>
                                </h4>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex justify-content-between text-white">
                        <ul className='footerul'>
                            <li className='my-2 ccc'><b>Home</b></li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>FAQs</li>
                            <li>News</li>
                            <li>Brand Guide</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul className='footerul'>
                            <li className='my-2 ccc'><b>Service</b></li>
                            <li>Music Video Services</li>
                            <li>DSP Profile Update</li>
                            <li>Music Distribution</li>
                            <li>Music Analytics</li>
                            <li>Affiliate Program</li>
                            <li>A & R Network</li>
                            <li>GoAsia</li>
                        </ul>
                        <ul className='footerul'>
                            <li className='my-2 ccc'><b>Knowledge Base</b></li>
                            <li>How Youtube Content ID works</li>
                            <li>Mechanical Royalties</li>
                            <li>Performance Royalties</li>
                            <li>Publisher vs. Songwriter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
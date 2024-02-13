import React from 'react'
function Faq() {
    return (
        <div className="container my-5">
            <h1 className='services text-center'>FAQ</h1>
            <p className='fames text-center'>Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit ultrices faucibus sed risus. </p>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img text-center">
                            <img src="headset.png" className='headset image-fluid' alt="" />
                            <span className='disk'>
                                <img src="disk.png" className='bg-white rounded p-2' alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className="ptag">
                            <a className="btn d-flex justify-content-between text-start btn-white w-100" data-bs-toggle="collapse" href="#first" role="button" aria-expanded="false" aria-controls="first">
                                <h5>
                                    Lacus, gravida nibh cras ultrices faucibus sed risus?
                                </h5>
                                <h4 className='down'>

                                    <i className="bi bi-arrow-down"></i>
                                </h4>
                            </a>
                        </p>
                        <div className="collapse" id="first">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                        <hr />

                        {/* second */}
                        <p className="ptag">
                            <a className="btn d-flex justify-content-between text-start btn-white w-100" data-bs-toggle="collapse" href="#second" role="button" aria-expanded="false" aria-controls="second">
                                <h5>
                                    Lacus, gravida nibh cras ultrices faucibus sed risus?
                                </h5>
                                <h4 className='down'>

                                    <i className="bi bi-arrow-down"></i>
                                </h4>
                            </a>
                        </p>
                        <div className="collapse" id="second">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                        <hr />

                        {/* third */}

                        <p className="ptag">
                            <a className="btn d-flex justify-content-between text-start btn-white w-100" data-bs-toggle="collapse" href="#third" role="button" aria-expanded="false" aria-controls="third">
                                <h5>
                                    Lacus, gravida nibh cras ultrices faucibus sed risus?
                                </h5>
                                <h4 className='down'>

                                    <i className="bi bi-arrow-down"></i>
                                </h4>
                            </a>
                        </p>
                        <div className="collapse" id="third">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                        <hr />


                        {/* fourth */}

                        <p className="ptag">
                            <a className="btn d-flex justify-content-between text-start btn-white w-100" data-bs-toggle="collapse" href="#four" role="button" aria-expanded="false" aria-controls="four">
                                <h5>
                                    Lacus, gravida nibh cras ultrices faucibus sed risus?
                                </h5>
                                <h4 className='down'>

                                    <i className="bi bi-arrow-down"></i>
                                </h4>
                            </a>
                        </p>
                        <div className="collapse" id="four">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq;
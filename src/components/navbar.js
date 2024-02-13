import React from 'react'
function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light px-2">
                <div className="container-fluid">
                    {/* <div className='justify-content-between'> */}

                    <a className="navbar-brand my-2" href="#"><img src="logo.png" alt="" className='image-fluid' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* </div> */}
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar_nav px-5">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ">Distribution</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ">Publishing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Distribution</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Artist</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Contact Us</a>
                            </li>
                        </ul>
                        <div className="btn-group language text-center">
                            <button className="btn dropdown-toggle togl btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Eng
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                            </ul>
                            <button type="button" className=" btn-danger mx-3 px-4 letstart">Let's Start</button>
                        </div>
                        </div>
                        <div>
                    </div>
                </div>
            </nav>
            {/* <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
        </>
    )
}
export default Navbar;
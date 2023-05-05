import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-white bg-white ms-3 me-3">
                <div className="container-fluid logo">
                    <a className="navbar-brand" href="#">
                        <img src='https://t4.ftcdn.net/jpg/04/34/76/59/360_F_434765914_tDNbc9ZVhz83Ui9U8W5gRhG92yHwLbE5.jpg' />
                        <span className='ms-1 fs-5 fw-bold' style={{ letterSpacing: "2px", color: "black" }}>LOOK & LIVE</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-evenly" id="navbarNavAltMarkup">
                        <div className="navbar-nav fs-5 pages">
                            <a className="nav-link active me-2 text-uppercase" aria-current="page" href="#">Home</a>
                            <a className="nav-link active me-2 text-uppercase" aria-current="page" href="#">About us</a>
                            <a className="nav-link active me-2 text-uppercase" aria-current="page" href="#">Projects</a>
                            <a className="nav-link active me-2 text-uppercase" aria-current="page" href="#">Services</a>
                            <a className="nav-link active me-2 text-uppercase" aria-current="page" href="#">Our Team</a>
                            <a className="nav-link active me-2 text-uppercase" aria-current="page" href="#">Clients</a>
                            <a className="nav-link active me-2 text-uppercase" aria-current="page" href="#">Testimonials</a>
                            <button className='btn btn-outline-dark text-uppercase'>
                                Contact us
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
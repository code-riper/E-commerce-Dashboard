
function Navbar(){
    return(
       <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top dashboard-navbar">
        <div className="container-fluid d-flex justify-content-between align-items-center h-100">
            <a href="#" className="navbar-brand dashboard-brand">
                My Dashboard
            </a>

            <button type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>

            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav ms-auto gap-2">
                    <li className="nav-item">
                        <a href="#" className="nav-link dashboard-nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link dashboard-nav-link">Users</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link dashboard-nav-link">Products</a>
                    </li>
                </ul>
            </div>
        </div>

       </nav>
    )
}

export default Navbar;
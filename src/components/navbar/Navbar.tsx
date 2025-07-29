import "./navbar.scss";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="container">
                <img src="suprachemLogo.png" alt="Logo"/>
                <div className="navbar-links">
                    <a href="/research">Research</a>
                    <a href="/publications">Publications</a>
                    <a href="/members">Members</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
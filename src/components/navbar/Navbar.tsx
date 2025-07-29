import "./navbar.scss";

const Navbar = () => {
    return(
        <div className="fixed-top" style={{backgroundColor:"#292933b3"}}>
            <div className="container-xxl d-flex align-items-center justify-content-between p-4 p-md-5">
                <a href="/">
                    <img src="/suprachemLogo.png" alt="Logo"/>
                </a>
                <div className="d-flex align-items-center justify-content-between gap-5 ms-auto smenu">
                    <a href="/research">REASEARCH</a>
                    <a href="/publications">PUBLICATIONS</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
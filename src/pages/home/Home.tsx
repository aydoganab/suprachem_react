import "./home.scss";

const Home = () => {
    return(
        <>
            <div className="position-absolute w-100 h-100 d-table">
                <div className="d-table-cell align-middle">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-white">
                                <h2 className="text-center">Dr. Aydogan's</h2>
                                <h2 className="text-center mb-2 mb-md-4">Supramolecular Chemistry Research Group</h2>
                                <p>Welcome to the Dr. Aydogan's Supramolecular Chemistry Group Website. We are located in
                                    the Department of Chemistry at Istanbul Technical University. We harness molecular
                                    recognition and self-assembly processes in template-directed protocols for the synthesis
                                    of functionalized molecules, prior to their being introduced into integrated
                                    systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom text-center text-warning">Department of Chemistry, Istanbul Technical University, Maslak 34469, Istanbul, TURKEY</div>
        </>
    )
}

export default Home
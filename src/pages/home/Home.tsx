
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
            <div className="fixed-bottom text-center text-warning">
                <svg xmlns="http://www.w3.org/2000/svg" className="supraChem-icon" viewBox="0 0 320 512"><path d="M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"/></svg>
                <span className="ms-1">Department of Chemistry, Istanbul Technical University, Maslak 34469, Istanbul, TURKEY</span>
            </div>
        </>
    )
}

export default Home
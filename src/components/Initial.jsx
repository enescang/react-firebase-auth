import Loader from 'react-loader-spinner'
const Initial = () => {
    return (
        <>
            <div className="container">
                <div className="d-flex align-items-center justify-content-center" style={{ height: 560 }}>
                    <div className="bd-highlight col-example">
                        <Loader
                            type="Bars"
                            color="#F5820D"
                            height={100}
                            width={100}
                            timeout={30000} //3 secs

                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Initial;
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { Link } from "react-router-dom";

const Home = () => {
    const user = useContext(UserContext);
    return (
        <>
            { user !== null ?
                <div className="jumbotron jumbotron-fluid mt-4">
                    <div className="container">
                        <h1 className="display-4">Hello {user.email}</h1>
                        <p className="lead">This project is available on <a href="https://github.com/kodcanlisi">Github</a>. </p>
                    </div>
                </div>

                :
                <>
                    <div className="jumbotron jumbotron-fluid mt-4">
                        <div className="container">
                            <h1 className="display-4">You need to logged in to seeing message</h1>
                            <p className="lead">  <Link to="/login"> Login </Link> or 
                        <Link to="/signup"> Signup </Link> </p>
                        </div>
                    </div>
                </>

            }
        </>
    )
};

export default Home;
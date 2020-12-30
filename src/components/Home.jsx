import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { Link } from "react-router-dom";

const Home = () => {
    const user = useContext(UserContext);
    return (
        <>
            { user !== null ?
                <h1>Welcome {user.email} - You are our member. </h1>
                :
                <>
                    <h>You need to  
                        <Link to="/login">Login</Link> or 
                        <Link to="/signup">Signup</Link></h>
                </>

            }
        </>
    )
};

export default Home;
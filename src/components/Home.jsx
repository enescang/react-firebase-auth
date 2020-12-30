import {useContext} from 'react';
import UserContext from '../context/UserContext';

const Home = () => {
    const user = useContext(UserContext);
    return(
        <>
            <h1>Home Pag {user} e</h1>
        </>
    )
};

export default Home;
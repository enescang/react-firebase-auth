import { useState } from 'react';
import { firebaseClient } from "../firebase/firebase-client";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (event) => {
        event.preventDefault();
        try {
            const user = await firebaseClient.auth().signInWithEmailAndPassword(email, password)
            alert(user.user.email)
        } catch (error) {
            alert(error);
        }

    }
    return (
        <>
            <form
                onSubmit={loginUser}
            >
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="text"
                    placeholder="Enter email" />
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="text"
                    placeholder="Enter password" />
                <button type="submit">Login</button>
            </form>
            <h1>Login Page</h1>
        </>
    )
};

export default Login;
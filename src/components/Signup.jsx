import { useState } from 'react';
import { firebaseClient } from "../firebase/firebase-client";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signupUser = async (event) => {
        event.preventDefault();
        try {
            const user = await firebaseClient.auth().createUserWithEmailAndPassword(email, password)
            alert(user.user.email)
        } catch (error) {
            alert(error);
        }

    };
    return (
        <>

            <form
                onSubmit={signupUser}
            >
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="text"
                    placeholder="Enter email" />
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="text"
                    placeholder="Enter password" />
                <button type="submit">Signup</button>
            </form>
            <h1>Signup Page</h1>
        </>
    )
};

export default Signup;
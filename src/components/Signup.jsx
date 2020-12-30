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
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <h2>Signup Page</h2>
                        <hr />
                        <form onSubmit={signupUser}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Signup;
import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const { signInUser } = useContext(AuthContex)

    const handleSignIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then((result) => {
                console.log(result);
                //Update last login time
                const lastSignTime = result?.user?.metadata?.lastSignInTime || new Date().toISOString();
                const loginInfo = { email, lastSignTime };


                fetch(`http://localhost:5000/users`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log('sign in info update', data)
                    })



                // Show SweetAlert on successful login
                Swal.fire({
                    title: "Login Successful!",
                    text: "Welcome back!",
                    icon: "success",
                    confirmButtonText: "OK"
                });

                // Redirect or perform additional actions here
            })
            .catch((error) => {
                console.log(error);

                // Optionally, show an error alert
                Swal.fire({
                    title: "Login Failed",
                    text: error.message || "An error occurred during login.",
                    icon: "error",
                    confirmButtonText: "Try Again"
                });
            });
    };



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <p className="py-6 text-center">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                            <p>New to coffee drinker:<Link to='/signup'><button className='btn btn-primary'>Sign Up</button></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
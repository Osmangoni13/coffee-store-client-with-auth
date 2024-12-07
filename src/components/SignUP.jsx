import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Result } from 'postcss';
import Swal from 'sweetalert2';

const SignUP = () => {
    const { createUser } = useContext(AuthContex);

    const handleSignUP = e => {
        e.preventDefault();
        console.log("form sign up")
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("Form Sign Up", email, password)
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, createdAt }
                //Save new user info to the database
                fetch('http://localhost:5000/users', {

                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("User Created to db", data);
                        if (data.insertedId) {
                            console.log('user created in db')
                            Swal.fire({
                                title: 'Success!',
                                text: 'Congrate You have successfully SignUP',
                                icon: 'success',
                                confirmButtonText: 'Back'
                            })
                        }
                    })
            })
            .catch(error => {
                console.log('error', error)
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6 text-center">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUP} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
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
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;
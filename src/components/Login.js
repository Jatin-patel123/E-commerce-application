import React, { useState } from 'react';
import Navbar from './Navbar';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
        <Navbar/>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="cardlog bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    {isSignUp ? (
                      <>
                        <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                        <p className="text-white-50 mb-5">Please enter your details to sign up!</p>
                        <div className="form-outline form-white mb-4">
                          <input type="text" id="typeUsername" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="typeUsername">Username</label>
                        </div>
                      </>
                    ) : (
                      <>
                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                      </>
                    )}
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>
                    {isSignUp ? (
                      <>
                        <div className="form-outline form-white mb-4">
                          <input type="password" id="typeConfirmPassword" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="typeConfirmPassword">Confirm Password</label>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                      </>
                    )}
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">
                      {isSignUp ? 'Sign Up' : 'Login'}
                    </button>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                    </div>
                  </div>
                  <div>
                    {!isSignUp ? (
                      <p className="mb-0">Don't have an account?{' '}
                        <a href="#!" className="text-white-50 fw-bold" onClick={toggleForm}>Sign Up</a>
                      </p>
                    ) : (
                      <p className="mb-0">Already have an account?{' '}
                        <a href="#!" className="text-white-50 fw-bold" onClick={toggleForm}>Login</a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

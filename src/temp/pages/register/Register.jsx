import React, { useEffect } from "react";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUser } from "../../api";
import logo from "../../assets/img/logo.png";
import Spinner from "../../components/spinner/Spinner";
import auth from "../../firebase.init";
// import { registerNewUser } from '../../redux/features/user/userSlice'
// import { createUser } from "../../api";

const Register = () => {
  // const { isLoading, user } = useSelector((state) => state.user)
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const [errorText, setErrorText] = useState("");

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    setErrorText("");
    e.preventDefault();
    const firstName = e.target.firstname.value;
    const lastName = e.target.lastname.value;
    const userName = firstName + " " + lastName;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.password.value;
    const city = e.target.city.value;
    const phone = e.target.phone.value;
    const zipCode = e.target.zipcode.value;
    const streetAddress = e.target.streetaddress.value;
    if (confirmPassword !== password)
      return setErrorText("New password and Confirm Password Does Not match");
    const userData = { userName, email, city, phone, zipCode, streetAddress };

    createUserWithEmailAndPassword(email, password).then(() => {
      createUser(userData).then((data) => console.log(data));

      // const url = "http://localhost:5000/api/v1/user/create-user";
      // fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(userData),
      // })
      //   .then((res) => res.json())
      //   .then((data) => console.log(data));
    });
  };

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user?.user?.email) {
      navigate(from, { replace: true });
    }
  }, [user, navigate]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="landingPage">
      <div className="container">
        <form onSubmit={handleRegister}>
          <div className="landing_page_text">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                {/* <!-- landing page start  --> */}
                <div className="landingFormArea">
                  <Link to="/">
                    <img src={logo} alt="images" />
                  </Link>
                  <div className="inputCart_text">
                    {/* <!-- single main cart start  --> */}
                    <div className="input_single_cart_main">
                      <h2> My Profile</h2>

                      <div className="row g-4">
                        {/* <!-- single input area  --> */}
                        <div className="col-md-6">
                          <div className="input_single_cart">
                            <input
                              className="form-control"
                              type="text"
                              name="firstname"
                              placeholder="First Name"
                              required
                            />
                          </div>
                        </div>
                        {/* <!-- single input area  --> */}
                        <div className="col-md-6">
                          <div className="input_single_cart">
                            <input
                              className="form-control"
                              type="text"
                              name="lastname"
                              placeholder="Last Name"
                              required
                            />
                          </div>
                        </div>
                        {/* <!-- single input area  --> */}
                        <div className="col-md-12">
                          <div className="input_single_cart">
                            <input
                              className="form-control"
                              type="text"
                              name="streetaddress"
                              placeholder="Street Adress"
                              required
                            />
                          </div>
                        </div>
                        {/* <!-- single input area  --> */}
                        <div className="col-md-6">
                          <div className="input_single_cart">
                            <input
                              className="form-control"
                              type="text"
                              name="zipcode"
                              placeholder="Zip code"
                              required
                            />
                          </div>
                        </div>

                        {/* <!-- single input area  --> */}
                        <div className="col-md-6">
                          <div className="input_single_cart">
                            <input
                              className="form-control"
                              type="text"
                              name="city"
                              placeholder="City"
                              required
                            />
                          </div>
                        </div>

                        {/* <!-- single input area  --> */}
                        <div className="col-md-6">
                          <div className="input_single_cart">
                            <input
                              className="form-control"
                              type="email"
                              name="email"
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>

                        {/* <!-- single input area  --> */}
                        <div className="col-md-6">
                          <div className="input_single_cart">
                            <input
                              className="form-control"
                              type="text"
                              name="phone"
                              placeholder="Phone"
                              required
                            />
                          </div>
                        </div>
                        {/* <!-- single input area  --> */}
                        <div className="col-md-6">
                          <div className="input_single_cart">
                            <input
                              className="form-control"
                              type="password"
                              name="password"
                              placeholder="Create Password"
                              required
                            />
                          </div>
                        </div>
                        {/* <!-- single input area  --> */}
                        <div className="col-md-6">
                          <div className="input_single_cart">
                            <input
                              className="form-control"
                              type="password"
                              placeholder="Confirm Password"
                              name=" confirmPassword"
                              required
                            />
                          </div>
                        </div>
                        {/* <!-- btn area  input area  --> */}
                        <div className="col-md-12">
                          <div className="input_single_cartBtn">
                            {errorText && (
                              <p style={{ color: "red" }}>{errorText}</p>
                            )}
                            <input
                              className="btn-style"
                              type="submit"
                              value="REGISTER"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single main cart End  --> */}
                  </div>
                </div>
                {/* <!-- landing page End  --> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    // <section class='landingPage'>
    //   <div class='container'>
    //     <div class='landing_page_text'>
    //       <form onSubmit={handleRegister}>
    //         <div class='row'>
    //           <div class='col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
    //             {/* <!-- landing page start  --> */}
    //             <div class='landingFormArea'>
    //               <Link to='/'>
    //                 <img src={logo} alt='images' />
    //               </Link>
    //               <div class='landingInputArea'>
    //                 {/* <!-- single item area start --> */}
    //                 <div class='landingInputArea_single'>
    //                   <input type='text' name='name' placeholder='NAME' />
    //                 </div>

    //                 <div class='landingInputArea_single'>
    //                   <input type='email' name='email' placeholder='EMAIL' />
    //                 </div>
    //                 {/* <!-- single item area End --> */}
    //                 {/* <!-- single item area start --> */}
    //                 <div class='landingInputArea_single'>
    //                   <input
    //                     type='password'
    //                     name='password'
    //                     placeholder='PASSWORD'
    //                   />
    //                 </div>
    //                 {/* <!-- single item area End --> */}
    //                 {/* <!-- single item area start --> */}

    //                 {errorText && <p style={{ color: 'red' }}>{errorText}</p>}

    //                 <div class='landingInputArea_singleBtn'>
    //                   <input class='inputBtn' type='submit' value='REGISTER' />
    //                 </div>
    //                 {/* <!-- single item area End --> */}
    //                 {/* <!-- single item area start --> */}
    //                 <div class='landingInputArea_singleBtn'>
    //                   <button
    //                     class='inputBtn'
    //                     onClick={() => navigate('/login')}
    //                   >
    //                     ALREADY USER? <b>LOGIN</b>
    //                   </button>
    //                 </div>
    //                 {/* <!-- single item area End --> */}
    //               </div>
    //               <Link to='/forgot-password'>Forgot password?</Link>
    //             </div>
    //             {/* <!-- landing page End  --> */}
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Register;

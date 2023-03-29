import * as React from 'react';
import { useState } from 'react';
import Axios from "axios";
import "./register.css";

import { NavLink } from "react-router-dom";

const Register = () => {
    const initialState = {
        usernameReg: "",
        passwordReg: "",
        confpassword: "",
        firstname: "",
        lastname: "",
        tel: "",
        address: "",
        email: "",

    }
    const [state, setState] = useState(initialState);


    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [confpassword, setConfpassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [position, setPosition] = useState('')
    const [tel, setTel] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            userId: usernameReg,
            password: passwordReg,
            confpassword: confpassword,
            firstName: firstname,
            lastName: lastname,
            position: position,
            tel: tel,
            address: address,
            email: email
        }).then((response) => {
            if (response.data.status === 200) {



            } else {
                alert(response.data.msg);
            }
            console.log(response);

        });

        Axios.post("http://e814-180-183-7-233.ngrok.io/user", {
            userId: usernameReg,
            firstName: firstname,
            lastName: lastname,
            position: position,
            tel: tel,
            address: address,
            email: email
        }).then((response) => {
            setState({
                userId: "", firstName: "", lastName: "", position: "", tel: "", address: "", email: ""
            })
            if (response.data.status === 200) {

            } else {
                alert(response.data.msg);
            }
        }).catch((err) => (err.response.data));



    };

    return (
        <div class="signup__container">
            <div class="container__child signup__thumbnail">
                <div class="thumbnail__logo"></div>
                <div class="thumbnail__content text-center">
                    <h1 class="heading--primary" style={{ marginLeft: "60px" }}>
                        Register
                    </h1>

                    <h4 style={{ marginLeft: "40px", marginTop: "40px" }}>
                        Create your Account
                    </h4>
                </div>
                <div class="thumbnail__links">
                    <ul class="list-inline m-b-0 text-center"></ul>
                </div>
                <div class="signup__overlay"></div>
            </div>
            <div class="container__child signup__form">
                <div>
                    <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input
                            class="form-control"
                            type="text"
                            name="firstname"
                            id="firstname"
                            onChange={(e) => {
                                setFirstname(e.target.value);
                            }}

                            required
                        />
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input
                            class="form-control"
                            type="text"
                            name="lastname"
                            id="lastname"
                            onChange={(e) => {
                                setLastname(e.target.value);
                            }}

                            required
                        />
                    </div>
                    <div class="form-group">
                        <label for="position">Position</label>
                        <input
                            class="form-control"
                            type="text"
                            name="position"
                            id="position"
                            onChange={(e) => {
                                setPosition(e.target.value);
                            }}

                            required
                        />

                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            class="form-control"
                            type="text"
                            name="email"
                            id="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}

                            required
                        />
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input
                            class="form-control"
                            type="text"
                            name="tel"
                            id="tel"
                            onChange={(e) => {
                                setTel(e.target.value);
                            }}

                            required
                        />
                        <div class="form-group">
                            <label for="phone">Address</label>
                            <input
                                class="form-control"
                                type="text"
                                name="address"
                                id="address"
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}

                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="phone">Username</label>
                            <input
                                class="form-control"
                                type="text"
                                name="user"
                                id="user"
                                onChange={(e) => {
                                    setUsernameReg(e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input
                                class="form-control"
                                type="password"
                                name="password"
                                id="password"
                                onChange={(e) => {
                                    setPasswordReg(e.target.value);
                                }}

                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="confirmpassword">Confirm Password</label>
                            <input
                                class="form-control"
                                type="password"
                                name="confpassword"
                                id="confpassword"
                                onChange={(e) => {
                                    setConfpassword(e.target.value);
                                }}

                                required
                            />
                        </div>
                        <div class="buttonControl" style={{ marginTop: "20px" }}>
                            <ul class="list-inline">
                                <li>
                                    <button class="btn btn--form"

                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        type="button"
                                    >
                                        Register
                                    </button>

                                </li>
                            </ul>
                            <ul class="list-inline">
                                <NavLink to="/logincustomer" exact>
                                    <li>
                                        <input class="btn btn--form1" type="submit" value="Login" />
                                    </li>
                                </NavLink>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div style={{ fontFamily: "IBM Plex Sans Thai" }}>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel" style={{ color: "red", fontWeight: "500" }}>
                                    &nbsp;   Register Alert &nbsp;


                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Register Successfully !!
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>


                                <button class="btn btn-primary"
                                    onClick={() => window.location = '/logincustomer'}
                                    data-bs-dismiss="modal"
                                >OK </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    );
};

export default Register;
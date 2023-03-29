import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { Axios } from 'axios';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Axios from 'axios'
import Form from 'react-bootstrap/Form';
// import delivery from '../assets/delivery-trucks.png';
import cargo from '../assets/cargo-truck.png';
// import content from '../static';
import './login.css'

export default function Logincustomer() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password

        }).then((response) => {
            if (response.data.status === 200) {
                localStorage.setItem('token', response.data.token)

                window.location = '/home'
            } else {
                alert(response.data.msg);
            }
        });

    };

    return (
        <Container>
            
            <div className="headLogin">
                <img src={cargo} className="delilogo" alt="Logo" />
            </div>
            <i class="fa-solid fa-truck-front"></i>
            <div style={{ width: "700px", marginLeft: "26%" }}>
                <Form >
                    <div >
                        <Form.Group className="formusername mb-3" controlId="formBasicusername">
                            <Form.Label className='usertitle'>Username</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>

                        <Form.Group className="formpassword mb-3" controlId="formBasicPassword">
                            <Form.Label className='passwordtitle'>Password</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </Form.Group>
                        <div style={{ marginTop: "40px", marginLeft: "200px" }}>
                            <Button
                                onClick={() => { login() }}
                            >LOGIN
                            </Button>
                            <NavLink to="/signup" exact>
                                <Button
                                    style={{ marginLeft: "20px", width: "110px" }}
                                    variant="secondary"
                                >
                                    REGISTER
                                </Button>
                            </NavLink>
                        </div>

                    </div>
                </Form>
            </div>
        </Container>
    );
}
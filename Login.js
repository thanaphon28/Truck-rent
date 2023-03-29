import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { Axios } from 'axios';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Axios from 'axios'
import Form from 'react-bootstrap/Form';
// import content from '../static';
import './login.css'


export default function Login() {
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     // eslint-disable-next-line no-console
    //     console.log({
    //         user: data.get('user'),
    //         password: data.get('password'),
    //     });
    // };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            userId: username,
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
    // const schema = yup.object().shape({
    //     username: yup.string().required("Required Username"),
    //     password: yup.string().required("A password is required").min(5),
    // });

    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     resolver: yupResolver(schema),
    //     defaultValues: {
    //         username: '',
    //         password: ''
    //     }
    // });

    // const onSubmit = (data) => console.log(data);



    return (

        <Container>

            <h1
                className="headLogin"

            >
                login

            </h1>
            <i class="fa-solid fa-truck-front"></i>
            <div style={{ width: "700px", marginLeft: "26%" }}>
                <Form >
                    <div >
                        <Form.Group className="formusername mb-3" controlId="formBasicusername">
                            <Form.Label className='usertitle'>Username</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                name="userid"
                            // {...register('username')}
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        {/* {errors?.username && <span role="alert">{errors.username?.message}</span>} */}

                        <Form.Group className="formpassword mb-3" controlId="formBasicPassword">
                            <Form.Label className='passwordtitle'>Password</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                            // {...register('password')}
                            />
                        </Form.Group>

                        {/* {errors?.password && (
                            <span role="alert">{errors.password?.message}</span>
                        )} */}



                        <div style={{ marginTop: "40px", marginLeft: "200px" }}>

                            <Button
                                onSubmit={login}
                                type="submit"

                            >
                                LOGIN
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

        //         <TextField
        //             margin="normal"
        //             required
        //             fullWidth
        //             id="user"
        //             label="Username"
        //             name="user"
        //             autoComplete="user"
        //             autoFocus
        //             onChange={(e) => {
        //                 setUsername(e.target.value);
        //             }}
        //         />
        //         <TextField
        //             margin="normal"
        //             required
        //             fullWidth
        //             name="password"
        //             label="Password"
        //             type="password"
        //             id="password"
        //             autoComplete="current-password"
        //             onChange={(e) => {
        //                 setPassword(e.target.value);
        //             }}
        //         />

        //         <Link to="/home">
        //             <Button
        //                 type="submit"
        //                 fullWidth
        //                 variant="contained"
        //                 sx={{ mt: 3, mb: 2 }}
        //                 onClick={login}
        //             >
        //                 Sign In
        //             </Button>
        //         </Link>


        // <h1>{loginStatus}</h1>

    );
}
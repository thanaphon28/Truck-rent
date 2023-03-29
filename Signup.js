import * as React from 'react';
import Axios from 'axios'
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/">
                Truck Rents
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const theme = createTheme();

export default function SignUp() {
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     // eslint-disable-next-line no-console
    //     console.log({
    //         username: data.get('user'),
    //         password: data.get('password'),
    //     });
    // };

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

        Axios.post("http://ffa6-180-183-7-233.ngrok.io/user", {
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
        }).catch((err) => toast.error(err.response.data));

        // toast.success("Register Successfully");

    };





    // const [loginList, setLoginList] = useState([]);

    // const getLogin = () => {
    //     Axios.get('http://localhost:3001/login').then((response) => {
    //         setLoginList(response.data);
    //     })
    // }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#DC604B' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ fontFamily: "Poppins" }}>
                        Register
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={(e) => {
                                        setFirstname(e.target.value);
                                    }}
                                    name="firstname"
                                    required
                                    fullWidth
                                    id="firstname"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={(e) => {
                                        setLastname(e.target.value);
                                    }}
                                    required
                                    fullWidth
                                    id="lastname"
                                    label="Last Name"
                                    name="lastname"

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={(e) => {
                                        setPosition(e.target.value);
                                    }}
                                    name="position"
                                    required
                                    fullWidth
                                    id="position"
                                    label="Position"

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={(e) => {
                                        setTel(e.target.value);
                                    }}
                                    required
                                    fullWidth
                                    id="tel"
                                    label="Tel :"
                                    name="tel"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                    required
                                    fullWidth
                                    id="address"
                                    label="Address"
                                    name="address"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        setUsernameReg(e.target.value);
                                    }}
                                    required
                                    fullWidth
                                    id="user"
                                    label="Username"
                                    name="user"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        setPasswordReg(e.target.value);
                                    }}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        setConfpassword(e.target.value);
                                    }}
                                    required
                                    fullWidth
                                    name="confpassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confpassword"

                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid> */}
                        </Grid>

                        <Button
                            onClick={register}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"


                        >
                            Sign Up
                        </Button>

                        <div style={{ fontFamily: "IBM Plex Sans Thai" }}>
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
                                      

                                            <NavLink to="/logincustomer">
                                                <button class="btn btn-primary"

                                                    data-bs-dismiss="modal"
                                                // data-bs-toggle="modal" data-bs-target="#exampleModal1"
                                                // onClick={() => window.location = '/orderdetail'}
                                                >OK </button>
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/logincustomer" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} className="mb-5" />
            </Container>
        </ThemeProvider>
    );
}
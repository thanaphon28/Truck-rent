import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from '@mui/material'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import check from '../assets/check.png';
import box from '../assets/box-truck.png';
import './book.css';


export default function Booking() {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3" className='headtitlecheck'>Please Read !</Popover.Header>
            <Popover.Body className='titlecheck'>
                โปรดเช็ค<strong> ข้อมูล</strong> ที่ท่านกรอกก่อนทำการจองรถขนส่งหัวลาก <br></br>หากมีปัญหาโปรดติดต่อเจ้าหน้าที่หน้าที่
            </Popover.Body>
        </Popover>
    );
    const Example = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <i class="fa-solid fa-circle-exclamation" ></i>
        </OverlayTrigger>
    );

    const reformatDate = (datetime) =>
        datetime.getDate()
        +
        "-" +
        (datetime.getMonth() + 1) +
        "-" +
        datetime.getFullYear();

    const [cost, setCost] = useState([]);
    const [bookingList, setBookingList] = useState([]);
    const [viewlist, setViewList] = useState([]);
    const [buttonbook, setButtonbook] = useState([]);

    const loadOrderCustomer = async () => {
        const response = await axios.get('http://ffa6-180-183-7-233.ngrok.io/ordercustomer');
        setViewList(response.data)
        setButtonbook(response.data)
        // setPaginated((response.data).slice(0).take(pageSize).value()) //Pagecount
    }

    useEffect(() => {
        loadOrderCustomer();
        // setPaginated((response.data).slice(0).take(pageSize).value())
    }, []);

    const initialState = {
        names: "",
        typetruck: "",
        firstName: "",
        quantity: "",
        payment: "",
        status: "",
        date: "",
        time: "",
        tel: "",
        village_name: "",
        road: "",
        district: "",
        sub_district: "",
        province: "",
        zip_code: "",
        country: "",
        village_name1: "",
        road1: "",
        district1: "",
        sub_district1: "",
        province1: "",
        zip_code1: "",
        country1: "",
        car_registration: "",
        container: "",
        transfer_receipt: "",
        container_type: "",
        distance: "",

    }
    const [state, setState] = useState(initialState);
    const { names, typetruck, firstName, quantity, payment, status, date, time, tel, village_name, road, district, sub_district, province, zip_code, country, village_name1, road1, district1, sub_district1,
        province1, zip_code1, country1, car_registration, container, transfer_receipt, container_type, distance } = state;
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://ffa6-180-183-7-233.ngrok.io/${id}`)
            .then((resp) => setState({ ...resp.data[0] }));

        axios.get(`http://ffa6-180-183-7-233.ngrok.io/calculed`).then((resp) => {
            setCost(resp.data);
            console.log(resp.data);
        });

    }, [id])

    const handleSubmit = (e, props) => {

        const date1 = date;
        const time1 = time;
        const formData = new FormData(e.handleInputChange);

        e.preventDefault();
        if (!date) {
            toast.warning("Please provide value into each input field");
            console.log("please")
        } else {
            if (!id) {

                const token = localStorage.getItem("token");
                console.log("complete")
                axios
                    .create({
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }).post("http://ffa6-180-183-7-233.ngrok.io/ordercustomer", {
                        names,
                        firstName,
                        quantity,
                        payment,
                        status,
                        date,
                        time,
                        tel,
                        village_name,
                        road,
                        district,
                        sub_district,
                        province,
                        zip_code,
                        country,
                        village_name1,
                        road1,
                        district1,
                        sub_district1,
                        province1,
                        zip_code1,
                        country1,
                        car_registration,
                        container,
                        transfer_receipt,
                        container_type,
                        distance,
                        typetruck,
                        selling_price: cost,
                        oil_cost_price: cost,
                    }).then(() => {
                        setState({
                            customerName: "", quantity: "", payment: "", status: "", date: "", time: "", tel: "", village_name: "", road: "", district: "", sub_district: "", province: "", zip_code: "", country: "", village_name1: "",
                            road1: "",
                            district1: "",
                            sub_district1: "",
                            province1: "",
                            zip_code1: "",
                            country1: "",
                            car_registration: "",
                            container: "",
                            transfer_receipt: "",
                            container_type: "",
                            names: "",
                            distance: "",
                            typetruck: ""
                        })

                    }).catch((err) => toast.error(err.response.data));

                axios.post('http://localhost:3001/bookings', {
                    names,
                    date1,
                    time1,
                    typetruck,
                    container

                }).then(() => {
                    setState({ names: "", typetruck: "", container: "", date1: "", time1: "" });
                }).catch((err) => toast.error(err.response.data));

                toast.success("Booking Success !");

            }
            setTimeout(() => window.location = '/payment', 5000);
            // window.location = '/orderdetail'
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const resetInputField = () => {
        setState("");
    };


    return (
        <div>

            <Form onSubmit={handleSubmit} autocomplete="off" >
                <Container>
                    <Row>
                        <Col>
                            <h2 className='booktrucktitle' >Reserve a Truck <img src={box} className="seachtrucklogo" alt="Logo" /></h2>
                            <h6 className='secondbooktitle'>เลือกรายละเอียด ค้นหารถที่คุณต้องการได้เลย</h6>
                            <hr></hr>
                        </Col>
                    </Row>

                    <Row className='firstselectrow'>
                        <Col>
                            <label className="titletruck mb-1 mt-4">ยี่ห้อรถหัวลาก</label>
                            <InputGroup id="myForm" size="sm" className="brandtrucks">
                                <Form.Select size="sm" className="form-control mb-2"
                                    onChange={handleInputChange}
                                    id="names"
                                    name="names"
                                    value={names || ""}
                                >
                                    <option hidden>Select you Truck</option>
                                    <option>HINO</option>
                                    <option>ISUZU</option>
                                    <option>SCANIA</option>
                                    <option>VOLVO</option>
                                </Form.Select>
                            </InputGroup>
                        </Col>

                        <Col className="countcol">
                            <label className="titlecount mb-1 mt-4"> จำนวน </label>
                            <InputGroup size="sm" className="countinput">
                                <Form.Control size="sm" type="text" placeholder="Quantity"
                                    className=' mb-2'
                                    id="quantity"
                                    name="quantity"
                                    value={quantity || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>

                        <Col></Col>
                    </Row>

                    <Row className='secondselectrow mb-4'>
                        <Col>
                            <label className="titletype mb-1 mt-4">ประเภทรถลาก</label>
                            <InputGroup size="sm" className="types">

                                <Form.Select size="sm" className="form-control mb-2"
                                    id="typetruck"
                                    name="typetruck"
                                    value={typetruck || ""}
                                    onChange={handleInputChange}

                                >

                                    <option hidden>Select you Type</option>
                                    <option>รถเทรลเลอร์พื้นเรียบ</option>
                                    <option>พ่วง</option>

                                </Form.Select>

                            </InputGroup>
                        </Col>

                        <Col >
                            <label className="titlecontainer mb-1 mt-4">ชื่อคอนเทนเนอร์</label>
                            <InputGroup size="sm" className="contain">
                                <Form.Select size="sm" className="form-control mb-2"
                                    id="container"
                                    name="container"
                                    value={container || ""}
                                    onChange={handleInputChange}

                                >
                                    <option hidden>Select you Containers</option>
                                    <option>Dry </option>
                                    <option>Reefer </option>
                                    <option>Open top </option>
                                    <option>Flat rack </option>
                                </Form.Select>
                            </InputGroup>

                        </Col>

                        <Col>
                            <label className="titlecontainertype mb-1 mt-4">ประเภทคอนเทนเนอร์</label>
                            <InputGroup size="sm" className="containtype ">
                                <Form.Select size="sm" className="form-control mb-2"
                                    id="container_type"
                                    name="container_type"
                                    value={container_type || ""}
                                    onChange={handleInputChange}

                                >
                                    <option hidden>Select you Containers Type</option>
                                    <option>20'feet</option>
                                    <option>40'feet</option>
                                    <option>40'HC</option>
                                </Form.Select>
                            </InputGroup>
                        </Col>

                        <Row>
                            <Col xs={4} className="datecol mt-5 mb-5">
                                <Row>
                                    <label className="titledate mb-1"> วันที่ใช้งาน </label>
                                </Row>
                                <input
                                    className='form-control dateselect'
                                    type="date"
                                    id="date"
                                    name="date"
                                    placeholder={reformatDate(new Date(date))}
                                    value={date || ""}
                                    onChange={handleInputChange}
                                />
                            </Col>

                            <Col className="timecol mb-5 mt-5">
                                <Row>
                                    <label className="titletime mb-1"> เวลาที่ใช้งาน </label>
                                </Row>
                                <input
                                    className='form-control timeselect'
                                    type="time"
                                    id="time"
                                    name="time"
                                    placeholder="Time"
                                    value={time || ""}
                                    onChange={handleInputChange}
                                />
                            </Col>

                            <Col className=" mb-5 mt-4">
                                <label className="titlenamedistance mb-1"> ระยะทางรวม (Km) </label>
                                <InputGroup size="sm" className="distanceinput">

                                    <Form.Control size="sm" type="text" placeholder="Distance (KM)"
                                        className='form-control mb-2'
                                        id="distance"
                                        name="distance"
                                        value={distance || ""}
                                        onChange={handleInputChange}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>


                    </Row>
                    <hr></hr>

                    <label className='titleroadout'>ข้อมูลติดต่อ  </label>
                    <h6 className='secondroadouttitle mt-3'>โปรดกรอกชื่อและเบอร์โทรของท่าน</h6>

                    <Row className='mt-5'>
                        <Col>
                            <InputGroup size="sm" className="namesinput mt-2">
                                <label className="titlenamecus"> ชื่อ </label>
                                <Form.Control size="sm" type="text" placeholder="Name"
                                    className='mb-2'
                                    id="firstName"
                                    name="firstName"
                                    value={firstName || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup size="sm" className="telinput mt-2">
                                <label className="titletel"> เบอร์โทร </label>
                                <Form.Control size="sm" type="text" placeholder="Tel."
                                    className='mb-2'
                                    id="tel"
                                    name="tel"
                                    value={tel || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <label className='titleroadout'>เลือกเส้นทางเดินรถ  </label>
                    <Example />
                    <h6 className='secondroadouttitle'>กรอกรายละเอียดจากต้นทางไปยังปลายทาง</h6>

                    <Row className='mt-5 mb-3'>
                        <Col>
                            <InputGroup size="sm" className="vilinput mt-2">
                                <label className="titlevillage"> ต้นทาง </label>
                                <Form.Control size="sm" type="text" placeholder="กำหนดต้นทาง"
                                    className='mb-2'
                                    id="village_name"
                                    name="village_name"
                                    value={village_name || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>

                        <Col>
                            <InputGroup size="sm" className="roadtinput mt-2">
                                <label className="titleroad"> ถนน </label>
                                <Form.Control size="sm" type="text" placeholder="Road"
                                    className='mb-2'
                                    id="road"
                                    name="road"
                                    value={road || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col>
                            <InputGroup size="sm" className="disinput mt-2">
                                <label className="titledis"> อำเภอ </label>
                                <Form.Control size="sm" type="text" placeholder="District"
                                    className='mb-2'
                                    id="district"
                                    name="district"
                                    value={district || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>

                        <Col>
                            <InputGroup size="sm" className="subtinput mt-2">
                                <label className="titlesub"> ตำบล </label>
                                <Form.Control size="sm" type="text" placeholder="Sub district"
                                    className='mb-2'
                                    id="sub_district"
                                    name="sub_district"
                                    value={sub_district || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col>
                            <InputGroup size="sm" className="provinceinput mt-2">
                                <label className="titleprovince"> จังหวัด </label>
                                <Form.Control size="sm" type="text" placeholder="Province"
                                    className='mb-2'
                                    id="province"
                                    name="province"
                                    value={province || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>

                        <Col>
                            <InputGroup size="sm" className="zipinput mt-2">
                                <label className="titlezip"> รหัสไปรษณีย์ </label>
                                <Form.Control size="sm" type="text" placeholder="Postal code"
                                    className='mb-2'
                                    id="zip_code"
                                    name="zip_code"
                                    value={zip_code || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className='mb-5'>
                        <Col>
                            <InputGroup size="sm" className="countryinput mt-2">
                                <label className="titlecountry"> ประเทศ </label>
                                <Form.Control size="sm" type="text" placeholder="Country"
                                    className='mb-2'
                                    id="country"
                                    name="country"
                                    value={country || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col></Col>
                    </Row>
                    <hr className='line2'></hr>

                    <Row className='mt-5 mb-3'>
                        <Col>
                            <InputGroup size="sm" className="vilinput1 mt-2">
                                <label className="titlevillage1"> ปลายทาง </label>
                                <Form.Control size="sm" type="text" placeholder="กำหนดปลายทาง"
                                    className='mb-2'
                                    id="village_name1"
                                    name="village_name1"
                                    value={village_name1 || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>

                        <Col>
                            <InputGroup size="sm" className="roadtinput mt-2">
                                <label className="titleroad"> ถนน </label>
                                <Form.Control size="sm" type="text" placeholder="Road destination"
                                    className='mb-2'
                                    id="road1"
                                    name="road1"
                                    value={road1 || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col>
                            <InputGroup size="sm" className="disinput mt-2">
                                <label className="titledis"> อำเภอ </label>
                                <Form.Control size="sm" type="text" placeholder="District destination"
                                    className='mb-2'
                                    id="district1"
                                    name="district1"
                                    value={district1 || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>

                        <Col>
                            <InputGroup size="sm" className="subtinput mt-2">
                                <label className="titlesub"> ตำบล </label>
                                <Form.Control size="sm" type="text" placeholder="Sub district destination"
                                    className='mb-2'
                                    id="sub_district1"
                                    name="sub_district1"
                                    value={sub_district1 || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col>
                            <InputGroup size="sm" className="provinceinput mt-2">
                                <label className="titleprovince"> จังหวัด </label>
                                <Form.Control size="sm" type="text" placeholder="Province destination"
                                    className='mb-2'
                                    id="province1"
                                    name="province1"
                                    value={province1 || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>

                        <Col>
                            <InputGroup size="sm" className="zipinput mt-2">
                                <label className="titlezip"> รหัสไปรษณีย์ </label>
                                <Form.Control size="sm" type="text" placeholder="Postal code destination"
                                    className='mb-2'
                                    id="zip_code1"
                                    name="zip_code1"
                                    value={zip_code1 || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>

                    </Row>

                    <Row className='rowinput1 mb-5'>
                        <Col>
                            <InputGroup size="sm" className="countryinput mt-2">
                                <label className="titlecountry"> ประเทศ </label>
                                <Form.Control size="sm" type="text" placeholder="Country destination"
                                    className='mb-2'
                                    id="country1"
                                    name="country1"
                                    value={country1 || ""}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Col>

                        <Col>
                            <Button className="rebtn mb-4 mt-4" variant="danger" type='reset' onClick={resetInputField}> Reset </Button>
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Reserved
                            </button>

                            <div style={{ fontFamily: "IBM Plex Sans Thai" }}>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel" style={{ color: "red", fontWeight: "500" }}>
                                                    &nbsp;   โปรดเช็คข้อมูลก่อนทำการจอง &nbsp;<img src={check} className="checklogo" alt="Logo" />
                                                </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                &nbsp; &nbsp; &nbsp; โปรดเช็คข้อมูลทั้งหมด ก่อนทำการจองรถขนส่งหัวลาก <br></br> &nbsp;&nbsp;&nbsp;ในกรณีที่มีปัญหาสามารถติดต่อได้ที่ Help
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                                <button class="btn btn-primary"
                                                    onClick={handleSubmit}
                                                    data-bs-dismiss="modal"
                                                    value={id ? "Update" : "Save"}
                                                // data-bs-toggle="modal" data-bs-target="#exampleModal1"
                                                // onClick={() => window.location = '/orderdetail'}
                                                >Reserve </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ToastContainer />
                        </Col>
                    </Row>

                </Container>
            </Form>
        </div >
    )
}




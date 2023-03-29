import React, { useState, useEffect } from 'react'
// import { Container } from '@mui/material'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
import axios from "axios";
import Popup from 'reactjs-popup';
import orders from '../assets/delivery-truckss.png';
import pay from '../assets/online-payment.png';
import { NavLink } from 'react-router-dom'
import './order.css'

const initialState = {
    transfer_receipt: "",
};

export default function Orderdetail() {

    const reformatDateId = (datetime) =>
        datetime.getDate() +
        "" +
        (datetime.getMonth() + 1) +
        "" +
        datetime.getFullYear();


    const [orderdetail, setOrderdetail] = useState({});


    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .create({
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .get('http://ffa6-180-183-7-233.ngrok.io/ordercustomer').then((response) => {
                setOrderdetail(response.data);
            });
    }, [])

    const [img, setIMG] = useState([]);

    const reformatDate = (datetime) =>
        datetime.getFullYear() +
        "-" +
        (datetime.getMonth() + 1) +
        "-" +
        datetime.getDate();

    var formatter = new Intl.NumberFormat({
        style: "currency",
        currency: "THB",
    });


    return (

        <div>
            <Container className='con'>

                <Row>
                    <Col>
                        <h2 className='ordertitle' >Order Details  <img src={orders} className="seachtrucklogo" alt="Logo" /></h2>
                        <h6 className='secondhistitle'>ประวัติการจองทั้งหมดของคุณ</h6>

                        <hr style={{
                            width: "40%"
                        }}></hr>
                    </Col>
                </Row>


                <Row className='firstcustomerrow'>
                    <Col>
                        <p>ข้อมูลการจองของท่าน
                            <NavLink to="/payment">
                                <p>ข้อมูลการชำระเงิน  ( Click )<img src={pay} className="paylogo" alt="Logo" /></p>

                            </NavLink>
                        </p>
                    </Col>
                </Row>
                <center>
                    <hr className='line3'></hr>
                </center>



                <Row className='tworowinfobooking'>
                    <div className="tableHistory">
                        <div className='infobook'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ textAlign: "center" }}>
                                            ORDER ID
                                        </th>
                                        <th scope="col" style={{ textAlign: "center" }}>DATE</th>
                                        <th scope="col" style={{ textAlign: "center" }}>TIME</th>
                                        <th scope="col" style={{ textAlign: "center" }}>STATUS</th>
                                        <th scope="col" style={{ textAlign: "center" }}>TOTAL</th>
                                        <th scope="col" style={{ textAlign: "center" }}>ORDER DETAIL</th>
                                        <th scope="col" style={{ textAlign: "center" }}>PAYMENT</th>
                                        <th scope="col" style={{ textAlign: "center" }}>IMG PREVIEW</th>
                                    </tr>
                                </thead>

                                <tbody>




                                    {orderdetail.length > 0
                                        ? orderdetail.map((item, i) => {
                                            return (
                                                <tr>

                                                    <td>
                                                        <p style={{ marginTop: "10px", }}>
                                                            {reformatDateId(new Date(item.date))}{item.id}</p>
                                                    </td>


                                                    <td >
                                                        <p style={{ marginTop: "10px" }}>{reformatDate(new Date(item.date))} </p>
                                                    </td>
                                                    <td>
                                                        <p style={{ marginTop: "10px" }}>{item.time}</p>

                                                    </td>
                                                    <td className={`${item.status}`}>
                                                        <p style={{ marginTop: "10px" }}>
                                                            {item.status.toUpperCase()}
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p style={{ marginTop: "10px" }}>
                                                            {formatter.format(item.price)}.00 THB
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p style={{ marginTop: "6px", textAlign: "center" }}>
                                                            <a
                                                                class="btn btn-secondary"
                                                                style={{ width: "80px" }}
                                                                data-bs-toggle="collapse"
                                                                href={`#multiCollapseExample${i}`}
                                                                role="button"
                                                                aria-expanded="false"
                                                                aria-controls="multiCollapseExample1"

                                                            >
                                                                View
                                                            </a>
                                                        </p>
                                                        <div class="row">
                                                            <div class="col" style={{ width: "250px" }}>
                                                                <div
                                                                    // class="collapse multi-collapse"
                                                                    class="accordian-body collapse"
                                                                    id={`multiCollapseExample${i}`}
                                                                >

                                                                    <div
                                                                        class="card card-body"
                                                                        style={{
                                                                            border: "1px solid gray",
                                                                            borderRadius: "15px",
                                                                            textAlign: "left",
                                                                        }}
                                                                    >
                                                                        Brand Trucks : {item.names.toUpperCase()}
                                                                        <br />
                                                                        Quantity : {item.quantity}
                                                                        <br />
                                                                        ต้นทาง : {item.village_name.toUpperCase()}
                                                                        <br />
                                                                        ปลายทาง :{" "}
                                                                        {item.village_name1.toUpperCase()} <br />
                                                                        Container  : {item.container.toUpperCase()}
                                                                        <br />
                                                                        Size Container : {item.container_type} <br />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {item.payment !== "waiting for payment" ? (
                                                            <div style={{ marginTop: "10px", textAlign: "center" }}>{item.payment.toUpperCase()}</div>
                                                        ) : (
                                                            <div style={{ marginTop: "20px", textAlign: "center" }}>
                                                                <label htmlFor="contained-button-file">
                                                                    <input
                                                                        multiple
                                                                        type="file"
                                                                        style={{ width: "190px" }}
                                                                        onChange={(e) => {
                                                                            let imgData = [...img];
                                                                            imgData[i] = {
                                                                                picturePreview: URL.createObjectURL(
                                                                                    e.target.files[0]
                                                                                ),
                                                                                pictureAsFile: e.target.files[0],
                                                                            };
                                                                            setIMG(imgData);
                                                                            console.log(imgData)

                                                                        }}

                                                                    />
                                                                    <p style={{ marginLeft: "10px" }}><strong>
                                                                        อัพไฟล์ ( PNG )</strong></p>
                                                                </label>

                                                                <div>
                                                                    <button
                                                                        style={{
                                                                            width: "90px",
                                                                            marginTop: "10px",
                                                                            marginBottom: "10px",
                                                                            marginRight: "10px",
                                                                        }}
                                                                        type="button"
                                                                        class="btn btn-danger"
                                                                        onClick={() => {
                                                                            let imgData = [...img];
                                                                            imgData.splice(i, 1);
                                                                            setIMG(imgData);
                                                                        }}
                                                                    >
                                                                        Delete
                                                                    </button>

                                                                    <button
                                                                        style={{ width: "90px", marginTop: "10px", marginBottom: "10px", }}
                                                                        type="button"
                                                                        class="btn btn-success"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModal"
                                                                        onClick={(e) => {
                                                                            const formData = new FormData();
                                                                            formData.append(
                                                                                "fileData",
                                                                                img[i].pictureAsFile,
                                                                                item.id

                                                                            );
                                                                            console.log(img)
                                                                            console.log(formData)
                                                                            axios
                                                                                .post(
                                                                                    "http://ffa6-180-183-7-233.ngrok.io/uploadpayment",
                                                                                    formData
                                                                                )
                                                                                .then((response) => {
                                                                                    if (response.data.status === 200) {
                                                                                        // alert("Upload payment successfully");
                                                                                        window.location = "/orderdetail";
                                                                                    }

                                                                                });
                                                                        }}

                                                                    >
                                                                        Confirm
                                                                    </button>
                                                                    <div style={{ fontFamily: "Poppins" }}>
                                                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                            <div class="modal-dialog modal-dialog-centered">
                                                                                <div class="modal-content">
                                                                                    <div class="modal-header">
                                                                                        <h5 class="modal-title" id="exampleModalLabel" style={{ color: "red", fontWeight: "500" }}>
                                                                                            &nbsp;   Upload Image &nbsp;


                                                                                        </h5>
                                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                                    </div>
                                                                                    <div class="modal-body">
                                                                                        &nbsp; Upload Successfully !
                                                                                    </div>
                                                                                    <div class="modal-footer">
                                                                                        <button class="btn btn-primary"
                                                                                            data-bs-dismiss="modal"
                                                                                        >OK </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {img.length > 0 && img[i] ? (
                                                            <div>
                                                                <img
                                                                    src={img[i].picturePreview}
                                                                    width="100"
                                                                    height="150"
                                                                ></img>
                                                            </div>
                                                        ) : item.payment === "paid" ? (
                                                            <div style={{ textAlign: "center" }}>
                                                                <Popup trigger={<a href="#"> View </a>} modal>
                                                                    <img
                                                                        src={
                                                                            "http://ffa6-180-183-7-233.ngrok.io/imgpayment/" + item.id
                                                                        }
                                                                        width="500"
                                                                        height="650"
                                                                    ></img>
                                                                </Popup>
                                                            </div>
                                                        ) : (
                                                            <div></div>
                                                        )}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        : ''
                                    }
                                </tbody>
                            </table>
                        </div >
                    </div>
                </Row >
            </Container >
        </div >
    )
}


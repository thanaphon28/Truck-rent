import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './payment.css'
// import $ from 'jquery';

export const Payment = () => {
    // function copyToClipboard(element) {
    //     var $temp = $("<input>");
    //     $("body").append($temp);
    //     $temp.val($(element).text()).select();
    //     document.execCommand("copy");
    //     $temp.remove();
    // }
    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <h2 className='firstpaytitle'>การชำระเงิน</h2>
                    <h5 className='secondpaytitle'>ชำระเงินการจองรถขนส่งของท่าน</h5>
                    <hr></hr>
                </Col>
            </Row>
            <Row >
                <center>
                    <Row>
                        <Col></Col>
                        <Col xs={5} className='totalcol'>
                            <p className='totaltitle'>
                                บัญชีในการโอนชำระเงิน
                            </p>
                        </Col>
                        <Col></Col>

                    </Row>
                    {/* <Row>
                        <Col></Col>
                        <Col xs={5}>
                            <p className='title2'>
                                เก็บหลักฐานการโอนเงินและอัพโหลดภายใน  01-01-2022
                            </p>
                        </Col>
                        <Col></Col>

                    </Row> */}
                    <Row >
                        <Col></Col>
                        <Col xs={5} className='bankcol'>
                            <p className='banktitle'>
                                ไทยพาณิชย์ (SCB)
                            </p>
                            <p className='namecompanytitle'>
                                ชื่อบริษัท ไฮดร้า ดาต้า แอนด์คอนซัลติ้ง
                            </p>
                            <p className='namecompanytitle2'>
                                Hydra Data and Consulting
                            </p>
                            <p className='numbank' id="p1">
                                เลขที่บัญชี : 012 3456 789
                                {/* <button onclick="copyToClipboard('#p1')">Copy</button> */}
                            </p>


                        </Col>
                        <Col></Col>
                        <Row>
                            <Col></Col>
                            <Col xs={5}>
                                <p className='title3'>
                                    เพื่อความรวดเร็วในการยืนยันชำระเงินของท่านบริษัทขอแนะนำให้ท่านอัพโหลดหลักฐานการชำระเงินที่ท่านได้รับจาก
                                    Mobile banking application หรือ internet banking แทนการอัพโหลดหลักฐานประเภทอื่น ซึ่งอาจทำให้การตรวจสอบการชำระเงินล่าช้า
                                </p>
                            </Col>
                            <Col></Col>

                        </Row>


                    </Row>
                    <Row>
                        <Col></Col>
                        <Col xs={5}>
                            <div className="d-grid gap-2">
                                <Link to="/orderdetail">
                                    <Button className="uploadbutton" size="sm">
                                        มีหลักฐานการชำระเงิน อัพโหลดได้เลย
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                        <Col></Col>

                    </Row>
                    <Row>
                        <Col></Col>
                        <Col xs={5}>
                            <div className="d-grid gap-2">
                                <Link  to="/home">
                                    <Button className="uploadbutton2" size="sm">
                                        ไม่มีหลักฐานการชำระเงิน และจะอัพโหลดทีหลัง
                                    </Button>

                                </Link>
                            </div>

                        </Col>
                        <Col>

                        </Col>
                        <hr></hr>

                    </Row>


                </center>
            </Row >

        </Container >
    )
}

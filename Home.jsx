import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './home.css'



function Home() {

  return (

    <Container className="conmain mt-5" fluid="md">
   
      <Row className="regisrow">
        <Col>

          <h6 className="jointext"><i class="fa-solid fa-truck-fast"></i>Join with my team and Booking now !
            {/* <Link to="/signup">
              <Button className="regisbutton"> Register </Button></Link> */}
          </h6>

        </Col>
      </Row>

      <Row>
        <Col xl={5} className="picall">

          <Carousel fade variant="dark">
            <Carousel.Item>
              <img
                style={{ width: "200px", height: "300px" }}
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/1291276.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ width: "200px", height: "300px" }}
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/2468394.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ width: "200px", height: "300px" }}
                className="d-block w-100"
                src="https://keljessdeliveryservice.com/wp-content/uploads/2018/03/road-freight.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col xl={6} className="textall">

          <div className="text">
            <div className="row" ml={6}>
              <h1 className="starttitle">Start Truck Rental System</h1>
              <div className="col-12 mb-2 mt-4">

                <p className="secondtitle"
                >ใช้ประโยชน์จากบริการและโซลูชันของเราที่ออกแบบมาเพื่อตอบสนองความต้องการ
                </p>
                <p className="secondtitle2"
                >
                  ในการจัดส่งทั้งหมดของคุณ ลงชื่อสมัครใช้บัญชีการจัดส่งของมาเริ่มกันเลย!</p>
              </div>

            </div>
            {/* <div className="row">
              <div className="col-6  mt-3">
                <Form.Control id="myForm" className="formtruck" type="text" placeholder="ใส่รถบรรทุกที่ต้องการค้นหา" />

              </div>
              <div className="col-6  mt-3 mb-5">
                <Button type="submit" className="searchbutton" variant="success" > ค้นหารถ </Button>


              </div>
            </div> */}


          </div>
        </Col>


      </Row>

    </Container>

  )


}

export default Home
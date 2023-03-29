import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from '@mui/material'
import './topic.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'




function Topics() {

  const reformatDate = (datetime) =>
  datetime.getFullYear() +
  "-" +
  (datetime.getMonth() + 1) +
  "-" +
  datetime.getDate();

  const [contactList, setContactList] = useState([]);

  const loadOrderCustomer = async () => {
    const response = await axios.get('http://ffa6-180-183-7-233.ngrok.io/company');
    setContactList(response.data)
    // setPaginated((response.data).slice(0).take(pageSize).value()) //Pagecount
  }

  useEffect(() => {
    loadOrderCustomer();
    // setPaginated((response.data).slice(0).take(pageSize).value())
  }, []);




  return (
    <Container>
      <Row>
        <div className="col-6 mt-4 mb-4">
          <h5 className="head mt-4">Contact us
            <i class="fa-regular fa-circle-question"></i>
          </h5>
          <h6 className="titlesecondhead"> ต้องการความช่วยเหลือ ติดต่อได้ที่นี่</h6>
        </div>
        <hr></hr>
      </Row>




      {contactList.map((val, key) => {
        return (
          <Row className='rowall'>
            <Col>
              <Card className='cardcontact'>

                <Card.Body>
                  <Card.Title className='addresstitle'>Address  <hr style={{ width: "30px", paddingBottom: "3px", color: "#DC604B" }}></hr></Card.Title>

                  <Card.Text>

                    <Row>
                      <p className='titlecompany'><i class="fa-solid fa-location-dot"></i>
                        {val.company_name}
                        <p className='titlevilname'>{val.village_name}  ถนน {val.road}  ตำบล {val.district}   <br />
                          อำเภอ {val.sub_district} จังหวัด {val.province} {val.country}</p>
                      </p>
                      <hr style={{
                        width: "350px",
                        marginLeft: "20px"
                      }}></hr>

                    </Row>


                    <Row >
                      <p className='titlesubdiary'><i class="fa-solid fa-building"></i>ประเภทธุรกิจ {val.subsidiary} </p>
                      <hr style={{
                        width: "350px",
                        marginLeft: "20px"
                      }}></hr>
                    </Row>




                    <Row >
                      <p className='titlephonecom'><i class="fa-solid fa-phone"></i>{val.telephone_number} </p>
                      <hr style={{
                        width: "350px",
                        marginLeft: "20px"
                      }}></hr>
                    </Row>
                    <Row >
                      <p className='titleyear'><i class="fa-solid fa-calendar-check"></i>{reformatDate(new Date(val.year_of_establishment))} </p>
                      <hr style={{
                        width: "350px",
                        marginLeft: "20px"
                      }}></hr>
                    </Row>
                    <Row >
                      <a href='http://hydradataandconsulting.co.th/' className='titlewebsite'><i class="fa-solid fa-circle-arrow-right"></i>{val.website}</a>
                      <hr style={{
                        width: "350px",
                        marginLeft: "20px"
                      }}></hr>
                    </Row>


                  </Card.Text>
                </Card.Body>

              </Card>
            </Col>

            <Col >

              <Card className='cardcontactus'>

                <Card.Body>
                  <Card.Title className='addresstitle'>Contact us  <hr style={{ width: "30px", paddingBottom: "3px", color: "#DC604B" }}></hr></Card.Title>

                  <Card.Text>
                    <Row>
                      <p className='secondcontacttitle'>เรายินดีช่วยเหลือและตอบทุกคำถาม เสนอโซลูชั่น ราคา ต้องการเดโม ทีมงานของเราพร้อมตอบทุกคำถามของคุณ</p>
                    </Row>
                    {/* <Row>
                      <p className='secondcontacttitle'>Name
                        <Form.Control type="text" placeholder="Siwa kornum" className='formname' />
                      </p>

                    </Row>
                    <Row>
                      <p className='secondcontacttitle'>Email
                        <Form.Control type="text" placeholder="Siwa@ku.th" className='formname' />
                      </p>

                    </Row>
                    <Row>
                      <p className='secondcontacttitle'>Tel
                        <Form.Control type="text" placeholder="0851234567" className='formname' />
                      </p>

                    </Row>
                    <Button variant="primary" className='btnsend'>Send</Button> */}

                  </Card.Text>
                </Card.Body>

              </Card>
            </Col>
          </Row>






        )
      })}



    </Container>



  )

}

export default Topics
import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Popup from 'reactjs-popup';
import './info.css'
import cargos from '../assets/tracking.png';




const About = () => {





  const [searchList, setSearchList] = useState([]);

  const getSearch = () => {
    axios.get('http://cdcf-180-183-3-161.ngrok.io/truckcost').then((response) => {
      setSearchList(response.data);
      setUserData(response.data);
      setUserSearchData(response.data);

    });

  }
  const getSearch2 = () => {

    axios.get('http://cdcf-180-183-3-161.ngrok.io/container').then((response) => {
      setSearchList(response.data);
      setUserData2(response.data);
      setUserSearchData2(response.data);

    });
  }



  const resetInputField = () => {
    setBrand_truck("");
    setTruck_type("");
    setContainer_type("");
    setContainer_name("");
  };

  const [userData, setUserData] = useState([]);
  const [userData2, setUserData2] = useState([]);
  const [userSearchData, setUserSearchData] = useState([]);
  const [userSearchData2, setUserSearchData2] = useState([]);
  const [brand_truck, setBrand_truck] = useState("");
  const [truck_type, setTruck_type] = useState("");
  const [Container_type, setContainer_type] = useState("");
  const [Container_name, setContainer_name] = useState("");

  useEffect(() => {
    getSearch();
    getSearch2();

  }, []);

  const handleSearch = () => {
    debugger;
    const newData = userData
      .filter(
        (x) =>
          x.brand_truck == (brand_truck == "" ? x.brand_truck : brand_truck)
      )
      .filter((y) => y.truck_type == (truck_type == "" ? y.truck_type : truck_type))
    // .filter((z) => z.Container_type == (Container_type == "" ? z.Container_type : Container_type))
    // .filter((w) => w.Container_name == (Container_name == "" ? w.Container_name : Container_name));
    setUserSearchData(newData);

    const newData2 = userData2
      .filter(
        ((z) => z.Container_type == (Container_type == "" ? z.Container_type : Container_type))
      )
      .filter((w) => w.Container_name == (Container_name == "" ? w.Container_name : Container_name));
    setUserSearchData2(newData2);

  };

  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);

  var formatter = new Intl.NumberFormat({
    style: "currency",
    currency: "THB",
  });


  return (


    <div>
      <Container >
        <Row>
          <Col>
            <h2 className='booktrucktitle2' >Search Truck
              <img src={cargos} className="seachtrucklogo" alt="Logo" />
            </h2>
            <h6 className='secondbooktitle2'>ค้นหารถที่ว่างใช้งาน และเริ่มได้เลย</h6>
            <hr></hr>
          </Col>
        </Row>

        <center>

          <Row className='firstselectrow2'>
            <Col >

              <label className="titletruckname mt-4">ยี่ห้อรถหัวลาก</label>
              <InputGroup size="sm" className="formbrandtruck mt-2">
                <Form.Select size="sm" className="form-control mb-2"
                  onChange={(e) => setBrand_truck(e.target.value)}
                >
                  <option hidden>Select you Truck</option>
                  <option>HINO</option>
                  <option>ISUZU</option>
                  <option>SCANIA</option>
                  <option>VOLVO</option>
                </Form.Select>

              </InputGroup>


            </Col>

            <Col >

              <label className="titletypetruck mt-4">ประเภท</label>
              <InputGroup size="sm" className="type mt-2">

                <Form.Select size="sm" className="form-control mb-2"
                  onChange={(e) => setTruck_type(e.target.value)}
                >
                  <option hidden>Select you Type</option>
                  <option>รถเทรลเลอร์พื้นเรียบ</option>
                  <option>พ่วง</option>
                </Form.Select>
              </InputGroup>
              <Button onClick={() => { handleSearch(); setCheck(true) }

              }
                className="searchinfo mb-4" variant="success">Search</Button>

            </Col>
            {/* <label className="titlecontainertypes mt-4">ประเภทคอนเทนเนอร์</label>
            <InputGroup size="sm" className="formcontaintype mt-2">

              <Form.Select size="sm" className="form-control mb-2"
                id="container_type"
                name="container_type"
              >
                <option hidden>Select you Containers Type</option>
                <option>20'feet</option>
                <option>40'feet</option>
                <option>40'HC</option>
              </Form.Select>
            </InputGroup> */}


          </Row>

          {/* <Row className='secondselectrow2'>


            <Col>
              <label className="titlecontainertypes mt-4">ประเภทคอนเทนเนอร์</label>
              <InputGroup size="sm" className="formcontaintype mt-2">

                <Form.Select size="sm" className="form-control mb-2"
                  id="container_type"
                  name="container_type"
                  onChange={(e) => setContainer_type(e.target.value)}
                >
                  <option hidden>Select you Containers Type</option>
                  <option>20'feet</option>
                  <option>40'feet</option>
                  <option>40'HC</option>
                </Form.Select>
              </InputGroup>


              </Col> 


             <Row>
              <label className="titledates pt-4"> วันที่ใช้งาน </label>
            </Row>

            <input
              className='dateselect2 mt-1'
              type="date"
              id="date"
              name="date"

            />






            <Col className="colcontainname">
              <label className="titlecontainername">ชื่อคอนเทนเนอร์</label>
              <InputGroup size="sm" className="formcontainname mb-1 mt-2">

                <Form.Select size="sm" className="form-control mb-2"
                  id="container"
                  name="container"
                  onChange={(e) => setContainer_name(e.target.value)}
                >
                  <option hidden>Select you Containers</option>
                  <option>Dry </option>
                  <option>Reefer </option>
                  <option>Open top </option>
                  <option>Flat rack </option>
                </Form.Select>
              </InputGroup>
            </Col>
            <Col className='colbtn'>
              <Button className="resetsearch mb-4" variant="danger" type='reset' onClick={resetInputField}> Reset </Button>
              <Button onClick={() => { handleSearch(); setCheck(true) }

              }
                className="searchinfo mb-4" variant="success">Search</Button>
            </Col>

          </Row> */}
        </center>
        <body style={{ paddingBottom: "100px" }}>
          <div className='info'>
            <table className="table mt-5" >
              <thead>
                <tr>
                  <th >Brands Truck</th>
                  <th>Type Truck</th>
                  <th>Image Truck</th>
                  <th>Price</th>
                  <th>Weight</th>

                </tr>
              </thead>
              <tbody >
                {
                  userSearchData && userSearchData.length > 0 && check == true ?
                    userSearchData.map(item =>
                      <tr >
                        <td >{item.brand_truck}</td>
                        <td>{item.truck_type}</td>
                        <td>
                          <Popup trigger={<a href="#">  <img
                            src={
                              "http://cdcf-180-183-3-161.ngrok.io/imageupload/" +
                              item.id
                            }
                            alt="img"
                            style={{ width: "100px", height: "100px" }}
                          ></img> </a>} modal>
                            <img
                              src={
                                "http://cdcf-180-183-3-161.ngrok.io/imageupload/" +
                                item.id
                              }
                              alt="img"
                              style={{ width: "500px", height: "500px" }}
                            />
                          </Popup>
                        </td>
                        <td>
                          {formatter.format(item.selling_price)} THB
                        </td>
                        <td>
                          {item.total_weight}
                        </td>
                      </tr>
                    )
                    : ''
                }
              </tbody>
            </table>
          </div>
        </body>
      </Container>
    </div >
  )

}

export default About
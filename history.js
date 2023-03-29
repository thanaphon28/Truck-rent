import React, { useState, useEffect } from 'react'
import { FormControl, Table } from "react-bootstrap";
import { Container } from '@mui/material'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './history.css'
import axios from 'axios'
import Axios from 'axios'

export default function History() {

    const [historyList, setHistoryList] = useState([]);
    const [history, setHistory] = useState([]);

    const getHistorys = () => {

        const token = localStorage.getItem("token");
        axios
            .create({
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .get('http://1c78-183-89-113-16.ngrok.io/ordercustomer').then((response) => {
                setHistoryList(response.data);
                setUserData(response.data);
                setUserSearchData(response.data);
                console.log(response.data);

            });
    }

    // useEffect(() => {
    //     getHistorys();

    //     // setPaginated((response.data).slice(0).take(pageSize).value())
    // }, []);

    // const [data, setData] = useState([]);
    // const [input, setInput] = useState('');
    // const [output, setOutput] = useState([]);

    // useEffect(() => {
    //     async function getData() {
    //         const res = await Axios.get("http://9820-183-89-113-16.ngrok.io/ordercustomer")
    //         setData(res.data)
    //     }

    //     getData();
    // }, []);

    // useEffect(() => {
    //     setOutput([])
    //     data.filter(val => {

    //         if (val.id.toLowerCase().includes(input.toLocaleLowerCase())) {
    //             setOutput(output => [...output, val])
    //         }


    //     })
    // }, [input]);






    // const [value, setValue] = useState("");
    // const [dataSource, setDataSource] = useState(historyList);
    // const [tableFilter, setTableFilter] = useState([]);

    // const filterData = (e) => {
    //     if (e.target.value !== "") {
    //         setValue(e.target.value);
    //         const filterTable = historyList.filter(o => Object.keys(o).some(k =>
    //             String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
    //         ));
    //         setTableFilter([...filterTable])
    //     } else {
    //         setValue(e.target.value);
    //         setDataSource([...dataSource])
    //     }


    // }

    var formatter = new Intl.NumberFormat({
        style: "currency",
        currency: "THB",
    });

    const [userData, setUserData] = useState([]);
    const [userSearchData, setUserSearchData] = useState([]);
    const [customerName, setName] = useState("");
    const [id, setId] = useState("");
    const [container, setContainer] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        getHistorys();
        console.log(getHistorys())
        console.log(historyList)


    }, []);

    const handleSearch = () => {
        debugger;
        const newData = userData.filter(
            (x) =>
                x.customerName == (customerName == "" ? x.customerName : customerName)
        ).filter((y) => y.id == (id == "" ? y.id : id)).filter((z) => z.container == (container == "" ? z.container : container)).filter((w) => w.price == (price == "" ? w.price : price));
        setUserSearchData(newData);
        console.log(newData)
    };

    const [check, setCheck] = useState(false);


    return (

        <div>

            <Container >
                <Row>
                    <Col>
                        <h2 className='histitle' >Reservation History <i class="fa-solid fa-clock-rotate-left"></i></h2>
                        <h6 className='secondhistitle'>ประวัติการจองทั้งหมดของคุณ</h6>
                        <hr style={{
                            width: "40%"
                        }}></hr>
                    </Col>
                </Row>


                <Row className='firstselectrow2'>
                    <Col>

                        <InputGroup size="sm" className="orderid mt-2">
                            <label className="titleorder mb-2">เลขออเดอร์</label>

                            <Form.Control size="sm" type="text" placeholder="Order ID"
                                className='orderbox mb-2 mt-5'
                                id="id"
                                name="id"
                                onChange={(e) => setId(e.target.value)}

                            // value={value}
                            // onChange={filterData}
                            />
                        </InputGroup>


                    </Col>


                    <Col xs={6} className="namecol mb-2">

                        <InputGroup size="sm" className="nameinput mt-2">
                            <label className="namecustomer"> ชื่อผู้จอง </label>
                            <Form.Control size="sm" type="text" placeholder="Customer name"
                                className='mb-2'
                                id="customerName"
                                name="customerName"
                                onChange={(e) => setName(e.target.value)}



                            //    onChange={(event) => {
                            //        setHistoryList(event.target.value)
                            //    }} 

                            />
                        </InputGroup>
                    </Col>


                    <Col xs={4} className="useday mb-2 mt-4">


                        <InputGroup size="sm">
                            <label className="titlecontainernames mb-1 mt-3">ชื่อคอนเทนเนอร์</label>
                            <Form.Select size="sm" className="containername form-control mb-2 mt-3"
                                id="container"
                                name="container"
                                onChange={(e) => setContainer(e.target.value)}
                            >
                                <option hidden>Select you Containers</option>
                                <option>Dry </option>
                                <option>Reefer </option>
                                <option>Open top </option>
                                <option>Flat rack </option>
                            </Form.Select>


                        </InputGroup>
                    </Col>
                    <Col xs={5} className="useday mb-2 mt-4">



                        <InputGroup size="sm" className="priceinput mt-2">
                            <label className="titleprice"> ราคา </label>
                            <Form.Control size="sm" type="text" placeholder="Price"
                                className='mb-2'
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </InputGroup>
                    </Col>

                    <Row>
                        <Col xs={12}>
                            <Button className='hisresetbutton'>Reset</Button>
                            <Button onClick={() => { handleSearch(); setCheck(true) }} className='hissearchbutton'>Search</Button>

                        </Col>
                    </Row>


                </Row>


                <Row className='secondselectrow'>
                    <Col>

                    </Col>
                    {/* <body>

                        {value.length > 0 ? tableFilter.map((item, index) => {

                            return (

                                <Table className="mt-5">
                                    <thead>
                                        <tr>
                                            <th>List</th>
                                            <th>Name</th>
                                            <th>Truck Brands</th>
                                            <th>Image</th>
                                            <th>Type</th>
                                            <th>Container</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><p >{item.id} </p></td>
                                            <td>{item.customerName}</td>
                                            <td>
                                                <img
                                                    alt="isuzu"
                                                    src="https://i.pinimg.com/736x/24/61/7d/24617d792406f00c2bc026175c021404.jpg"
                                                    className="logoisuzu"
                                                >
                                                </img>
                                            </td>
                                            <td></td>
                                            <td >{item.container_type}
                                            </td>
                                        </tr>

                                    </tbody>

                                </Table>
                            )
                        })
                            :
                            historyList.map((item, index) => {
                                return (

                                    <Table className="mt-5">
                                        <thead>
                                            <tr>
                                                <th>List</th>
                                                <th>Name</th>
                                                <th>Truck Brands</th>
                                                <th>Image</th>
                                                <th>Type</th>
                                                <th>Container</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><p >{item.id} </p></td>
                                                <td>{item.customerName}</td>
                                                <td>
                                                    <img
                                                        alt="isuzu"
                                                        src="https://i.pinimg.com/736x/24/61/7d/24617d792406f00c2bc026175c021404.jpg"
                                                        className="logoisuzu"
                                                    >
                                                    </img>
                                                </td>
                                                <td></td>
                                                <td >{item.container_type}
                                                </td>
                                            </tr>

                                        </tbody>

                                    </Table>
                                )
                            })
                        }

                    </body> */}



                    {/* <table className="table1" >
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Quantity</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Price</th>
                                <th>Date </th>
                                <th>Time </th>
                                <th>Tel </th>
                                <th>location</th>
                            </tr>
                        </thead>
                        <tbody >
                            {value.length > 0 ? tableFilter.map((item, index) => {
                                return (
                                    <tr key={item.OrderId}>
                                        <td>{item.OrderId}</td>
                                        <td>{item.customerName}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.payment}</td>
                                        <td className={`${item.status}`}>{item.status}</td>
                                        <td>{item.price}</td>
                                        <td>{item.date}</td>
                                        <td>{item.time} น.</td>
                                        <td>{item.tel}</td>
                                        <td>{item.village_name}</td>
                                        <td>

                                        </td>

                                        <td>

                                        </td>
                                        <td>

                                        </td>

                                    </tr>
                                )
                            })
                                :
                                historyList.map((item, index) => {
                                    return (
                                        <tr key={item.OrderId}>
                                            <td>{item.OrderId}</td>
                                            <td>{item.customerName}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.payment}</td>
                                            <td className={`${item.status}`}>{item.status}</td>
                                            <td>{item.price}</td>
                                            <td>{item.date}</td>
                                            <td>{item.time} น.</td>
                                            <td>{item.tel}</td>
                                            <td>{item.village_name}</td>
                                            <td>



                                            </td>

                                            <td>


                                            </td>
                                            <td>



                                            </td>

                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table > */}



                    <body>


                        <Table className="tablehistory mt-5">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Name Customer</th>
                                    <th>Truck Brands</th>
                                    <th>Container</th>
                                    <th>Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userSearchData && userSearchData.length > 0 && check == true ?
                                        userSearchData.map(item =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.customerName}</td>
                                                <td>{item.names}</td>
                                                <td>{item.container}</td>
                                                <td>{formatter.format(item.price)}</td>
                                            </tr>

                                        )
                                        : ''


                                }

                            </tbody>

                        </Table>






                    </body>





                </Row>
            </Container>

        </div>
    )

}


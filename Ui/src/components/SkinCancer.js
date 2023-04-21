import React, { useEffect, useState } from 'react';
import { useNavigate, useHistory } from 'react-router-dom';
import './style.css';
import { Input, Select, Form, Card, Row, Col, Button, Dropdown } from 'antd';
import FormItem from 'antd/es/form/FormItem';

const SkinCancer = () => {

    // const items= [
    //     {
    //       label:'Female',
    //       key: '0',
    //     },
    //     {
    //       label:'Male',
    //       key: '1',
    //     },
    //     {
    //       label: 'I wish not to answer',
    //       key: '3',
    //     },
    //   ];

    const [ filename, setFilename ] = useState("None")

    // const history = useHistory();
    const navigate = useNavigate();

    const upload = (file) => {
        console.log(file)
        fetch('http://6ffe-2601-c2-4280-2150-cc13-97df-1c1e-8eab.ngrok.io', { // Your POST endpoint
          method: 'POST',
          headers: {
            'content-type': file.type,
            'content-length': `${file.size}`
          },
          body: file
        }).then(response =>  response.json())
        .then(resData => { 
            console.log(resData)
            // setOutput(resData.predictions)
            // fetchBirdDetails(resData.predictions)
            // setReceivedResponse(true)
        })
        .catch(
          error => console.log(error)
        );
      };

    const handleFileUpload = (event) => {
        let file = event.target.files[0];
        console.log(file)
        setFilename(file.name);
        let formData = new FormData();
        formData.append("file", file);
        upload(formData);
        // navigate('/out');
    }

    return (
        <div className='container'>
            <div className='leftSide'>
                <Row style={{ padding: "20px 180px", alignItems: "center"}}>
                    <Col style={{ marginTop: "22px"}}>
                        <h2>Enter patient's details</h2>
                        <Form>
                            <Form.Item label="Patient Id">
                                <Input placeholder="Enter patient's Id" />
                            </Form.Item>
                            <Form.Item label="Name">
                                <Input placeholder="Enter patient's full name" />
                            </Form.Item>
                            <Form.Item label="Age">
                                <Input placeholder="Enter patient's age" />
                            </Form.Item>
                            <Form.Item label="Gender">
                                <Select name="category" placeholder="select"
                                    options={[
                                        {
                                          value: 'female',
                                          label: 'Female',
                                        },
                                        {
                                          value: 'male',
                                          label: 'Male',
                                        },
                                      ]}>
                                </Select>
                            </Form.Item>
                            {/* <FormItem>
                                <div class="file-input">
                                    <input type="file" id="file" class="file" name="file" onChange={handleFileUpload}/>
                                    <label for="file">Select file</label>
                                </div>
                                <div style={{ marginTop: "10%" }}>File chosen: {filename}</div>
                            </FormItem> */}
                        </Form>
                    </Col>
                </Row>
            </div>
            <div className='rightSide'>
                {/* <Row> */}
                    {/* <Col> */}
                        <Card title="Upload an image file" bordered={true} style={{ height: "50%", width: "80%", color: "#040341"}}>
                            <div class="file-input">
                                <input className="buttonUpload" type="file" id="file" class="file" name="file" onChange={handleFileUpload}/>
                                {/* <label for="file">Select file</label> */}
                            </div>
                            <div style={{ marginTop: "10%" }}>File chosen: {filename}</div>
                        </Card>
                    {/* </Col> */}
                {/* </Row> */}
            </div>
        </div>
    )
}

export default SkinCancer
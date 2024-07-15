import React, { useEffect, useState } from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const DosagesComponent = () => {

    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const response = await fetch('./medicine_info.json');
                const data = await response.json();
                setMedicines(data);
            } catch (error) {
                console.error('Error fetching medicines data:', error);
            }
        };

        fetchMedicines();
    }, []);

    return (
        <Container className="my-5">
            <h2 className="text-center">Dosage Regimen</h2>
            <Row>
                {medicines.map((medicine, index) => (
                    <Col md={3} key={index} className="mb-4">
                        <Card className="h-100">
                            <img src={medicine.picture} alt="Picture of the medicine" className="card-image-fit"/>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title><b>{medicine.name}</b></Card.Title>
                                <Card.Text>
                                    <strong>Composition:</strong> {medicine.composition}<br />
                                    <strong>Indication:</strong> {medicine.indication}<br />
                                    <strong>Regimen:</strong> {medicine.regimen}<br />
                                    <strong>Additional Info:</strong> {medicine.additionalInfo}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default DosagesComponent;

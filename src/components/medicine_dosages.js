import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import stugreonImage from "../assets/medicines/stugeron.jpg";
import voltarenImage from "../assets/medicines/voltaren.jpg";
import lomotilImage from "../assets/medicines/lomotil.jpg";
import charcoalImage from "../assets/medicines/charcoal.jpeg";
import clarityneImage from "../assets/medicines/clarityne.jpg";
import motiliumImage from "../assets/medicines/motilium.jpg";
import panadolImage from "../assets/medicines/panadol.jpg";
import gelusilImage from "../assets/medicines/gelusil.jpg";

const medicines = [
    {
        name: 'STUGERON 25MG',
        composition: 'Cinnarizine 25mg Tablet',
        indication: 'Motion sickness or Vertigo',
        regimen: '1 tablet (25mg) 2 hours before travelling and 0.5 tablets (12.5mg) every 8 hours during the journey.',
        additionalInfo: 'May cause drowsiness. Do not drive or operate heavy machinery.',
        picture: stugreonImage
    },
    {
        name: 'VOLTAREN 50MG',
        composition: 'Diclofenac Sodium 50mg Tablet',
        indication: 'Pain and Inflammation',
        regimen: '1 tablet (50mg) every 8 hours as needed.',
        additionalInfo: 'Take with food to avoid stomach upset.',
        picture: voltarenImage
    },
    {
        name: 'LOMOTIL 25/0.025MG',
        composition: 'Diphenoxylate 25mg / Atropine 0.025mg Tablet',
        indication: 'Diarrhea',
        regimen: '1-2 tablets (25/0.025mg) every 6 hours as needed.',
        additionalInfo: 'May cause drowsiness. Do not drive or operate heavy machinery.',
        picture: lomotilImage
    },
    {
        name: 'CHARCOAL 200MG',
        composition: 'Activated Charcoal 200mg Tablet',
        indication: 'Gas and Bloating',
        regimen: '1-2 tablets (200mg) after meals as needed.',
        additionalInfo: 'Drink plenty of water when taking charcoal.',
        picture: charcoalImage
    },
    {
        name: 'CLARITYNE 10MG',
        composition: 'Loratadine 10mg Tablet',
        indication: 'Allergy Relief',
        regimen: '1 tablet (10mg) once daily.',
        additionalInfo: 'Non-drowsy formula.',
        picture: clarityneImage
    },
    {
        name: 'MOTILIUM 10MG',
        composition: 'Domperidone 10mg Tablet',
        indication: 'Nausea and Vomiting',
        regimen: '1 tablet (10mg) 3 times daily before meals.',
        additionalInfo: 'Consult a doctor if symptoms persist.',
        picture: motiliumImage
    },
    {
        name: 'PANADOL 500MG',
        composition: 'Paracetamol 500mg Tablet',
        indication: 'Pain and Fever',
        regimen: '1-2 tablets (500mg) every 4-6 hours as needed.',
        additionalInfo: 'Do not exceed 8 tablets in 24 hours.',
        picture: panadolImage
    },
    {
        name: 'GELUSIL CHEWABLE',
        composition: 'Aluminum Hydroxide / Magnesium Hydroxide Chewable Tablet',
        indication: 'Heartburn and Indigestion',
        regimen: 'Chew 1-2 tablets as needed.',
        additionalInfo: 'Follow with a glass of water.',
        picture: gelusilImage
    }
];

const DosagesComponent = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center">Dosage Regimen</h2>
            <Row>
                {medicines.map((medicine, index) => (
                    <Col md={3} key={index} className="mb-4">
                        <Card className="h-100">
                            <img src={medicine.picture} className="card-image-fit"/>
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

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills, faSuitcase, faQrcode, faCloudRain } from '@fortawesome/free-solid-svg-icons';

const EssentialFeatures = () => {
  return (

    

    <div className='d-flex justify-content-center'>
      <div className="container mt-3 text-start">
      
        <div className="row d-flex justify-content-center mb-2">
            <div className="col-auto text-start">
                <FontAwesomeIcon icon={faPills} size="2x" />
            </div>
            <div className="col-auto d-flex align-items-center">
            <span><strong style={{ color: '#3b7457' }}>Light & Portable</strong> Pill Organizer</span>
            </div>
        </div>

        <div className="row d-flex justify-content-center mb-2">
            <div className="col-auto text-start">
                <FontAwesomeIcon icon={faSuitcase} size="2x" />
            </div>
            <div className="col-auto d-flex align-items-center">
              <span><strong style={{ color: '#3b7457' }}>Travel-Tailored</strong> Medicine Selection</span>
            </div>
        </div>



      <div className="row d-flex justify-content-center mb-2">
          <div className="col-auto text-start">
              <FontAwesomeIcon icon={faQrcode} size="2x" />
          </div>
          <div className="col-auto d-flex align-items-center">
              <span><strong style={{ color: '#3b7457' }}>Dosage</strong> Instructions with <strong style={{ color: '#3b7457' }}>QR Code</strong></span>
          </div>
      </div>

      <div className="row d-flex justify-content-center mb-2">
          <div className="col-auto text-start">
              <FontAwesomeIcon icon={faCloudRain} size="2x" />
          </div>
          <div className="col-auto d-flex align-items-center">
          <span><strong style={{ color: '#3b7457' }}>Durable</strong> & Water-Resistant Case</span>
          </div>
        </div>
      </div>

    </div>

    

  );
};

export default EssentialFeatures;

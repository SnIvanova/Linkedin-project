
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <p>
                <a href='#!' className='text-reset'>
                  Accessibility
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Career
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Advertising options
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Mobile
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <p>
                <a href='#!' className='text-reset'>
                  Talent Solutions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Marketing Solutions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Advertising
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Small Business
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <div>
                <MDBIcon fas icon="question-circle" className="me-2"/>
                <h6>Requests? </h6>
              </div>
              {/*<h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon fas icon="question-circle">
              Requests?
  </h6>*/}
              <div>
                <MDBIcon fas icon="cog" className="me-3"/>
                <h6>Manage your account and your privacy</h6>
              </div>
              <div>
                <MDBIcon fas icon="shield-alt" className="me-3"/>
                <h6>Transparency on recommended content</h6>
              </div>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        LinkedIn Corporation &#169; 2024
      </div>
    </MDBFooter>
  );
  }
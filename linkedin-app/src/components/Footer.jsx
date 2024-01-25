
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
        

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
             
              <p>
                <a href='#!' className='text-reset ' >
                Informazioni
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Linea Guida della Community
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Privacy e condizioni {/* da fare menu a tendina per tutti mettere route a un altra pagina*/}
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Sales Solution
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Centro Sicurezza
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              
              <p>
                <a href='#!' className='text-reset'>
                  Accessibilità
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Carriera
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Opzioni per gli annunci pubblicitari
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
              Soluzioni di Marketing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Pubblicità
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Piccole Imprese
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              
              <p>
              <MDBIcon fas icon="question-circle" />
              Domande?
              
              </p>
              <span>Visita il nostro centro Assistenza!</span>
              <p>
              <MDBIcon fas icon="cog" />
                Gestisci il tuo Account e le tua Privacy
                
              </p>
              <span>Vai alle Impostazioni</span>
              <p>
              <MDBIcon fas icon="shield-alt" />
              Trasparenza sui contenuti consigliati
           
              </p>
              <span>Scopri di più sui contenuti consigliati</span>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );}

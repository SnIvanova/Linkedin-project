import { Col, Row } from 'react-bootstrap'
import img from '../../assets/JavaScript-logo.png'
import img2 from '../../assets/dev.jpg'
const Interessi = () => {
    return (
        <Col className="rounded border mt-3 px-3 py-4">
          <Row className="h-100 justify-content-between flex-column">
            <Col className="text-nowrap">
              <h5 className="fw-bold mb-0">Interessi</h5>
              <div className="text-black-50 text-primary my-3 pb-3 border-bottom">
              </div>
              <Row>
                {/* Interest 1: JavaScript */}
                <Col xs={3}>
                  <Row>
                    <Col>
                      <img
                        src={img}
                        alt=""
                        style={{
                          height: '50px',
                          width: '50px',
                          borderRadius: '50%',
                        }}
                      />
                    </Col>
                    <Col>
                      <div className="fw-bold">JavaScript</div>
                      <div>506.643 followers</div>
                    </Col>
                  </Row>
                </Col>
      
                {/* Interest 2: Developers */}
                <Col xs={3}>
                  <Row>
                    <Col>
                      <img
                        src={img2}
                        alt=""
                        style={{
                          height: '50px',
                          width: '50px',
                          borderRadius: '50%',
                        }}
                      />
                    </Col>
                    <Col>
                      <div className="fw-bold">Developers</div>
                      <div>1.411.935 followers</div>
                    </Col>
                  </Row>
                </Col>
      
              
                
              </Row>
            </Col>
          </Row>
        </Col>
      );
      
}

export default Interessi
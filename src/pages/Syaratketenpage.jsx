import { Container, Row, Col } from 'react-bootstrap'
import Faqcomponents from '../components/Faqcomponents'

const Syaratketenpage = () => {
  return (
    <div className='syarat-ketentuan-page'>
      <div className='syarat-ketentuan min-vh-100'>
      <Container>
        <Row>
          <Col>
            <h1 className='fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s'>Syarat & Ketentuan</h1>
            <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col>
            <p>lore, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
        <Row className='py-3'>
          <Col>
            <h4 className='fw-bold'>1. lorem</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Row>
        <Row className='py-3'>
          <Col>
            <h4 className='fw-bold'>2. Lorem</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Row>
        <Row className='py-3'>
          <Col>
            <h4 className='fw-bold'>3. Lorem</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Row>
      </Container>
      </div>
      <Faqcomponents />
    </div>
  )
}

export default Syaratketenpage

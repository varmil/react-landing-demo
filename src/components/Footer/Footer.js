import React, {Component} from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

const COLOR_ORANGE = '#e2791a'
const footerStyle = { backgroundColor: 'black' }
const footerContainerStyle = { maxWidth: 1100 }
const accentBorderStyle = {
  borderBottom: `${COLOR_ORANGE} 4px solid`,
  width: '40%',
}
const smallIconHeight = { height: 50 }

class Footer extends Component {
  render () {
    return (
      <footer className='app-footer' style={footerStyle}>
        <Container className='mx-auto' style={footerContainerStyle}>
          <Row className='py-5 text-white'>
            <Col className='ml-sm-auto font-weight-bold' sm='3' style={{}}>
              <span>Dayone</span>
              <div className='accent-border mt-1 mb-4' style={accentBorderStyle} />
              <p>Personalize</p>
              <p>Product</p>
              <p>About Us</p>
              <p>Sign In</p>
            </Col>
            <Col className='font-weight-bold' sm={{ offset: 1, size: 3 }}>
              <span>Contact Us</span>
              <div className='accent-border mt-1 mb-4' style={accentBorderStyle} />
              <p>Help</p>
              <p>contact@dayone.tokyo</p>
            </Col>
            <Col className='font-weight-bold' sm={{ offset: 1, size: 3 }}>
              <span>Follow Us</span>
              <div className='accent-border mt-1 mb-4' style={accentBorderStyle} />
              <p>@dayonetokyo</p>
              <div className='d-flex flex-row'>
                <img style={smallIconHeight} className='mr-1' src={'img/social/facebook_circle.png'} />
                <img style={smallIconHeight} className='mx-1' src={'img/social/twitter_circle.png'} />
                <img style={smallIconHeight} className='mx-1' src={'img/social/instagram_circle.png'} />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer

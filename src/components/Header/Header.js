import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'
import COLOR from '../../consts/color'

class Header extends Component {
  sidebarToggle (e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-hidden')
  }

  sidebarMinimize (e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-minimized')
  }

  mobileSidebarToggle (e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-mobile-show')
  }

  render () {
    return (
      <header className='app-header sticky-top pb-3' style={{ backgroundColor: 'white' }}>
        <h1 className='text-center mt-1' style={{ marginBottom: '-1rem' }} >Dayone</h1>

        <Container fluid>
          <Row className='text-center mx-2'>
            <Col className='py-3 font-weight-bold text-white' xs='2' style={{ backgroundColor: COLOR.YELLOW }}>
              <Link to={`/`}>Personalize</Link>
            </Col>
            <Col className='py-3 font-weight-bold' xs='2'>
              <Link to={`/products`}>Products</Link>
            </Col>
            <Col className='py-3 font-weight-bold' xs='4'></Col>
            <Col className='py-3 font-weight-bold' xs='2'>Contact</Col>
            <Col className='py-3 font-weight-bold' xs='2'>Sign In</Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Header

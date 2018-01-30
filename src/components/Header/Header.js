import React, {Component} from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

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
      <header className='app-header'>
        <h1 className='text-center mt-1' style={{ marginBottom: '-1rem' }} >Dayone</h1>

        <Container>
          <Row className='text-center mx-2'>
            <Col className='py-4 font-weight-bold' xs='2' style={{ backgroundColor: '#ffb404', color: 'white' }}>Personalize</Col>
            <Col className='py-4 font-weight-bold' xs='2'>Product</Col>
            <Col className='py-4 font-weight-bold' xs='4'></Col>
            <Col className='py-4 font-weight-bold' xs='2'>Contact</Col>
            <Col className='py-4 font-weight-bold' xs='2'>Sign In</Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Header

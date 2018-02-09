import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
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
          <Row className='text-center font-weight-bold mx-2'>
            <Col className='px-0' xs='2'>
              <NavLink exact className='py-3 d-block' activeClassName='active' to={`/`}>Personalize</NavLink>
            </Col>
            <Col className='px-0' xs='2'>
              <NavLink className='py-3 d-block' activeClassName='active' to={`/products`}>Products</NavLink>
            </Col>
            <Col className='px-0' xs='4'></Col>
            <Col className='px-0' xs='2'>
              <NavLink className='py-3 d-block' activeClassName='active' to={`/contact`}>Contact</NavLink>
            </Col>
            <Col className='px-0' xs='2'>
              <NavLink className='py-3 d-block' activeClassName='active' to={`/signin`}>Sign In</NavLink>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Header

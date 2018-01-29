import React, {Component} from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

class Personalize extends Component {
  render () {
    return (
      <div className='animated fadeIn'>
        <section>
          <Row className=''>
            <Col className='py-4' sm='6'>aaa</Col>
            <Col className='py-4' sm='6'>bbb</Col>
          </Row>
        </section>
      </div>
    )
  }
}

export default Personalize

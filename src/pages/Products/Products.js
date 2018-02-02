import React, {Component} from 'react'
import {
  Container,
  Button,
  Row,
  Col,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import FaThL from 'react-icons/lib/fa/th-large'
import FaBullseye from 'react-icons/lib/fa/bullseye'
import FaLightbulb from 'react-icons/lib/fa/lightbulb-o'
import FaUserMd from 'react-icons/lib/fa/user-md'

import COLOR from '../../consts/color'

const containerStyle = { maxWidth: 1400 }
const filterItemColStyle = { minWidth: 110 }
const filterItemStyle = { minWidth: 105 }
const productsColStyle = { }

/**
  Functional Components
*/
function FilterItem (props) {
  return (
    <div className='text-center'>
      <Link className='d-inline-block' to={`/`} style={{ color: COLOR.ORANGE, ...filterItemStyle }}>
        <span className=''>
          { props.icon ? (
            React.createElement(props.icon, { size: 50 })
          ) : (
            <img src={props.imgSrc} alt='Ic topic brain' />
          ) }
        </span>
        <div className='font-weight-bold' style={{ fontSize: 11, color: 'black' }}>{props.text}</div>
      </Link>
    </div>
  )
}

class Products extends Component {
  render () {
    return (
      <div className='animated fadeIn'>
        <Container className='mx-auto' style={containerStyle}>
          <Row className='py-5'>
            <Col className='px-0 ml-sm-auto ' sm={{ offset: 0, size: 1 }} style={filterItemColStyle}>
              <FilterItem icon={FaThL} text='ALL' />
            </Col>
            <Col className='px-0' sm={{ offset: 1, size: 1 }} style={filterItemColStyle}>
              <FilterItem icon={FaBullseye} text='集中力' />
            </Col>
            <Col className='px-0' sm={{ offset: 0, size: 1 }} style={filterItemColStyle}>
              <FilterItem icon={FaLightbulb} text={<span>やる気 / <br /> モチベーション</span>} />
            </Col>
            <Col className='px-0' sm={{ offset: 0, size: 1 }} style={filterItemColStyle}>
              <FilterItem icon={FaLightbulb} text={<span>やる気 / <br /> モチベーション</span>} />
            </Col>
            <Col className='px-0' sm={{ offset: 0, size: 1 }} style={filterItemColStyle}>
              <FilterItem icon={FaLightbulb} text={<span>やる気 / <br /> モチベーション</span>} />
            </Col>
            <Col className='px-0' sm={{ offset: 0, size: 1 }} style={filterItemColStyle}>
              <FilterItem icon={FaLightbulb} text={<span>やる気 / <br /> モチベーション</span>} />
            </Col>
            <Col className='px-0 mr-sm-auto ' sm={{ offset: 0, size: 1 }} style={filterItemColStyle}>
              <FilterItem icon={FaUserMd} text='免疫' />
            </Col>
          </Row>

          <section>
            <Row className='py-5'>
              <Col className='ml-sm-auto' sm={{ offset: 0, size: 6 }} style={productsColStyle}>
                <div style={{ height: 600, backgroundColor: 'pink' }}></div>
              </Col>
              <Col className='' sm={{ offset: 0, size: 3 }} style={productsColStyle}>
                <div style={{ height: 600, backgroundColor: 'pink' }}></div>
              </Col>
              <Col className='mr-sm-auto' sm={{ offset: 0, size: 3 }} style={productsColStyle}>
                <div style={{ height: 600, backgroundColor: 'pink' }}></div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    )
  }
}

export default Products

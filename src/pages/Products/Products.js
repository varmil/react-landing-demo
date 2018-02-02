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
const filterItemColStyle = { minWidth: 115 }
const filterItemStyle = { minWidth: 115 }
const productsColStyle = { }
const productPanelTitleStyle = {
  left: 0,
  margin: '1.625em 20px',
  position: 'absolute',
  right: 0,
  top: 0,
}

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
        <div className='font-weight-bold' style={{ fontSize: 12, color: 'black' }}>{props.text}</div>
      </Link>
    </div>
  )
}

function ProductPanelSummary () {
  return (
    <Col className='' sm={{ offset: 0, size: 6 }} style={productsColStyle}>
      <div style={{
        height: '100%',
        backgroundImage: 'url(//images.contentful.com/t9x0u6p47op0/2BxevJTKlY8eieW84SSYOG/687857aff9a9aa18ae1fb92b0bc15bb4/img_product_category_vitamin.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: 42
      }}>
        <h2 className='font-weight-bold mb-4'>Vitamins</h2>
        <p className=''>
          Vitamins are compounds of essential nutrients that our bodies need for healthy functioning. They are found in the foods we eat and, in the case of vitamin D, the sun we absorb.<br /><br />
          Most vitamin supplements on the market are in 'isolate' form, where the capsule contains only the isolated compound. We ferment ours to convert them into a complex form, where they resemble the vitamins you get from real food and are easier to digest.
        </p>
      </div>
    </Col>
  )
}

function ProductPanelItem (props) {
  return (
    <Col className='' sm={{ offset: 0, size: 3 }} style={productsColStyle}>
      <div style={{ position: 'relative' }}>

        <a className='' href='/products/vitamin-b-12_1' style={{ color: 'black', textDecoration: 'none' }}>
          <img className='w-100' src={props.imgSrc} />
          <div className='font-weight-bold' style={productPanelTitleStyle}>{props.title}</div>
          <div className='products-type__product-panel-middle'>
            <div className='products-type__product-panel-icons'>
              <img src='//assets.contentful.com/t9x0u6p47op0/371OPjK1x6mMuAkykg0mqO/b341ac42bf5f13bfb113917739972d34/ic_topic_energy.svg?w=80&amp;h=80' alt='Ic topic energy' />
            </div>
            <p className='products-type__product-panel-description'>
              • Easy to digest<br />
              • Fermented for absorption<br />
              • Formulated for vegans<br />
              • Essential vitamin for energy production
            </p>
            <div className='products-type__product-panel-cta'>Learn more</div>
          </div>
          <div className='products-type__product-panel-bottom'>
            <div className='products-type__product-panel-price'>
              <h6 className='no-margin'><strong>1 capsule</strong> per day</h6>
              <h6><strong>$5</strong>/mo</h6>
            </div>
            <Button className='btn-danger btn-add-cart btn-lg'>Add to pack</Button>
          </div>
        </a>

      </div>
    </Col>
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
            <Row className='row-eq-height py-5'>
              <ProductPanelSummary />
              <ProductPanelItem title='Vitamin B12' imgSrc='//images.contentful.com/t9x0u6p47op0/6AQipVvAtOcEqaiqkekYoU/0a0b21b39692f770fbe77b8f04f95f3e/img_vitaminb12_expert.jpg?w=340&amp;h=190' />
              <ProductPanelItem title='B-Complex' imgSrc='//images.contentful.com/t9x0u6p47op0/29RWgFnrvKCGoSUsUMk2OC/43efcf5ec370f7a98f5c76dc536f6571/img_bcomplex3_expert.jpg?w=340&h=190' />
            </Row>

            <hr className='my-0 py-0' />

            <Row className='row-eq-height py-5'>
              <ProductPanelSummary />
              <ProductPanelItem title='Vitamin B12' imgSrc='//images.contentful.com/t9x0u6p47op0/6AQipVvAtOcEqaiqkekYoU/0a0b21b39692f770fbe77b8f04f95f3e/img_vitaminb12_expert.jpg?w=340&amp;h=190' />
              <ProductPanelItem title='B-Complex' imgSrc='//images.contentful.com/t9x0u6p47op0/29RWgFnrvKCGoSUsUMk2OC/43efcf5ec370f7a98f5c76dc536f6571/img_bcomplex3_expert.jpg?w=340&h=190' />
            </Row>
          </section>
        </Container>
      </div>
    )
  }
}

export default Products

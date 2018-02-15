import React, {Component} from 'react'
import axios from 'axios'
import _ from 'lodash'
import Spinner from 'react-spinkit'
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
import * as API from '../../utils/api'

const SECOND_STICKY_HEADER_POS_TOP = 100
const containerStyle = { maxWidth: 1400 }
const filterItemColStyle = { minWidth: 115 }
const filterItemStyle = { minWidth: 115 }
const productsColStyle = { }
const productPanelTitleStyle = {
  margin: '1.625em 20px',
  position: 'absolute',
  top: 0,
  left: 14,
  right: 0,
}

const initialState = {
  categories: [],
  products: [],
  filters: [],
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

function ProductPanelSummary (props) {
  return (
    <Col className='my-4' sm={{ offset: 0, size: 6 }} style={productsColStyle}>
      <div style={{
        height: '100%',
        backgroundImage: 'url(//images.contentful.com/t9x0u6p47op0/2BxevJTKlY8eieW84SSYOG/687857aff9a9aa18ae1fb92b0bc15bb4/img_product_category_vitamin.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: '42px 64px'
      }}>
        <h2 className='font-weight-bold mb-4'>{props.name}</h2>
        <p className=''>
          {props.desc}
        </p>
      </div>
    </Col>
  )
}

function ProductPanelItem (props) {
  return (
    <a className='products-type__product-panel col-3 my-4' href='#'>
      <img className='w-100' src={props.imgSrc} />
      <div className='font-weight-bold' style={productPanelTitleStyle}>{props.title}</div>
      <div className='products-type__product-panel-middle'>
        <div className='products-type__product-panel-icons'>
          <img src='//assets.contentful.com/t9x0u6p47op0/371OPjK1x6mMuAkykg0mqO/b341ac42bf5f13bfb113917739972d34/ic_topic_energy.svg?w=80&amp;h=80' alt='Ic topic energy' />
        </div>
        <p className='products-type__product-panel-description'>
          {props.shortDesc}
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
  )
}

function CategoryRow (props) {
  const category = props.category
  const products = props.products

  // for initial rendering
  if (!category || !products) return (null)

  // ------ DUMMY DATA START ------
  const dummyImages = [
    '//images.contentful.com/t9x0u6p47op0/6AQipVvAtOcEqaiqkekYoU/0a0b21b39692f770fbe77b8f04f95f3e/img_vitaminb12_expert.jpg?w=340&h=190',
    '//images.contentful.com/t9x0u6p47op0/29RWgFnrvKCGoSUsUMk2OC/43efcf5ec370f7a98f5c76dc536f6571/img_bcomplex3_expert.jpg?w=340&h=190',
    '//images.contentful.com/t9x0u6p47op0/6Jbetlzyesawuqm6ys2IGG/dbd78634ca497c1469ab4c0aa5b5d171/img_prenatal_expert.jpg?w=340&h=190',
  ]
  // ------ DUMMY DATA END   ------

  // after fetch data, this is used
  return (
    <Row className='row-eq-height py-5'>
      <ProductPanelSummary name={category.name} desc={category.desc} />
      {products.map((product) => (
        <ProductPanelItem
          className=''
          key={product.id + product.name}
          title={product.name}
          shortDesc={product.short_desc}
          imgSrc={dummyImages[_.random(0, 2)]}
        />
      ))}
    </Row>
  )
}

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = initialState
  }

  async componentDidMount () {
    // fetch data from spreadsheets in development-mode
    try {
      {
        const { data } = await axios.get(API.getURL(API.SHEET_PRODUCTS))
        this.setState({ ...this.state, products: API.csvToObject(data.values) })
      }
      {
        const { data } = await axios.get(API.getURL(API.SHEET_CATEGORIES))
        this.setState({ ...this.state, categories: API.csvToObject(data.values) })
      }
    } catch (e) {
      console.error(e)
    }
  }

  createCategoryRows () {
    // show spinner, and the div element must be big enough to hide footer
    if (!this.state.categories.length || !this.state.products.length) {
      return (<div style={{ height: 2222 }}>
        <Spinner name='line-scale-pulse-out' fadeIn='none' style={{ position: 'fixed', top: '50%', left: '50%' }} />
      </div>)
    }

    return this.state.categories.map((category) => (
      <CategoryRow
        key={`CategoryRow-${category.name}`}
        category={category}
        products={_.filter(this.state.products, (e) => +e.category_id === +category.id)}
      />
    ))
  }

  render () {
    return (
      <div className='animated fadeIn'>
        <Container className='mx-auto' style={containerStyle}>
          <Row className='py-4 sticky-top bg-white' style={{ top: SECOND_STICKY_HEADER_POS_TOP }}>
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
            {this.createCategoryRows()}
            {/* <hr className='my-0 py-0' /> */}
          </section>
        </Container>
      </div>
    )
  }
}

export default Products

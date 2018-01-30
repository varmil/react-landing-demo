import React, {Component} from 'react'
import {
  Button,
  Row,
  Col,
} from 'reactstrap'

const strongSpan = { fontSize: 28, color: 'orange' }
const iconWidth = { width: '35%' }
const topImageStyle = {
  position: 'absolute',
  right: '10%',
  top: '0%'
}

class Personalize extends Component {
  render () {
    return (
      <div className='animated fadeIn'>
        <section className='my-5 py-5' style={{ height: 600 }}>
          <Row>
            <Col sm={{ offset: 0, size: 6 }} style={{ }}>
              <img src={'img/001.png'} className='img' alt='top image' width={450} style={topImageStyle} />
            </Col>
            <Col sm={{ offset: 0, size: 6 }}>
              <p className='mt-3 font-weight-bold' style={{ fontSize: 34 }}>
                自分だけの <br /> パフォーマンス向上サプリ
              </p>
              <p className='mt-1'>
                <span className='mr-1 font-weight-bold' style={strongSpan}>5分</span>のサーベイで <br />
                <span className='mr-1 font-weight-bold' style={strongSpan}>10万</span>通りの組み合わせから <br />
                あなただけの <br />
                パフォーマンス向上サプリパックを作ります。
              </p>

              <div className='mt-5'>
                <input type='email' className='form-control w-75 rounded-0' placeholder="What's your name ?" />
                <Button className='mt-3 p-3 rounded-0' color='warning'>Let's Start</Button>
              </div>
            </Col>
          </Row>
        </section>

        <section className='my-5 py-5 mx-4'>
          <Row>
            <Col className='text-center ml-sm-auto' sm={{ offset: 0, size: 3 }}>
              <h5>①答える</h5>
              <img style={iconWidth} className='' src='//images.contentful.com/t9x0u6p47op0/62CHmltDygAQSUCyGmeqOi/eb504725ff00712a80697b57ffaf3bf5/ic_howitworks_survey.gif' />
              <h6 className='text-left'>課題・目標・ライフスタイルに関する5分程度のサーベイにお答えください。</h6>
            </Col>

            <Col className='text-center' sm={{ offset: 1, size: 3 }}>
              <h5>②見る</h5>
              <img style={iconWidth} className='' src='//images.contentful.com/t9x0u6p47op0/6GPG2xn7WgAeKk8OiceusS/6865fbcd7d7fedbc2f47e996d89ca382/ic_howitworks_recommendations.gif' />
              <h6 className='text-left'>自分だけのパーソナライズサプリの中身をチェック。効用やエビデンスも確認できます。</h6>
            </Col>

            <Col className='text-center mr-sm-auto' sm={{ offset: 1, size: 3 }}>
              <h5>③受け取る</h5>
              <img style={iconWidth} className='' src='//images.contentful.com/t9x0u6p47op0/BFzIAWtVokUWWgO8qgQey/37d9dced160d04563df1aeaeac7d9d6b/ic_howitworks_delivery.gif' />
              <h6 className='text-left'>後は個別包装されたサプリが毎月届くのを待つだけ。もちろんいつでもキャンセルできます。</h6>
            </Col>
          </Row>
        </section>

      </div>
    )
  }
}

export default Personalize

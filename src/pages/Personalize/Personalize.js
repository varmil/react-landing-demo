import React, {Component} from 'react'
import {
  Button,
  Row,
  Col,
} from 'reactstrap'

const COLOR_ORANGE = '#ffc107'

const strongSpan = { fontSize: 28, color: COLOR_ORANGE }
const topImageStyle = {
  position: 'absolute',
  right: '10%',
  top: '0%'
}
const accentBorderStyle = {
  borderBottom: `${COLOR_ORANGE} 10px solid`,
  width: '8%',
  margin: '0 auto',
}
const iconWidth = { width: 100 }
const approachIconWidth = { height: 100 }
const supplementsIconStyle = { height: 70 }

class Personalize extends Component {
  render () {
    return (
      <div className='animated fadeIn'>
        <section className='py-5' style={{ height: 600 }}>
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

        <hr className='py-0 my-0' />

        <section className='' style={{ padding: '8rem 0' }}>
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

        <hr className='py-0 my-0' />

        <section className='py-5'>
          <h3 className='text-center mx-4'>パフォーマンス に関与する、6つの悩みに科学的にアプローチします</h3>
          <div className='accent-border mt-3 mb-5' style={accentBorderStyle} />
          {/* 6つのアイコン */}
          <Row>
            <Col className='text-center ml-sm-auto' sm={{ offset: 0, size: 2 }}>
              <img style={approachIconWidth} className='' src={'img/icons/concentration.png'} />
            </Col>
            <Col className='text-center' sm={{ offset: 1, size: 2 }}>
              <img style={approachIconWidth} className='' src={'img/icons/motivation.png'} />
            </Col>
            <Col className='text-center mr-sm-auto' sm={{ offset: 1, size: 2 }}>
              <img style={approachIconWidth} className='' src={'img/icons/sleep.png'} />
            </Col>
          </Row>
          <Row className='mt-2'>
            <Col className='text-center ml-sm-auto' sm={{ offset: 0, size: 2 }}>
              <img style={approachIconWidth} className='' src={'img/icons/liver.png'} />
            </Col>
            <Col className='text-center' sm={{ offset: 1, size: 2 }}>
              <img style={approachIconWidth} className='' src={'img/icons/stress.png'} />
            </Col>
            <Col className='text-center mr-sm-auto' sm={{ offset: 1, size: 2 }}>
              <img style={approachIconWidth} className='' src={'img/icons/immunity.png'} />
            </Col>
          </Row>
          {/* サプリ説明 */}
          <Row className='' style={{ marginTop: 100 }}>
            <Col className='text-center ml-sm-auto' sm={{ offset: 0, size: 4 }}>
              <Row className='align-items-center'>
                <Col className='ml-sm-auto' sm={{ offset: 0, size: 4 }}>
                  <img style={supplementsIconStyle} className='' src={'img/icons/pill002.png'} />
                </Col>
                <Col className='mr-sm-auto' sm={{ offset: 0, size: 4 }}>
                  <div>
                    <div>サプリA</div>
                    <div>aaa</div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className='text-center mr-sm-auto' sm={{ offset: 0, size: 4 }}>
              <Row className='align-items-center'>
                <Col className='ml-sm-auto' sm={{ offset: 0, size: 4 }}>
                  <img style={supplementsIconStyle} className='' src={'img/icons/pill003.png'} />
                </Col>
                <Col className='mr-sm-auto' sm={{ offset: 0, size: 4 }}>
                  <div>
                    <div>サプリB</div>
                    <div>aaa</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* 詳細ボタン */}
          <div className='mx-auto mt-3' style={{ width: 300 }}>
            <Button className='w-100 p-3 rounded-0' color='warning'>詳細</Button>
          </div>

        </section>

      </div>
    )
  }
}

export default Personalize

import React, {Component} from 'react'
import {
  Button,
  Row,
  Col,
} from 'reactstrap'

const COLOR_ORANGE = '#e2791a'

const strongSpan = { fontSize: 28, color: COLOR_ORANGE }
const topImageStyle = {
  position: 'absolute',
  right: '10%',
  top: '0%'
}
const smallIconWidth = { width: 85 }
const approachIconHeight = { height: 120 }
const supplementsIconStyle = { height: 70 }

/**
  Functional Components
*/
function SectionTitleAndBorder (props) {
  const accentBorderStyle = {
    borderBottom: `${COLOR_ORANGE} 4px solid`,
    width: '8%',
    margin: '0 auto',
  }
  return (
    <div>
      <h3 className='text-center font-weight-bold mx-4'>{props.title}</h3>
      <div className='accent-border mt-3 mb-5' style={accentBorderStyle} />
    </div>
  )
}

function HowItWorks (props) {
  const iconWidth = { width: 100 }
  return (
    <div>
      <h5>{props.title}</h5>
      <img style={iconWidth} className='' src={props.imgSrc} alt={'How It Works'} />
      <h6 className='text-left'>{props.text}</h6>
    </div>
  )
}

class Personalize extends Component {
  render () {
    return (
      <div className='animated fadeIn'>
        {/* 1st section */}
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
                <input type='username' className='form-control w-75 rounded-0 py-3' style={{ maxWidth: 500 }} placeholder="What's your name ?" />
                <Button className='mt-3 py-3 rounded-0 text-white font-weight-bold' style={{ width: 200 }} color='warning'>Let's Start</Button>
              </div>
            </Col>
          </Row>
        </section>

        <hr className='py-0 my-0' />

        {/* 3 points section */}
        <section className='' style={{ padding: '7rem 5rem' }}>
          <Row>
            <Col className='text-center ml-sm-auto' sm={{ offset: 0, size: 3 }}>
              <HowItWorks
                title='①答える'
                imgSrc='//images.contentful.com/t9x0u6p47op0/62CHmltDygAQSUCyGmeqOi/eb504725ff00712a80697b57ffaf3bf5/ic_howitworks_survey.gif'
                text='課題・目標・ライフスタイルに関する5分程度のサーベイにお答えください。'
              />
            </Col>
            <Col className='text-center' sm={{ offset: 1, size: 3 }}>
              <HowItWorks
                title='②見る'
                imgSrc='//images.contentful.com/t9x0u6p47op0/6GPG2xn7WgAeKk8OiceusS/6865fbcd7d7fedbc2f47e996d89ca382/ic_howitworks_recommendations.gif'
                text='自分だけのパーソナライズサプリの中身をチェック。エビデンスも確認できます。'
              />
            </Col>
            <Col className='text-center mr-sm-auto' sm={{ offset: 1, size: 3 }}>
              <HowItWorks
                title='③受け取る'
                imgSrc='//images.contentful.com/t9x0u6p47op0/BFzIAWtVokUWWgO8qgQey/37d9dced160d04563df1aeaeac7d9d6b/ic_howitworks_delivery.gif'
                text='後は個別包装されたサプリが毎月届くのを待つだけ。もちろんいつでもキャンセルできます。'
              />
            </Col>
          </Row>
        </section>

        <hr className='py-0 my-0' />

        {/* 3rd section */}
        <section className='py-5'>
          <SectionTitleAndBorder title={'パフォーマンス に関与する、6つの悩みに科学的にアプローチします'} />
          {/* 6つのアイコン */}
          <Row>
            <Col className='text-center ml-sm-auto' sm={{ offset: 0, size: 2 }}>
              <img style={approachIconHeight} className='' src={'img/icons/concentration.png'} />
            </Col>
            <Col className='text-center' sm={{ offset: 1, size: 2 }}>
              <img style={approachIconHeight} className='' src={'img/icons/motivation.png'} />
            </Col>
            <Col className='text-center mr-sm-auto' sm={{ offset: 1, size: 2 }}>
              <img style={approachIconHeight} className='' src={'img/icons/sleep.png'} />
            </Col>
          </Row>
          <Row className='mt-2'>
            <Col className='text-center ml-sm-auto' sm={{ offset: 0, size: 2 }}>
              <img style={approachIconHeight} className='' src={'img/icons/liver.png'} />
            </Col>
            <Col className='text-center' sm={{ offset: 1, size: 2 }}>
              <img style={approachIconHeight} className='' src={'img/icons/stress.png'} />
            </Col>
            <Col className='text-center mr-sm-auto' sm={{ offset: 1, size: 2 }}>
              <img style={approachIconHeight} className='' src={'img/icons/immunity.png'} />
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
            <Button className='w-100 p-3 rounded-0 text-white font-weight-bold' color='warning'>詳細</Button>
          </div>
        </section>

        <hr className='py-0 my-0' />

        {/* 4th section */}
        <section className='py-5' style={{ minHeight: 600 }}>
          <SectionTitleAndBorder title={'パーソナライズサプリは、データとフィードバックでより賢く、より精緻に'} />
          <Row>
            <Col className='d-flex justify-content-center align-items-center py-4 ml-sm-auto' sm={{ offset: 0, size: 6 }}>
              <div style={{ width: '60%' }}>
                <p>国内外の学術論文、専門家の知見に基づき、あなたの課題・目標・ライフスタイルに最適化したサプリメントを 10 万通りの組み合わせからご提案します。</p>
                <p>しかしここで終わりではありません。</p>
                <p>あなたの定性 / 定量両面におけるフィードバックをもとに独自の AI を活用することで、パーソナライズを精緻化し、より最適なご提案を行います。</p>
                <p><u>我々は、あなたに最適化し続けるパーソナライズサプリ体験をご提供します。</u></p>
              </div>
            </Col>
            <Col className='text-center mr-sm-auto' sm={{ offset: 0, size: 4 }}>
              <div className='d-flex flex-column'>
                <div className=''>
                  <div className='flex-row'>
                    <img style={smallIconWidth} className='' src={'img/icons/paper.jpg'} />
                    <img style={smallIconWidth} className='ml-5' src={'img/icons/expert.jpg'} />
                  </div>
                </div>
                <div className='mt-5'>
                  <img style={smallIconWidth} className='' src={'img/icons/brain.png'} />
                </div>
                <div className='mt-5'>
                  <img style={smallIconWidth} className='' src={'img/icons/person.png'} />
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <hr className='py-0 my-0' />

        {/* 5th section */}
        <section className='py-0' style={{ }}>
          <img style={{}} className='img-fluid' src={'img/founder.png'} />
        </section>

        <hr className='py-0 my-0' />

        {/* 6th section */}
        <section className='py-5' style={{ }}>
          <SectionTitleAndBorder title={'データと確かなユーザー体験で “パフォーマンス” 向上をお助けする'} />
          <div className='d-flex justify-content-center align-items-center py-4 ml-sm-auto' sm={{ offset: 0, size: 6 }}>
            <div style={{ width: '60%' }}>
              <p>
                私たちは ”パフォーマンス” を、<br />
                <b>「自分のライフスタイルの価値観に沿った自己実現」と考えています。</b>
              </p>
              <p>ある人にとっては “パフォーマンスがよい”とは、短時間で集中して仕事を片付けることかもしれませんし、またある人にとってはストレスなく趣味を謳歌することかもしれません。</p>
              <p>絶え間なく変化が起こる現代。周りに流さず、自分らしくより良く生きるためには、自身のパフォーマンスと向きあい、恒常的にパフォーマンス発揮することが不可欠です。</p>
              <p>我々は、データに基づく科学的アプローチと確かなユーザー体験を組み合わせ、最適なユーザーに、最適なモノを、最適なタイミングで提供することで、誰もがパフォーマンスを発揮できる世界を目指します。</p>
            </div>
          </div>
        </section>

        <hr className='py-0 my-0' />

        {/* final section */}
        <section className='py-5' style={{ }}>
          <SectionTitleAndBorder title={'まずは、サーベイであなただけのパーソナライズサプリをチェック'} />
          <div className='mx-auto mt-3' style={{ width: 300 }}>
            <Button className='w-100 p-3 rounded-0 text-white font-weight-bold' color='warning'>Let's Start</Button>
          </div>
        </section>

      </div>
    )
  }
}

export default Personalize

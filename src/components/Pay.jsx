import { Col, Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom'
import cmbcSvg from '../assets/cmbc.svg'
import BlueLine from './utils/BlueLine';
function Pay() {
  const navigate = useNavigate()
  return (
    <div className='payBg flex'>
      <div className="payBorder m-auto">
        <div className='payContainer'>
          <Row>
            <Col className='w-full'>
              <h2 className='text-4xl'>您已绑定支付方式</h2>
            </Col>
          </Row>
          <Row>
            <Col className='w-full'>
              <h2 className='text-2xl m-2'>将从以下账户自动扣款</h2>
            </Col>
          </Row>
          <Row className="mt-8 mb-4">
            <BlueLine></BlueLine>
          </Row>
          <Row>
            <Col className='w-2/5'>
              <object width="" height="100px" data={cmbcSvg} type="image/svg+xml" />
            </Col>
            <Col className='cardName w-3/5'>
              <h2 className='text-4xl'>招商银行</h2>
              <h2 className='text-2xl mt-2'>信用卡(1408)</h2>
            </Col>
          </Row>
          <Row className="mt-4 mb-8">
            <BlueLine></BlueLine>
          </Row>
          <Row>
            <h2 className='text-xl text-left opacity-70' onClick={() => navigate('/payElse')}>更换其他支付方式 &gt;</h2>
          </Row>
          <Row>
            <Col className='w-full m-4 mt-8'>
              <h2 className='text-6xl'><span className='text-2xl'>￥</span>135.9</h2>
            </Col>
          </Row>
          <Row>
            <Col className='w-full m-4'>
          <Button type="primary" shape="round" size="large" className='submitBtn' onClick={() => navigate('/')}>付款</Button>
            </Col>

          </Row>
        </div>
      </div>
    </div>
  )
}

export default Pay
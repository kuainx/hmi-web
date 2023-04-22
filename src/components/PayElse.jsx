import { Col, Row, Radio } from 'antd';
import alipaySvg from '../assets/alipay.svg';
import wepaySvg from '../assets/wepay.svg';
import unionpaySvg from '../assets/unionpay.svg';
import BlueLine from './utils/BlueLine';
function PayElse() {
  return (
    <>
      <Row className='mb-4' onClick={() => alert('支付宝')}>
        <Col className='w-2/5'>
          <object className='m-auto' width='' height='80px' data={alipaySvg} type='image/svg+xml' />
        </Col>
        <Col className='cardName w-3/5'>
          <h2 className='text-2xl'>支付宝</h2>
        </Col>
      </Row>
      <Row className='mt-4 mb-4'>
        <BlueLine></BlueLine>
      </Row>
      <Row className='mb-4'>
        <Col className='w-2/5'>
          <object className='m-auto' width='' height='80px' data={wepaySvg} type='image/svg+xml' />
        </Col>
        <Col className='cardName w-3/5' onClick={() => alert('微信支付')}>
          <h2 className='text-2xl'>微信支付</h2>
        </Col>
      </Row>
      <Row className='mt-4 mb-4'>
        <BlueLine></BlueLine>
      </Row>
      <Row className='mb-4' onClick={() => alert('银联云闪付')}>
        <Col className='w-2/5'>
          <object className='m-auto' width='' height='80px' data={unionpaySvg} type='image/svg+xml' />
        </Col>
        <Col className='cardName w-3/5'>
          <h2 className='text-2xl'>银联云闪付</h2>
        </Col>
      </Row>
    </>
  );
}

export default PayElse;

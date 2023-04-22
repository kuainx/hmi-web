import { Col, Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import cmbcSvg from '../assets/cmbc.svg';
import BlueLine from './utils/BlueLine';
function PayCard() {
  const navigate = useNavigate();
  return (
    <>
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
      <Row className='mt-8 mb-4'>
        <BlueLine></BlueLine>
      </Row>
      <Row>
        <Col className='w-2/5'>
          <object width='' height='100px' data={cmbcSvg} type='image/svg+xml' />
        </Col>
        <Col className='cardName w-3/5'>
          <h2 className='text-4xl'>招商银行</h2>
          <h2 className='text-2xl mt-2'>信用卡(1408)</h2>
        </Col>
      </Row>
      <Row className='mt-4 mb-8'>
        <BlueLine></BlueLine>
      </Row>
    </>
  );
}

export default PayCard;

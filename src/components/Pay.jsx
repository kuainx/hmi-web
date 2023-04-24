import { Col, Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PayCard from './PayCard';
import PayElse from './PayElse';
function Pay() {
  const navigate = useNavigate();
  const [payMethod, setPayMethod] = useState(true);
  return (
    <div className='payBg flex'>
      <div className='payBorder m-auto'>
        <div className='payContainer'>
          {payMethod ? <PayCard></PayCard> : <PayElse></PayElse>}
          <Row>
            <h2 className='text-xl text-left opacity-70' onClick={() => setPayMethod(!payMethod)}>
              更换其他支付方式 &gt;
            </h2>
          </Row>
          <Row>
            <Col className='w-full m-4 mt-8'>
              <h2 className='text-6xl'>
                <span className='text-2xl'>￥</span>135.9
              </h2>
            </Col>
          </Row>
          {payMethod ? (
            <Row>
              <Col className='w-full m-4'>
                <Button
                  type='primary'
                  shape='round'
                  size='large'
                  className='submitBtn'
                  onClick={() => navigate('/start')}
                >
                  付款
                </Button>
              </Col>
            </Row>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pay;

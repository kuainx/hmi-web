import { Col, Row, Button, Modal, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useStores, mobxObserver } from '../store';
import { CheckCircleOutlined } from '@ant-design/icons';
import PayCard from './PayCard';
import PayElse from './PayElse';
function Pay() {
  const navigate = useNavigate();
  const { runningStore } = useStores();
  const [payMethod, setPayMethod] = useState(true);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div className='payBg flex'>
      <Modal
        title=''
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        maskClosable={false}
      >
        <Result
          className='scale-150'
          status='success'
          title='您已付款完成'
          subTitle='请点击左上角 返回 按钮以继续换电流程'
        />
      </Modal>
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
                <span className='text-2xl'>￥</span>
                {runningStore.totalPrice}
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
                  onClick={() => setModal2Open(true)}
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

export default mobxObserver(Pay);

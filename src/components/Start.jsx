import { Col, Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
function Start() {
  const navigate = useNavigate();
  return (
    <div className='finishContainer flex flex-col justify-center text-center'>
      <Row className='justify-center'>
        <Col>
          <div className='m-4'>
            <h1 className='text-4xl'>
              <CheckCircleOutlined className='text-6xl greenIcon' />
              <span className='align-middle ml-8'>换电服务已就绪</span>
            </h1>
          </div>
        </Col>
      </Row>
      <Row className='justify-center mt-8'>
        <Col>
          <h1 className='text-4xl'>车辆将自动泊入换电站并开始换电</h1>
        </Col>
      </Row>
      <Row className='justify-center mt-2'>
        <Col>
          <h1 className='text-2xl'>期间请不要转动方向盘、踩踏板、打开车门</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className='w-4/5 m-auto' src='/src/assets/1.png' alt='' />
        </Col>
      </Row>
      <Row className='justify-center m-4'>
        <Col>
          <Button type='primary' shape='round' size='large' className='submitBtn' onClick={() => navigate('/change')}>
            开始换电
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Start;

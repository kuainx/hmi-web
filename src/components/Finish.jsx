import { Col, Row, Rate } from 'antd';
import BatteryPlus from './utils/BatteryPlus';
import { CheckCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
function Finish() {
  return (
    <div className='finishContainer flex flex-col justify-center text-center'>
      <Row className='justify-center'>
        <Col>
          <div className='m-4'>
            <h1 className='text-4xl'>
              <CheckCircleOutlined className='text-6xl greenIcon' />
              <span className='align-middle ml-8'>换电完成</span>
            </h1>
          </div>
        </Col>
      </Row>
      <BatteryPlus></BatteryPlus>
      <Row className='justify-center m-4'>
        <Col>
          <div className='m-4'>
            <h1 className='text-3xl'>
              <span className='align-middle ml-8 mr-4'>服务评价</span>
              <QuestionCircleOutlined className='text-2xl greenIcon' />
            </h1>
          </div>
        </Col>
      </Row>
      <Row className='justify-center m-4'>
        <Col className='transform scale-150'>
          <Rate className='transform scale-150' allowHalf defaultValue={5} />
        </Col>
      </Row>
    </div>
  );
}

export default Finish;

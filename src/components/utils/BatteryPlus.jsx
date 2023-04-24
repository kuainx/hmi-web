import { Col, Row } from 'antd';
import BatterySvg from '../../assets/battery-5.svg';
function Battery() {
  return (
    <Row className='justify-center mt-16 mb-16'>
      <Col className='mr-8'>
        <object width='' height='150px' data={BatterySvg} type='image/svg+xml' />
        <h3 className='text-4xl -mt-4'>100%</h3>
      </Col>
      <Col className='flex flex-col justify-center'>
        <Row>
          <h3 className='text-3xl'>续航里程</h3>
        </Row>
        <Row>
          <h3 className='text-6xl'>
            <span style={{ color: '#1FCCCA' }}>+400</span>km
          </h3>
        </Row>
      </Col>
    </Row>
  );
}

export default Battery;

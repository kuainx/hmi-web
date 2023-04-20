import { Col, Row } from 'antd';
import BatterySvg from '../../assets/battery-5.svg'
function Battery() {
  return (
    <div className='batteryContainer m-4'>
      <Row>
      <object width="" height="150px" data={BatterySvg} type="image/svg+xml" />
      </Row>
      <Row>
        <h3 className='text-4xl -mt-4 mb-2'>100% 30kWh</h3>
      </Row>
      <Row>
        <h3 className='text-2xl'>CATL 2B07D302560</h3>
      </Row>
    </div>

  )
}

export default Battery
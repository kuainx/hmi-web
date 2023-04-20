import { Col, Row } from 'antd';
import ShopLeft from './ShopLeft';
import ShopRight from './ShopRight';
function Shop() {
  return (
    <Row className='Shop'>
      <Col span={12} className='ShopLeftContainer'><ShopLeft></ShopLeft></Col>
      <Col span={12}><ShopRight></ShopRight></Col>
    </Row>
  )
}

export default Shop
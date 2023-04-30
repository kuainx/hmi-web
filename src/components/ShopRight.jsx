import { Col, Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import NumSelector from './utils/NumSelector';
import BatteryList from './utils/BatteryList';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useStores, mobxObserver } from '../store';
function ShopRight() {
  const navigate = useNavigate();
  const { runningStore } = useStores();
  return (
    <div className='ShopRight container p-12'>
      <Row className='h-1/5'>
        <div className='m-4'>
          <h1 className='text-3xl m-4'>
            前方排队 <span className='text-5xl'>1</span> 辆<span className='opacity-70 ml-4'>约3分钟</span>
          </h1>
        </div>
      </Row>
      <Row className='h-1/4'>
        <Col>
          <div className='m-4'>
            <h1 className='text-3xl'>
              <CheckCircleOutlined className='text-5xl greenIcon' />
              <span className='align-middle ml-8'>成功连接换电站</span>{' '}
            </h1>
          </div>
          <div className='m-4 mt-12'>
            <h1 className='text-3xl'>
              <CheckCircleOutlined className='text-5xl greenIcon' />
              <span className='align-middle ml-8'>自动跟车已开启</span>{' '}
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <h1 className='text-3xl m-4'>
          待换电池 <NumSelector></NumSelector>
        </h1>
      </Row>
      <Row className='flex-col w-full overflow-scroll' style={{ height: '250px' }}>
        <BatteryList></BatteryList>
      </Row>
      <Row>
        <Col>
          <h1 className='text-2xl m-4'>
            合计：￥ <span className='text-6xl'>{runningStore.totalPrice}</span>
          </h1>
        </Col>
        <Col>
          <Button type='primary' shape='round' size='large' className='submitBtn ml-8' onClick={() => navigate('/pay')}>
            提交订单
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default mobxObserver(ShopRight);

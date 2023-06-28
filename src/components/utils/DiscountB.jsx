import { Card, Tag } from 'antd';
import { Col, Row } from 'antd';
import { Divider, Button } from 'antd';

const DiscountB = () => (
  <div className='mb-24'>
    <div className='origin-top-left scale-150' style={{ width: 500 }}>
      <Tag color='cyan' className='ml-8'>
        优能平台券
      </Tag>
      <Card
        className='w-full'
        style={{
          marginTop: -10,
          zIndex: -1,
        }}
      >
        <Row className=''>
          <Col span={6} className='greenText text-center'>
            <span className='text-l'>￥</span>
            <span className='text-6xl'>20</span>
          </Col>
          <Col span={12}>
            <h1 className=' text-xl'>新人专属优惠券</h1>
            <h3 className='text-l opacity-70'>有效期至2023.8.15</h3>
            <h3>
              <Tag bordered={false} color='green'>
                满50可用
              </Tag>
            </h3>
          </Col>
          <Col span={6}>
            <Button
              type='primary'
              shape='round'
              className='flex-col justify-center m-4'
              style={{ backgroundColor: '#29cce0' }}
            >
              积分兑换
            </Button>
          </Col>
        </Row>
        <Row className=''>
          <Divider dashed className='dashedDivider' />
        </Row>
        <Row className='justify-between'>
          <Col>
            <span className='text-xl greenText'>10</span> 积分 | 您目前有<span className='text-xl greenText'>500</span>
            积分
          </Col>
          <Col>
            <Button type='link'>查看详情 &gt;</Button>
          </Col>
        </Row>
      </Card>
    </div>
  </div>
);
export default DiscountB;
